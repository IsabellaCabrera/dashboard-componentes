import bigPost from './data/BigPost-data';
import mediumPost from './data/MediumPost-data';
import littlePost  from './data/LittlePost-data';
import users from './data/Users-data';
import NavBar, { Attribute } from './componentes/NavBar/NavBar';
import moodBanner,{Attribute1} from './componentes/moodBanner/moodBanner';
import todaysMood, {Attribute2} from './componentes/todaysMood/todaysMood';
import UsersBannerCardimport, { AttributeUsersBanner } from './componentes/relatedUsersBanner/relatedUsersBanner';
import relatedUsersCard, {relatedUsers} from './componentes/relatedUsersCard/relatedUsersCard';
import Post, { bigAttribute } from './componentes/bigCard/bigCard';
import mPost, { mediumAttribute } from './componentes/mediumCard/mediumCard';
import lPost, {littleAttribute }from './componentes/littleCard/littleCard';
import upost, {userAtributte} from './componentes/trendingImgCard/trendingImgCard';
import uInfoPost, {userinfoAtributte} from './componentes/trendingInfoCard/trendingInfoCard';


class AppContainer extends HTMLElement {
    bigposts: Post[] = [];
    mediumPosts: mPost[] = [];
    littlePosts: lPost[] = [];
    userPosts: upost[] = [];
    userInfoPosts: uInfoPost [] = [];
    relatedUsersRender: relatedUsersCard[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const filteredUsers = users.filter(user => {
            const userId = parseInt(user.id, 10); 
            return userId >= 4 && userId <= 11;   
        });


        filteredUsers.forEach(user => {
            const UssersPrint = this.ownerDocument.createElement("related-user") as relatedUsersCard;
            UssersPrint.setAttribute(relatedUsers.image1, user.image);
            UssersPrint.setAttribute(relatedUsers.username1, user.username);
            this.relatedUsersRender.push(UssersPrint);


        })

        const filteredBigPost = bigPost.filter(post => post.id === 1 || post.id === 2);

        filteredBigPost.forEach(post => {
            const postElement = this.ownerDocument.createElement("component-post") as Post;
            postElement.setAttribute(bigAttribute.img, post.img);
            postElement.setAttribute(bigAttribute.title, post.title);
            postElement.setAttribute(bigAttribute.bodytext, post.bodytext);
            this.bigposts.push(postElement);
        });

        const filteredMediumPost = mediumPost.filter(post => post.id >= 1 && post.id <= 4);

        filteredMediumPost.forEach(post => {
            const mediumPostElement = this.ownerDocument.createElement("medium-component-post") as mPost; 
            mediumPostElement.setAttribute(mediumAttribute.img, post.img);
            mediumPostElement.setAttribute(mediumAttribute.description, post.description);
            this.mediumPosts.push(mediumPostElement);
        });

        const filteredLittlePost = littlePost.filter(post => post.id === 1);

        filteredLittlePost.forEach(post => {
            const littlePostElement = this.ownerDocument.createElement("little-component-post") as lPost;
            littlePostElement.setAttribute(littleAttribute.img, post.img);
            this.littlePosts.push(littlePostElement);
        })

        const filteredUserInfoPost = users.filter(user => Number(user.id) >= 1 && Number(user.id) <= 3);


        filteredUserInfoPost.forEach(user => {
            const userElement = this.ownerDocument.createElement("trending-img-card") as upost;
            userElement.setAttribute(userAtributte.username, user.username);
            userElement.setAttribute(userAtributte.date, user.date);
            userElement.setAttribute(userAtributte.image, user.image);
            this.userPosts.push(userElement);
        });

        const filteredUserPost = users.filter(user => Number(user.id) >= 1 && Number(user.id) <= 3);


        filteredUserPost.forEach(user => {
            const userInfoElement = this.ownerDocument.createElement("trending-info-card") as uInfoPost ;
            userInfoElement .setAttribute(userinfoAtributte.title, user.title);
            userInfoElement .setAttribute(userinfoAtributte.description, user.description);
            this.userInfoPosts.push(userInfoElement );
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <nav-bar></nav-bar>

                <mood-banner></mood-banner>

                <todays-mood></todays-mood> 

                <relatedusers-banner></relatedusers-banner>

                <div class="related-users-container"></div>


                <div id="post">
                    <div id="component-post"></div>
                </div>

                <div id="medium-post"> 
                    <div id="medium-component-post"></div> 
                </div>    
                
                <div id="little-post"> 
                    <div id="little-component-post"></div> 
                </div>
                
                <div id="user-image-post">
                 <div id="trending-img-card"></div>
                </div>


                <div id="trending-info-post">
                    <div id="trending-info-card"></div>
                </div>
            `;

            const navBar = this.shadowRoot.querySelector('nav-bar');
            if (navBar) {
                navBar.setAttribute(Attribute.image, 'https://github.com/IsabellaCabrera/assets-img/blob/main/TrendHype.png?raw=true');  
                navBar.setAttribute(Attribute.foryou, 'For You');
                navBar.setAttribute(Attribute.following, 'Following');
            }   
        
            const moodBanner = this.shadowRoot.querySelector('mood-banner');
            if (moodBanner) {
                moodBanner.setAttribute(Attribute1.button1, 'Daily tracker');
                moodBanner.setAttribute(Attribute1.answer, 'Answer daily questions');
                moodBanner.setAttribute(Attribute1.findout, 'Find out today`s mood');
                moodBanner.setAttribute(Attribute1.button2, 'Answer now');
                moodBanner.setAttribute(Attribute1.image, 'https://github.com/IsabellaCabrera/assets-img/blob/main/Group%2018.png?raw=true');
            }

            const todaysMood = this.shadowRoot.querySelector('todays-mood');
            if (todaysMood) {
                todaysMood.setAttribute(Attribute2.image, 'https://github.com/IsabellaCabrera/assets-img/blob/main/Group%2018.png?raw=true');
                todaysMood.setAttribute(Attribute2.quicksearchtext, 'Quick search');
                todaysMood.setAttribute(Attribute2.moodtext, 'Today`s mood');
                todaysMood.setAttribute(Attribute2.profileimage, 'https://github.com/IsabellaCabrera/assets-img/blob/main/Group%2018.png?raw=true');
                todaysMood.setAttribute(Attribute2.profilename, 'Jeanalomia');
                todaysMood.setAttribute(Attribute2.profiledescription, 'Chasing dreams and making memories.');
                todaysMood.setAttribute(Attribute2.followerscount, '500k');
                todaysMood.setAttribute(Attribute2.likescount, '2M');
            }

            const relatedUsersBanner = this.shadowRoot.querySelector('.relatedusers-banner');
            if (relatedUsersBanner){
                relatedUsersBanner.setAttribute(AttributeUsersBanner.message, 'You may be interested in')
            }

            const relatedUsers = this.shadowRoot.querySelector('.related-users-container');
            this.relatedUsersRender.forEach(Element =>{
                if (relatedUsers) {
                    relatedUsers.appendChild(Element);
                    const messageButton = document.createElement('message-button');
                    relatedUsers.appendChild(messageButton);  
                    // las dos lineas anteriores sacarlas y meterlas en los post para follow y unfollow
                    
                }
            })

            const postContainer = this.shadowRoot.querySelector("#component-post");

            this.bigposts.forEach(post => {
                if (postContainer) {
                    postContainer.appendChild(post);
                }
            });

            const postMediumContainer = this.shadowRoot.querySelector("#medium-component-post"); // Updated name

            this.mediumPosts.forEach(post => {
                if (postMediumContainer) {
                    postMediumContainer.appendChild(post);
                }
            });

            const postLittleContainer = this.shadowRoot.querySelector("#little-component-post"); // Updated name

            this.littlePosts.forEach(post => {
                if (postLittleContainer) {
                    postLittleContainer.appendChild(post);
                }
            });

            const userImageContainer = this.shadowRoot.querySelector("#trending-img-card"); // Updated name

            this.userPosts.forEach(user => {
                if (userImageContainer) {
                    userImageContainer.appendChild(user);
                }
            });

            const userInfoContainer = this.shadowRoot.querySelector("#trending-info-card"); 

            this.userInfoPosts.forEach(user => {
                if (userInfoContainer) {
                    userInfoContainer.appendChild(user);
                }
            });


        }
    }
}

customElements.define('app-container', AppContainer);
export default AppContainer;
