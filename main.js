var tl = new TimelineMax({onupDate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.to(".image1", 1,{y:-1100,opacity:1},'<');
tl.to(".image2", 1,{y:-500,opacity:1},'<');
tl.to(".image3", 1,{y:80,opacity:1},'<');
tl.to(".image4", 1,{y:1400,opacity:1},'<');
tl.to(".image5", 1,{y:1800,opacity:1},'<');
tl.to(".image6", 1,{y:1700,opacity:1},'<');
tl.to(".image7", 1,{y:2400,opacity:1},'<');
tl.to(".image8", 1,{y:3500,opacity:1},'<');
tl.to(".image9", 1,{y:2800,opacity:1},'<');

const scene = new ScrollMagic.Scene({
  triggerElement:".project",
  triggerHook:".5",
  duration: "300%"
})
.setTween(tl)
.addIndicators()
.addTo(controller);

function updatePercentage(){
  tl.progress();
}

const aboutSection = document.querySelector(".project");
const pone = document.querySelector("#des");

document.addEventListener('scroll',function(){
  const clientHeight = document.documentElement.clientHeight;
  const aboutSectiony = aboutSection.getBoundingClientRect().y;

  let neg = Math.abs(clientHeight) * -1;
  let fadeneg = (neg+100);

  if(aboutSectiony < 0){
    pone.classList.add("fade-in");

  }else if( aboutSectiony < ((aboutSectiony+clientHeight)) ){
    pone.classList.remove("fade-in");
    aboutSection.style.position = 'relative';
  }






  if(aboutSectiony < 0){

    let topText = document.querySelector('.toptext').textContent = "01.";

    let projectName = document.querySelector('.projectname').textContent = "Mast Service Staion";
    let role = document.querySelector('.role').textContent = "UI-UX Designer | Full Stack Developer | Social Media Manager"
    let projectDetail = document.querySelector('.projectdetail').textContent = "A digital transformation project for a local retail business in Punjab(India),that deals with the global leading brands in the industry."
    let bottomText = document.querySelector('.bottomtext').textContent =" Bootstrap - Wordpress - JavaScript "
  }

  if(aboutSectiony < neg){

    let topText = document.querySelector('.toptext').textContent = "02.";
    let projectName = document.querySelector('.projectname').textContent = "Renumerology";
    let role = document.querySelector('.role').textContent = "UI/UX Designer | Digital marketing expert"
    let projectDetail = document.querySelector('.projectdetail').textContent = "This is a professional services landing page website which is built to take bookings and appointments."
    let bottomText = document.querySelector('.bottomtext').textContent ="Webflow Website"
  }

  if(aboutSectiony < (2*neg)){

    let topText = document.querySelector('.toptext').textContent = "03.";
    let projectName = document.querySelector('.projectname').textContent = "Seva Patiala";
    let role = document.querySelector('.role').textContent = "UI-UX Designer | Full Stack Developer | Social Media Manager"
    let projectDetail = document.querySelector('.projectdetail').textContent = "A fundraising platform for under-priveleged kids. This project aims to educate children and help to support the marriages of the ones in need."
    let bottomText = document.querySelector('.bottomtext').textContent ="Figma Project"
  }


});
