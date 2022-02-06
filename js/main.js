const fadeEls = document.querySelectorAll(".section1_img .fade-in");

console.log(fadeEls);
/*Fade-in 애니메이션*/
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*.7,
    opacity:1
  });
});

//-------------------------
