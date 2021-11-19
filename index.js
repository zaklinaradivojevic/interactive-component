const mySlider = document.getElementById("my-slider");
const sliderValue = document.getElementById("slider-value");

function slider() {
    valPercent = (mySlider.value / mySlider.max) * 100;
    mySlider.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${valPercent}%,  hsl(224, 65%, 95%) ${valPercent}%)`;
    sliderValue.textContent = mySlider.value + ".00";
}
slider();


function montly(){
   document.getElementById("month-year").textContent="/month"; 
}
function yearly(){
    document.getElementById("month-year").textContent="/year"; 
 }