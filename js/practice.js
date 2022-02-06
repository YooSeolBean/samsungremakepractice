const section_one = document.querySelector(".slide_section3");
const section_two = document.querySelector(".slide_section2");
const section_three = document.querySelector(".slide_section1");
const section_four = document.querySelector(".slide_section0");
const h2_one = document.querySelector(".slide_section3 .cream_text");
const h2_two =  document.querySelector(".slide_section2 .black_text");
const h2_three =  document.querySelector(".slide_section1 .green_text");
const h2_four =  document.querySelector(".slide_section0 .lavender_text");

console.log(h2_one);
console.log(h2_two);
console.log(h2_three);
console.log(h2_four);

// document = HTML = Web site

// Scroll Event
window.addEventListener('scroll',_.throttle(function(){
  const scrollY = window.scrollY;
  console.log(window.scrollY);
  if(scrollY>1000 && scrollY<1200){
    h2_four.innerText = "라벤더"
    h2_one.display="none";
    h2_two.display="none";
    h2_three.display="none";
   
    
    gsap.to(section_four,.3,{
      opacity:1,
      display:'block'
   });
  
  }else if(scrollY>700){
    h2_three.innerText="그린";
    h2_one.display="none";
    h2_two.display="none";
    
   
    gsap.to(section_three,.3,{
      opacity:0,
      display:'none'
    }); 
    
  }else if(scrollY>300){
    h2_two.innerText="블랙";
    h2_one.display="none";
  
   
   gsap.to(section_two,.3,{
      opacity:0,
      display:'none'
    });

  }else if(scrollY>50){
    h2_one.innerText="크림";
    gsap.to(section_one,.3,{
      opacity:0,
      display:'none'
    });   
  } 

  
}));