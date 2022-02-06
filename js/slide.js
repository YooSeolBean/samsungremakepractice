const slideSection = document.querySelector("section.section__slide");
const imgOne = document.querySelector(".img1");
const imgTwo = document.querySelector(".img2");
const imgThree = document.querySelector(".img3");
const imgFour = document.querySelector(".img4");

const SHOWING_CLASS = "show";

function slide(){
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if(currentSlide){
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    // w.showing클래스를 지우고 나서 다음 슬라이드를 찾게다
    // 이렇게 되면 next sibling이 없는 슬라이드는 마지막 슬라이드
      if(nextSlide){
        // 다음 클래스에 show 클래스 부여
        nextSlide.classList.add(SHOWING_CLASS);
      }else{
        // 마지막 클래스까지 온 경우, 첫번째 클래스로 이동하겠다
        imgOne.classList.add(SHOWING_CLASS);
      }

  }else{
    imgOne.classList.add(SHOWING_CLASS);
  }
}
slide();
setInterval(slide,2000);

//----------------------------------폰 컬러 변경------------------//
inputs = document.querySelectorAll("input");

phoneImg = document.querySelector(".phone-color");
phoneXimg = document.querySelector(".xphone-color");
phoneZimg = document.querySelector(".zflip-color"); 
phoneAimg = document.querySelector(".A-color");
phoneSimg = document.querySelector(".S21phone-color");
phoneA12img = document.querySelector(".a12-color");
phoneA32img = document.querySelector(".A32-color");
phoneZ1img = document.querySelector(".Zflip1-color");

tabeletS7img = document.querySelector(".tabS7-color");
tabletAimg = document.querySelector(".tabA8-color");
tabeletS75Gimg = document.querySelector(".tabS75G-color");
tabeletS7Wifiimg = document.querySelector(".tabS7Wifi-color");
tabeletS7Plus = document.querySelector(".tabS7Plus-color");
tabletS7LTEimg = document.querySelector(".tabS7LTE-color");

watch440mmimg = document.querySelector(".watch440mm-color");
watch440mmGreenimg = document.querySelector(".watch440mmGreen-color");
watch440mmWhiteimg = document.querySelector(".watch440WhiteAndBlack-color");
watch444mmimg = document.querySelector(".watch444-color");
watch444Orangeimg = document.querySelector(".watch444OrangeGreen-color")
watchClassicimg = document.querySelector(".watchClassicBlack-color");
watchClassic2img = document.querySelector(".watchClassicBrown-color");

budsTwoimg = document.querySelector(".budsTwo-color");
budsKnottedimg = document.querySelector(".budsAndKnotted-color");
budsProimg = document.querySelector(".budsProWhite-color");
budsLiveimg = document.querySelector(".budsLive-color");
budsChargingimg = document.querySelector(".budsWirelessChargingBlack-color");
//-------------------------------------------------------------------------//
inputOne = document.querySelector("#itm-color-black");
inputTwo = document.querySelector("#itm-color-green");
inputThree = document.querySelector("#itm-color-silver");

inputXOne = document.querySelector("#itm-color-xWhite");
inputXTwo = document.querySelector("#itm-color-xblack");


inputZOne = document.querySelector("#itm-color-zBlack");
inputZTwo = document.querySelector("#itm-color-zCream");
inputZThree = document.querySelector("#itm-color-zGreen");
inputZFour = document.querySelector("#itm-color-zLavender");

inputAOne = document.querySelector("#itm-color-aWhite");
inputATwo = document.querySelector("#itm-color-aLavender");
inputAThree = document.querySelector("#itm-color-aBlack");

inputSOne = document.querySelector("#itm-color-s21Pink");
inputSTwo = document.querySelector("#itm-color-s21Lavender");
inputSThree = document.querySelector("#itm-color-s21White");
inputSFour = document.querySelector("#itm-color-s21Grey");

inputA12One = document.querySelector("#itm-color-a12White");
inputA12Two = document.querySelector("#itm-color-a12Black");

inputA32One=document.querySelector("#itm-color-a32Lavender");
inputA32Two=document.querySelector("#itm-color-a32Grey");
inputA32Three=document.querySelector("#itm-color-a32White");

inputZ1One = document.querySelector("#itm-color-z1Pink");
inputZ1Two = document.querySelector("#itm-color-z1Grey");
inputZ1Three = document.querySelector("#itm-color-z1Silver");

inputTabS7One = document.querySelector("#itm-color-tabS7Green");
inputTabS7Two = document.querySelector("#itm-color-tabS7Pink");
inputTabS7Three = document.querySelector("#itm-color-tabS7Black");
inputTabS7Four = document.querySelector("#itm-color-tabS7Silver");

inputTabA8One = document.querySelector("#itm-color-tabA8Black");
inputTabA8Two = document.querySelector("#itm-color-tabA8Silver");

inputTabS75gOne = document.querySelector("#itm-color-tabS75GGreen");
inputTabS75gTwo = document.querySelector("#itm-color-tabS75GPink");
inputTabS75gThree = document.querySelector("#itm-color-tabS75GBlack");

inputTabS7WifiOne = document.querySelector("#itm-color-tabS7WifiBlue");
inputTabS7WifiTwo = document.querySelector("#itm-color-tabS7WifiBlack");
inputTabS7WifiThree = document.querySelector("#itm-color-tabS7WifiSilver");

inputTabS7PlusOne = document.querySelector("#itm-color-tabS7PlusBlue");
inputTabS7PlusTwo = document.querySelector("#itm-color-tabS7PlusPink");

inputTabS7LteOne = document.querySelector("#itm-color-tabS7LTEBlue");
inputTabS7LteTwo = document.querySelector("#itm-color-tabS7LTEBlack");
inputTabS7LteThree = document.querySelector("#itm-color-tabS7LTESilver");

inputWatch440mmOne = document.querySelector("#itm-color-watch440mmWhite");
inputWatch440mmTwo = document.querySelector("#itm-color-watch440mmBlack");

inputWatch440mmGreenOne = document.querySelector("#itm-color-watch440mmGreen");
inputWatch440mmGreenTwo = document.querySelector("#itm-color-watch440mmGreenAndWhite");

inputWatch440mmWhiteOne = document.querySelector("#itm-color-watch440WhiteAndBlack");
inputWatch440mmWhiteTwo = document.querySelector("#itm-color-watch440WhiteAndBlue");

inputWatch444mmOne = document.querySelector("#itm-color-watch444Grey");
inputWatch444mmTwo = document.querySelector("#itm-color-watch444White");

inputWatch444OrangeOne = document.querySelector("#itm-color-watch444OrangeGreen")
inputWatch444OrangeTwo = document.querySelector("#itm-color-watch444OrangeWhite")

inputWatchClassicOne = document.querySelector("#itm-color-watchClassicBlack");
inputWatchClassicTwo = document.querySelector("#itm-color-watchClassicSilver")

inputWatchClassic2One = document.querySelector("#itm-color-watchClassicBrown");
inputWatchClassic2Two = document.querySelector("#itm-color-watchClassicWhiteAndBlack");

inputBudsTwoOne = document.querySelector("#itm-color-budsTwoGreen");
inputBudsTwoTwo = document.querySelector("#itm-color-budsTwoPink");
inputBudsTwoThree = document.querySelector("#itm-color-budsTwoBlack");
inputBudsTwoFour = document.querySelector("#itm-color-budsTwoWhite");

inputKnottedOne = document.querySelector("#itm-color-budsAndKnottedGreen");
inputKnottedTwo = document.querySelector("#itm-color-budsAndKnottedBlack");
inputKnottedThree = document.querySelector("#itm-color-budsAndKnotteddWhite");
inputKnottedFour = document.querySelector("#itm-color-budsAndKnotteddLavender");

inputProOne = document.querySelector("#itm-color-budsProWhite");
inputProTwo = document.querySelector("#itm-color-budsProPurple");
inputProThree = document.querySelector("#itm-color-budsProBlack");
inputProFour = document.querySelector("#itm-color-budsProPSilver");

inputLiveOne = document.querySelector("#itm-color-budsLivePink");
inputLiveTwo = document.querySelector("#itm-color-budsLiveBlack");
inputLiveThree = document.querySelector("#itm-color-budsLiveWhite");
inputLiveFour = document.querySelector("#itm-color-budsLiveRed");

inputChargingOne = document.querySelector("#itm-color-budsWirelessChargingBlack");
inputChargingTwo = document.querySelector("#itm-color-budsWirelessChargingWhite");
inputChargingThree = document.querySelector("#itm-color-budsWirelessChargingPurple");



inputs.forEach(input => {
  
  input.addEventListener("click",function(){
  if(input === inputTwo){
     phoneImg.src = "images/zflip1.webp";
  }else if(input === inputThree){
    phoneImg.src = "images/zfold2.webp";
  }else if(input===inputOne){
    phoneImg.src = "images/zfold.webp";

  }else if(input === inputXTwo){
    phoneXimg.src= "images/xCoverBlack.webp"
  }else if(input === inputXOne){
    phoneXimg.src= "images/xCorverWhite.webp"

  }else if(input === inputZFour){
    phoneZimg.src= "images/zflipLavender.webp"
  }else if(input === inputZThree){
    phoneZimg.src= "images/zflipGreen.webp"
  }else if(input === inputZTwo){
    phoneZimg.src= "images/zflipWhite.webp"
  }else if(input === inputZOne){
    phoneZimg.src= "images/zflipBlack.webp"

  }else if(input === inputAThree){
    phoneAimg.src= "images/ABlack.webp"
  }else if(input === inputATwo){
    phoneAimg.src= "images/ALavender.webp"
  }else if(input === inputAOne){
    phoneAimg.src= "images/AWhite.webp"

  }else if(input === inputSFour){
    phoneSimg.src="images/s21Grey.webp" 
  }else if(input === inputSThree){
    phoneSimg.src= "images/s21White.webp"
  }else if(input === inputSTwo){
    phoneSimg.src= "images/s21Lavender.webp"
  }else if(input === inputSOne){
    phoneSimg.src= "images/s21Pink.webp"

  }else if(input === inputA12Two){
    phoneA12img.src="images/a12Black.webp" 
  }else if(input === inputA12One){
    phoneA12img.src="images/a12White.webp" 
  }else if(input === inputA32Three){
    phoneA32img.src="images/a32White.webp" 
  }else if(input === inputA32Two){
    phoneA32img.src="images/a32Black.webp" 
  }else if(input === inputA32One){
    phoneA32img.src="images/a32lavender.webp" 
  
  }else if(input === inputZ1Three){
    phoneZ1img.src="images/zflip1Silver.webp" 
  }else if(input === inputZ1Two){
    phoneZ1img.src="images/zflip1Grey.webp" 
  }else if(input === inputZ1One){
    phoneZ1img.src="images/zflip1Pink.webp" 
  
  }else if(input === inputTabS7Four){
    tabeletS7img.src="images/tabS7Silver.webp" 
  }else if(input === inputTabS7Three){
    tabeletS7img.src="images/tabS7Black.webp" 
  }else if(input === inputTabS7Two){
    tabeletS7img.src="images/tabS7Pink.webp" 
  }else if(input === inputTabS7One){
    tabeletS7img.src="images/tabS7Green.webp" 
  
  }else if(input === inputTabA8Two ){
    tabletAimg.src="images/tabA8Silver.webp" 
  }else if(input === inputTabA8One){
    tabletAimg.src="images/tabA8Black.webp" 

  }else if(input === inputTabS75gThree ){
    tabeletS75Gimg.src="images/tabS75GBlack.webp" 
  }else if(input === inputTabS75gTwo ){
    tabeletS75Gimg.src="images/tabS75GPink.webp" 
  }else if(input === inputTabS75gOne ){
    tabeletS75Gimg.src="images/tabS75GGreen.webp" 

  }else if(input === inputTabS7WifiThree ){
    tabeletS7Wifiimg.src="images/tabS7WiFiSilver.webp"
  }else if(input === inputTabS7WifiTwo ){
    tabeletS7Wifiimg.src="images/tabS7WiFiBlack.webp" 
  }else if(input === inputTabS7WifiOne ){
    tabeletS7Wifiimg.src="images/tabS7WiFiBlue.webp" 
  
  }else if(input === inputTabS7PlusTwo ){
    tabeletS7Plus.src="images/tabS7PlusPink.webp" 
  }else if(input === inputTabS7PlusOne ){
    tabeletS7Plus.src="images/tabS7PlusBlue.webp" 

  }else if(input === inputTabS7LteThree ){
    tabletS7LTEimg.src="images/tabS7LTESilver.webp" 
  }else if(input === inputTabS7LteTwo ){
    tabletS7LTEimg.src="images/tabS7LTEBlack.webp" 
  }else if(input === inputTabS7LteOne ){
    tabletS7LTEimg.src="images/tabS7LTEBlue.webp" 

  }else if(input === inputWatch440mmTwo){
    watch440mmimg.src="images/watch440mmBlack.webp" 
  }else if(input === inputWatch440mmOne  ){
    watch440mmimg.src="images/watch440mm.webp"

  }else if(input === inputWatch440mmGreenTwo){
    watch440mmGreenimg.src="images/watch440GreenAndWhite.webp" 
  }else if(input === inputWatch440mmGreenOne){
    watch440mmGreenimg.src="images/watch440mmGreen.webp"

  }else if(input === inputWatch440mmWhiteTwo){
    watch440mmWhiteimg.src="images/watch440WhiteAndBlue.webp" 
  }else if(input === inputWatch440mmWhiteOne){
    watch440mmWhiteimg.src="images/watch440WhiteAndBlack.webp" 

  }else if(input === inputWatch444mmTwo){
    watch444mmimg.src="images/watch444GreenRWhite.webp" 
  }else if(input === inputWatch444mmOne){
    watch444mmimg.src="images/wath444mmGreenWhite.webp" 

  }else if(input === inputWatch444OrangeTwo){
    watch444Orangeimg.src="images/watch444OrangeWhite.webp" 
  }else if(input === inputWatch444OrangeOne){
    watch444Orangeimg.src="images/watch444OrangeGreen.webp" 

  }else if(input === inputWatchClassicTwo ){
    watchClassicimg.src="images/watchClassicSilver.webp" 
  }else if(input === inputWatchClassicOne){
    watchClassicimg.src="images/watchClassicBlack.webp" 
  }else if(input === inputWatchClassic2Two ){
    watchClassic2img.src="images/watchClassicWhiteAndBlack.webp" 
  }else if(input === inputWatchClassic2One){
    watchClassic2img.src="images/watchClassicBrown.webp" 

  }else if(input === inputBudsTwoFour){
    budsTwoimg.src="images/BudsTwoWhite.webp" 
  }else if(input === inputBudsTwoThree){
    budsTwoimg.src="images/BudsTwoBlack.webp" 
  }else if(input === inputBudsTwoTwo){
    budsTwoimg.src="images/BudsTwoPink.webp" 
  }else if(input === inputBudsTwoOne){
    budsTwoimg.src="images/BudsTwo.webp" 

  }else if(input === inputKnottedFour){
    budsKnottedimg.src="images/budsAndKnottedLavender.webp" 
  }else if(input === inputKnottedThree){
    budsKnottedimg.src="images/budsAndKnottedWhite.webp" 
  }else if(input ===inputKnottedTwo){
    budsKnottedimg.src="images/budsAndKnottedBlack.webp" 
  }else if(input === inputKnottedOne){
    budsKnottedimg.src="images/budsAndKnottedGreen.webp" 

  }else if(input === inputProFour){
    budsProimg.src="images/budsProSilver.webp" 
  }else if(input ===inputProThree){
    budsProimg.src="images/budsProBlack.webp" 
  }else if(input === inputProTwo){
    budsProimg.src="images/budsProPurple.webp" 
  }else if(input === inputProOne){
    budsProimg.src="images/budsPro.webp" 

  }else if(input === inputLiveFour){
    budsLiveimg.src="images/budsLiveRed.webp" 
  }else if(input ===  inputLiveThree){
    budsLiveimg.src="images/budsLiveWhite.webp" 
  }else if(input ===  inputLiveTwo){
    budsLiveimg.src="images/budsLiveBlack.webp" 
  }else if(input ===  inputLiveOne){
    budsLiveimg.src="images/budsLivePink.webp" 

  }else if(input === inputChargingThree){
    budsChargingimg .src="images/budsWirelessChargingPurple.webp" 
  }else if(input === inputChargingTwo){
    budsChargingimg .src="images/budsWirelessChargingWhite.webp" 
  }else if(input === inputChargingOne){
    budsChargingimg .src="images/budsWirelessChargingBlack.webp" 

  }

} , false);
});














