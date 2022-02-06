const menu = document.querySelector(".list_1 li:first-child");
const menuInner = document.querySelector(".list__inner");

console.dir(menu);



setInterval(menu.addEventListener("click", function(){
  menuInner.classList.toggle("hidden");

}),2000);

