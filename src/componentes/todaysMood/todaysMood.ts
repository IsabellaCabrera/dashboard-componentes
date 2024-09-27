export enum Attribute2 {
    "image" = "image",
    "quicksearchtext" = "quicksearchtext",
    "moodtext" = "moodtext",
    "profileimage" = "profileimage",
    "profilename" = "profilename",
    "profiledescription" = "profiledescription",
    "followerscount" = "followerscount",
    "likescount" = "likescount"
}

class todaysMood extends HTMLElement {
    image?: string;
    quicksearchtext?: string;
    moodtext?: string;
    profileimage?: string;
    profilename?: string;
    profiledescription?: string;
    followerscount?: number;
    likescount?: number;

    static get observedAttributes() {
        return Object.keys(Attribute2);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute2, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attribute2.followerscount:
                this.followerscount = newValue ? Number(newValue) : undefined;
                break;
            case Attribute2.likescount:
                this.likescount = newValue ? Number(newValue) : undefined;
                break;

                default:
                this[propName] = newValue;
                
    }
    this.render();
}

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                @font-face {
                    font-family: 'Relationship of Melodrama';
                    src: url('path_to_your_font/relationship-of-melodrama.woff2') format('woff2'), 
                         url('path_to_your_font/relationship-of-melodrama.woff') format('woff');
                }

                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }

                .main-container {
                  width: 350px;
                  padding: 20px;
                  background-color: #3f3c1e;
                  border-radius: 20px;
                  color: white;
                  font-family: 'Poppins', sans-serif;
                }

                /* Quick Search */
                .quick-search h3 {
                  font-weight: 600;
                  font-size: 16px;
                  margin-bottom: 10px;
                }

                .search-bar {
                  display: flex;
                  background-color: #e5e4d0;
                  padding: 10px;
                  border-radius: 15px;
                }

                .search-bar input {
                  border: none;
                  background: none;
                  width: 100%;
                  font-size: 14px;
                  color: #5f5f4e;
                }

                .search-bar button {
                  background: none;
                  border: none;
                  cursor: pointer;
                  color: #5f5f4e;
                  font-size: 16px;
                }

                /* Today's Mood */
                .mood-section {
                  background-color: #b2581c;
                  padding: 20px;
                  text-align: center;
                  border-radius: 20px;
                  margin: 20px 0;
                }

                .mood-section p {
                  font-family: 'Relationship of Melodrama', cursive;
                  font-size: 24px;
                  color: #f6f4ed;
                }

                /* Profile Section */
                .profile-section {
                  background-color: #c8d1e1;
                  padding: 20px;
                  border-radius: 20px;
                  text-align: center;
                }

                .profile-info img {
                  width: 100px;
                  height: 100px;
                  border-radius: 50%;
                  margin-bottom: 10px;
                }

                .profile-info h2 {
                  font-weight: 600;
                  color: #2f2d17;
                }

                .profile-info p {
                  font-weight: 400;
                  color: #2f2d17;
                  font-size: 14px;
                }

                /* Profile Stats */
                .profile-stats {
                  display: flex;
                  justify-content: space-around;
                  margin-top: 20px;
                }

                .followers, .likes {
                  display: flex;
                  align-items: center;
                  gap: 5px;
                }

                .followers span, .likes span {
                  font-weight: 600;
                  font-size: 16px;
                  color: #60391e;
                }
              </style>

              <div class="main-container">
                <!-- Quick Search Section -->
                <div class="quick-search">
                  <h3>${this.quicksearchtext || 'QUICK SEARCH'}</h3>
                  <div class="search-bar">
                    <input type="text" placeholder="Type here to search" />
                    <button><i class="fa fa-search"></i></button>
                  </div>
                </div>

                <!-- Today's Mood Section -->
                <div class="mood-section">
                  <p>${this.moodtext || "today's mood"}</p>
                </div>

                <!-- Profile Section -->
                <div class="profile-section">
                  <h4>Profile</h4>
                  <div class="profile-info">
                    <img src="${this.profileimage || 'default_profile_image.png'}" alt="Profile Picture" />
                    <h2>${this.profilename || 'Jeanalomia'}</h2>
                    <p>${this.profiledescription || 'Chasing dreams and making memories'}</p>
                  </div>
                  <div class="profile-stats">
                    <div class="followers">
                      <i class="fa fa-user"></i>
                      <span>${this.followerscount || '500k'}</span>
                    </div>
                    <div class="likes">
                      <i class="fa fa-heart"></i>
                      <span>${this.likescount || '2M'}</span>
                    </div>
                  </div>
                </div>
              </div>

            

           
            `;
        }
    }
}

customElements.define('todays-mood', todaysMood);
export default todaysMood;