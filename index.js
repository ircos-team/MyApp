


const leftBareToggle = document.querySelector('.left-bare-toggle');
let media680 = window.matchMedia('(max-width: 680px)');
if (media680.matches) {
    document.querySelector('.left').classList.add('display-none');
    document.querySelector('.left-bare-toggle .fa-odnoklassniki-square').classList.remove('display-none');
    document.querySelector('.left-bare-toggle .fa-odnoklassniki').classList.add('display-none');
}
media680.addEventListener("change", () => {
    if (media680.matches) {
        document.querySelector('.left').classList.add('display-none');
        document.querySelector('.left-bare-toggle .fa-odnoklassniki-square').classList.remove('display-none');
        document.querySelector('.left-bare-toggle .fa-odnoklassniki').classList.add('display-none');
    }
    else{
        document.querySelector('.left').classList.remove('display-none');
        document.querySelector('.left-bare-toggle .fa-odnoklassniki-square').classList.add('display-none');
        document.querySelector('.left-bare-toggle .fa-odnoklassniki').classList.remove('display-none');
    }
});

leftBareToggle.addEventListener('click', () => {
    document.querySelector('.left').classList.toggle('display-none');
    document.querySelector('.left-bare-toggle .fa-odnoklassniki-square').classList.toggle('display-none');
    document.querySelector('.left-bare-toggle .fa-odnoklassniki').classList.toggle('display-none');
})

const profileDiv = document.querySelector('nav .container .create .profile-photo-user');
const profileDivImg = document.querySelector('nav .container .create .profile-photo-user img');
const nav2 = document.querySelector('nav .container .create .nav-2');

let media1200 = window.matchMedia('(max-width: 1200px)');

function profileDivClick() {
    nav2.classList.toggle('display-flex');
    nav2.classList.toggle('display-none');
}

function profileDivClickOut(e) {
    if (e.target !== profileDivImg) {
        nav2.classList.remove('display-flex');
        nav2.classList.add('display-none');
    }
}

if (media1200.matches) {
    nav2.classList.remove('display-flex');
    nav2.classList.add('display-none');

    profileDiv.addEventListener('click', profileDivClick);
    window.addEventListener('click', profileDivClickOut);

} else {
    nav2.classList.add('display-flex');
    nav2.classList.remove('display-none');

    profileDiv.removeEventListener('click', profileDivClick);
    window.removeEventListener('click', profileDivClickOut);

}


media1200.addEventListener("change", () => {
    if (media1200.matches) {
        nav2.classList.remove('display-flex');
        nav2.classList.add('display-none');

        profileDiv.addEventListener('click', profileDivClick);
        window.addEventListener('click', profileDivClickOut);

    } else {
        nav2.classList.add('display-flex');
        nav2.classList.remove('display-none');

        profileDiv.removeEventListener('click', profileDivClick);
        window.removeEventListener('click', profileDivClickOut);

    }
});

let userIsConnected = false;
let userIsAccountComplited = false;
let userIsPro = false;

const contactUs = document.querySelector('.nav-2 a:nth-child(1)');
const createAccount = document.querySelector('.nav-2 a:nth-child(2)');
const CompleteAccount = document.querySelector('.nav-2 a:nth-child(3)');
const myAccount = document.querySelector('.nav-2 a:nth-child(4)');
const logIn = document.querySelector('.nav-2 a:nth-child(5)');
const logOut = document.querySelector('.nav-2 a:nth-child(6)');

CompleteAccount.classList.add('display-none');
myAccount.classList.add('display-none');
logOut.classList.add('display-none');

if(userIsConnected){
    createAccount.classList.add('display-none');
    CompleteAccount.classList.remove('display-none');
    myAccount.classList.add('display-none');
    logIn.classList.add('display-none');
    logOut.classList.remove('display-none');

    if(userIsAccountComplited){
        document.querySelectorAll('.profile-photo-user img').forEach(element => {
            element.src = "./images/Sport-Preparation-run.jpg";
        });

        createAccount.classList.add('display-none');
        CompleteAccount.classList.add('display-none');
        myAccount.classList.remove('display-none');
        logIn.classList.add('display-none');
        logOut.classList.remove('display-none');

    }
}
const menuItem = document.querySelectorAll('.left .sidebar .menu-item');
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if(item.id === 'notifications'){
            document.querySelector('.notifications-popup').style.display ='none';
        } else{
            document.querySelector('.notifications-popup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display ='none';
  
            [document.querySelector('.middle'), document.querySelector('.right'), document.querySelector('nav')].forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelector('.notifications-popup').style.display ='none';
                })
            })           
        }
 
    })
})

strories = document.querySelector(".middle-app .stories");

jsonStories = {
    jsonStory : [
        {
        sys: { "id": "1" },
        fields: {
            title: "title 1",
            name: "Name & first name 1",
            urlImageProfile: "./images/activity_montagne.jpg",
            urlImageView: "./images/activity_montagne.jpg"
                }
        },
        {
            sys: { "id": "2" },
            fields: {
                title: "title 2",
                name: "Name & first name 2",
                urlImageProfile: "./images/img2.jpg",
                urlImageView: "./images/img2.jpg"
                    }
            },
        {
            sys: { "id": "3" },
            fields: {
                title: "title 3",
                name: "Name & first name 3",
                urlImageProfile: "./images/img3.jpg",
                urlImageView: "./images/img3.jpg"
                    }
            },
    ]
}

for (let i=0; i<3; i++){
    strories.innerHTML += `
    <div class="story" style="background: url(${jsonStories.jsonStory[i].fields.urlImageView}) no-repeat center center/cover;">
        <div class="profile-photo">
            <img src=${jsonStories.jsonStory[i].fields.urlImageView} alt="pofile photo">
        </div>
        <p class="name max-1-line">Name and Surname ${i+1}</p>
    </div>
    `;
}

feeds = document.querySelector(".middle-app .feeds");

jsonFeeds = {
    jsonFeed : [
        {
        sys: { "id": "1" },
        fields: {
            title: "title 1",
            name: "Name & first name 1",
            urlImageProfile: "./images/activity/activity_aquatique.jpg",
            urlImageView: "./images/activity/activity_aquatique.jpg"
                }
        },
        {
            sys: { "id": "2" },
            fields: {
                title: "title 2",
                name: "Name & first name 2",
                urlImageProfile: "./images/activity/activity_aerien.jpg",
                urlImageView: "./images/activity/activity_aerien.jpg"
                    }
        },
        {
            sys: { "id": "3" },
            fields: {
                title: "title 3",
                name: "Name & first name 3",
                urlImageProfile: "./images/activity/activity_dance.jpg",
                urlImageView: "./images/activity/activity_dance.jpg"
                    }
        },
        {
            sys: { "id": "4" },
            fields: {
                title: "title 4",
                name: "Name & first name 4",
                urlImageProfile: "./images/activity/activity_equitation.jpg",
                urlImageView: "./images/activity/activity_equitation.jpg"
                    }
        },
        {
            sys: { "id": "5" },
            fields: {
                title: "title 5",
                name: "Name & first name 5",
                urlImageProfile: "./images/activity/activity_mecanique.jpg",
                urlImageView: "./images/activity/activity_mecanique.jpg"
                    }
        },
        {
            sys: { "id": "6" },
            fields: {
                title: "title 6",
                name: "Name & first name 6",
                urlImageProfile: "./images/activity/activity_combat_.jpg",
                urlImageView: "./images/activity/activity_combat_.jpg"
                    }
        },
        
    ]
}

for (let i=0; i<6; i++){
    feeds.innerHTML += `
    <div class="feed">

        <div class="head">
            <div class="user">
                <div class="profile-photo">
                    <img src=${jsonFeeds.jsonFeed[i].fields.urlImageProfile}  alt="pofile photo">
                </div>
                <div class="info">
                    <h3 class="max-1-line">Feed title</h3>
                    <small class="max-1-line">Wilaya, ville</small>
                </div>
            </div>
            <span class="edit"><i class="fas fa-ellipsis-h"></i></span>
        </div>

        <div class="photo">
            <img src=${jsonFeeds.jsonFeed[i].fields.urlImageView}  alt="pofile photo">
        </div>

        <div class="action-buttons">
            <div class="interaction-buttons">
                <!-- <span><i class="fas fa-plus-circle"></i></span> -->
                <span><i class="fas fa-thumbs-down"></i></span>
                <span class="entity-note">125</span>
                <!-- <span><i class="fas fa-minus-circle"></i></span> -->
                <span><i class="fas fa-thumbs-up"></i></span>
            </div>
            <div class="bookmark">
                <span><i class="fas fa-users"></i></span>
                <span class="entity-followers">1</span>
            </div>
        </div>

        <div class="entity-main-message liked-by">
            <p class="max-2-lines">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam repellendus laboriosam obcaecati facere excepturi illo voluptatum cum nesciunt placeat, quas dolores eveniet consectetur odio distinctio ab odit natus? Ullam.</p>
        </div>

    </div>
    `;
}

sideAnnonces = document.querySelector(".right-app .side-annonces");

jsonSideAnnonces = {
    jsonSideAnnonce : [
        {
        sys: { "id": "1" },
        fields: {
            title: "title 1",
            name: "Name & first name 1",
            urlImageProfile: "./images/activity/pro_guide.jpg",
            urlImageView: "./images/activity/pro_guide.jpg"
                }
        },
        {
            sys: { "id": "2" },
            fields: {
                title: "title 2",
                name: "Name & first name 2",
                urlImageProfile: "./images/activity/activity_athletisme.jpg",
                urlImageView: "./images/activity/activity_athletisme.jpg"
                    }
        },
        {
            sys: { "id": "3" },
            fields: {
                title: "title 3",
                name: "Name & first name 3",
                urlImageProfile: "./images/activity/activity_fitness.jpg",
                urlImageView: "./images/activity/activity_fitness.jpg"
                    }
        },
        {
            sys: { "id": "4" },
            fields: {
                title: "title 4",
                name: "Name & first name 4",
                urlImageProfile: "./images/activity/activity_hiver.jpg",
                urlImageView: "./images/activity/activity_hiver.jpg"
                    }
        },
        {
            sys: { "id": "5" },
            fields: {
                title: "title 5",
                name: "Name & first name 5",
                urlImageProfile: "./images/activity/activity_workout.jpg",
                urlImageView: "./images/activity/activity_workout.jpg"
                    }
        },
        {
            sys: { "id": "6" },
            fields: {
                title: "title 6",
                name: "Name & first name 6",
                urlImageProfile: "./images/activity/pro_massage.jpg",
                urlImageView: "./images/activity/pro_massage.jpg"
                    }
        },
        
    ]
}

for (let i=0; i<6; i++){
    sideAnnonces.innerHTML += `

    <div class="side-annonce">

        <div class="head">
            <div class="user">
            <div class="profile-photo">
                <img src=${jsonSideAnnonces.jsonSideAnnonce[i].fields.urlImageView}  alt="pofile photo">
            </div>
                <div class="info">
                    <h3>Feed title</h3>
                    <small>Wilaya, ville</small>
                </div>
            </div>
            <span class="edit"><i class="fas fa-ellipsis-h"></i></span>
        </div>

        <div class="photo">
            <img src=${jsonSideAnnonces.jsonSideAnnonce[i].fields.urlImageView}  alt="pofile photo">
        </div>

        <div class="action-buttons">
            <div class="interaction-buttons">
                <!-- <span><i class="fas fa-plus-circle"></i></span> -->
                <span><i class="fas fa-thumbs-down"></i></span>
                <span class="entity-note">125</span>
                <!-- <span><i class="fas fa-minus-circle"></i></span> -->
                <span><i class="fas fa-thumbs-up"></i></span>
            </div>
            <div class="bookmark">
                <span><i class="fas fa-users"></i></span>
                <span class="entity-followers">1</span>
            </div>
        </div>

        <div class="entity-main-message liked-by">
            <p class="max-2-lines">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magnam repellendus laboriosam obcaecati facere excepturi illo voluptatum cum nesciunt placeat, quas dolores eveniet consectetur odio distinctio ab odit natus? Ullam.</p>
        </div>

    </div>

    `;
}

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const themeModalCard = document.querySelector('.customize-theme card');
const fontSizes = document.querySelectorAll('.choose-size span');
const removeCustomizeTheme = document.querySelector('.remove-customize-theme');

var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const bgs = document.querySelectorAll('.choose-bg > div');


theme.addEventListener('click', () => {
    themeModal.style.display = 'grid';
})

removeCustomizeTheme.addEventListener('click', () => {
    themeModal.style.display = 'none';
})


themeModal.addEventListener('click', (e) => {
    if (e.target === themeModal) {
        themeModal.style.display = 'none';
    }
})


const removeSizeSelctor = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
} 

fontSizes.forEach(size => {
        

    size.addEventListener('click', () => {

        removeSizeSelctor();
        size.classList.toggle('active');
        let fontSize;

        if (size.classList.contains('font-size-1')){
            fontSize = '10px';
    
        } else if (size.classList.contains('font-size-2')){
            fontSize = '13px';
           
        } else if (size.classList.contains('font-size-3')){
            fontSize = '16px';
            
        } else if (size.classList.contains('font-size-4')){
            fontSize = '19px';
      
        } else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
           
        }

     
        document.querySelector('html').style.fontSize = fontSize;
        
    })
})


const removeColorSelctor = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
} 

colorPalette.forEach((color) => {
    color.addEventListener('click', () => {

        removeColorSelctor();
        color.classList.toggle('active');
        let primaryHue;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
const removeBgSelctor = () => {
    bgs.forEach(bg => {
        bg.classList.remove('active');
    })
} 

bgs.forEach((bg) => {
    bg.addEventListener('click', () => {

        removeBgSelctor();
        bg.classList.toggle('active');
        let whiteColorLightness;
        let lightColorLightness;
        let darkColorLightness;

        if(bg.classList.contains('bg-1')){
            whiteColorLightness = '100%';
            lightColorLightness = '95%';
            darkColorLightness = '17%';
        } else if(bg.classList.contains('bg-2')){
            whiteColorLightness = '20%';
            lightColorLightness = '15%';
            darkColorLightness = '95%';
        } else if(bg.classList.contains('bg-3')){
            whiteColorLightness = '10%';
            lightColorLightness = '0%';
            darkColorLightness = '95%';
        }

        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    })
})