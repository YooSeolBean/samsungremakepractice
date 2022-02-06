const wrapThree = document.querySelector("div.wrap3")
const wrapFour = document.querySelector("div.wrap4");
const wrapFive = document.querySelector("div.wrap5");
const wrapSix = document.querySelector("div.wrap6");
const wrapSeven = document.querySelector("div.wrap7");
const smartPhone = document.querySelector(".product_list li:nth-child(1)");
const tablet = document.querySelector(".product_list li:nth-child(2)");
const galaxyBook = document.querySelector(".product_list li:nth-child(3)");
const watch = document.querySelector(".product_list li:nth-child(4)");
const buds = document.querySelector(".product_list li:nth-child(5)");

console.log(wrapSix);
const SHOW_NAME = "show"
const HIDDEN_NAME = "hidden"
const originalColor = '#000';
const changeColor = '#c3c3c3';


function repeatedFunctionWrapThree(){
  wrapThree.classList.remove(SHOW_NAME);
  wrapThree.classList.add(HIDDEN_NAME); 
}

function repeatedFunctionWrapFour(){
  wrapFour.classList.add(HIDDEN_NAME);
  wrapFour.classList.remove(SHOW_NAME); 
}

function repeatedFunctionWrapFive(){
  wrapFive.classList.add(HIDDEN_NAME);
  wrapFive.classList.remove(SHOW_NAME); 
}

function repeatedFunctionWrapSix(){
  wrapSix.classList.add(HIDDEN_NAME);
  wrapSix.classList.remove(SHOW_NAME);  
}

function repeatedFunctionWrapSeven(){
  wrapSeven.classList.add(HIDDEN_NAME);
  wrapSeven.classList.remove(SHOW_NAME);  
}

function smartphonePage(){
  smartPhone.style.color = changeColor;
  tablet.style.color = originalColor;
  galaxyBook.style.color = originalColor;
  watch.style.color = originalColor;
  buds.style.color = originalColor;
  wrapThree.classList.remove(HIDDEN_NAME);
  wrapThree.classList.add(SHOW_NAME);
  repeatedFunctionWrapFour();
  repeatedFunctionWrapFive();
  repeatedFunctionWrapSix();
  repeatedFunctionWrapSeven();


}

function tabletPage(){
  smartPhone.style.color = originalColor;
  galaxyBook.style.color = originalColor;
  watch.style.color = originalColor;
  buds.style.color = originalColor;
  tablet.style.color = changeColor;
  wrapFour.classList.remove(HIDDEN_NAME);
  wrapFour.classList.add(SHOW_NAME);
  repeatedFunctionWrapThree();
  repeatedFunctionWrapFive();
  repeatedFunctionWrapSix();
  repeatedFunctionWrapSeven();



}

function bookPage(){
  smartPhone.style.color = originalColor;
  tablet.style.color = originalColor;
  watch.style.color = originalColor;
  buds.style.color = originalColor;
  galaxyBook.style.color = changeColor;
  wrapFive.classList.remove(HIDDEN_NAME);
  wrapFive.classList.add(SHOW_NAME);
  repeatedFunctionWrapThree();
  repeatedFunctionWrapFour();
  repeatedFunctionWrapSix();
  repeatedFunctionWrapSeven();


}

function watchPage(){
  smartPhone.style.color=originalColor;
  tablet.style.color=originalColor;
  galaxyBook.style.color = originalColor;
  buds.style.color = originalColor;
  watch.style.color = changeColor; 
  wrapSix.classList.remove(HIDDEN_NAME);
  wrapSix.classList.add(SHOW_NAME);
  repeatedFunctionWrapFive();
  repeatedFunctionWrapThree();
  repeatedFunctionWrapFour();
  repeatedFunctionWrapSeven();
}

function budsPage(){
  smartPhone.style.color=originalColor;
  tablet.style.color=originalColor;
  galaxyBook.style.color = originalColor;
  watch.style.color = originalColor; 
  buds.style.color = changeColor;
  wrapSeven.classList.remove(HIDDEN_NAME);
  wrapSeven.classList.add(SHOW_NAME);
  repeatedFunctionWrapThree();
  repeatedFunctionWrapFour();
  repeatedFunctionWrapFive();
  repeatedFunctionWrapSix();

}

smartPhone.addEventListener("click", smartphonePage);
tablet.addEventListener("click",tabletPage);
galaxyBook.addEventListener("click",bookPage);
watch.addEventListener("click", watchPage);
buds.addEventListener("click",budsPage);