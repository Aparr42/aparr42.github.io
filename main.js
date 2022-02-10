var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('.image1',.1,{y:20,opacity:0});
tl.from('.image2',.1,{x:20,opacity:0});
tl.from('.image3',.1,{x:-10,opacity:0});

const scene = new ScrollMagic.Scene({
  triggerElement:".project1",
  triggerHook:'.5',
  duration:"30%"
})
.setTween(tl)
.addIndicators()
.setClassToggle(".scrollicon",'fade-out')
.addTo(controller);



new ScrollMagic.Scene({
  triggerElement:'.project1',
  triggerHook:'onLeave',
  duration:"300vh",
})
.setPin(".project1")
.setClassToggle(".pone", 'fade-in')
.addTo(controller);



function updatePercentage(){
  tl.progress();
  console.log(tl.progress());
}





var tl2 = new TimelineMax({onUpdate:updatePercentage2});
const controller2 = new ScrollMagic.Controller();


tl2.from('.image4',.1,{y:20,opacity:0});
tl2.from('.image5',.1,{x:200,opacity:0});
tl2.from('.image6',.1,{x:-100,opacity:0});

const scene2 = new ScrollMagic.Scene({
  triggerElement:".project2",
  triggerHook:'.5',
  duration:"300vh"
})
.setTween(tl2)
.setClassToggle(".scrollicon",'fade-out')
.addTo(controller2);

new ScrollMagic.Scene({
  triggerElement:'.project2',
  triggerHook:"0",
  duration:"60%",
})
.setPin(".project2", {pushFollowers:false})
.setClassToggle(".ptwo", 'fade-in')
.addTo(controller);

function updatePercentage2(){
  tl2.progress();
  console.log(tl2.progress());
}


var tl3 = new TimelineMax({onUpdate:updatePercentage2});
const controller3 = new ScrollMagic.Controller();


tl3.from('.image7',.1,{y:20,opacity:0});
tl3.from('.image8',.1,{x:200,opacity:0});
tl3.from('.image9',.1,{x:-100,opacity:0});

const scene3 = new ScrollMagic.Scene({
  triggerElement:".project3",
  triggerHook:'.5',
  duration:"300vh"
})
.setTween(tl3)
.addTo(controller2);

new ScrollMagic.Scene({
  triggerElement:'.project3',
  triggerHook:"0",
  duration:"60%",
})
.setPin(".project3", {pushFollowers:false})
.setClassToggle(".pthree", 'fade-in')
.addTo(controller3);

function updatePercentage3(){
  tl3.progress();
  console.log(tl3.progress());
}
