/*-------------------- Color Style Switcher -----------------------*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
         styleSwitcherToggler.addEventListener('click', () =>{
         document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scrolling

window.addEventListener("scroll", () =>{
     if(document.querySelector(".style-switcher").classList.contains("open")){
         document.querySelector(".style-switcher").classList.remove("open");
    }
 })

 const alternateStyles = document.querySelectorAll(".alternate-style");

 function setActiveStyle(color){
   localStorage.setItem("color",color);
   changeColor();
}
function changeColor(){
        alternateStyles.forEach((style) =>{
         if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
         }
     })
 }
// checking if 'color' key exist
 if(localStorage.getItem("color") !== null){
    changeColor();
 }


 /*----------------------------- themes Light And Dark Mode -----------------------------------*/

 const dayNight = document.querySelector(".day-night");


 dayNight.addEventListener('click', () =>{
    //dayNight.querySelector("i").classList.toggle("fa-sun");
    //dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
       localStorage.setItem("theme", "dark");
    }
    else{
      localStorage.setItem("theme", "light");
    }
    updateIcon();
 })

 function themeMode(){
   // checking if 'theme' key exist
   if(localStorage.getItem("theme") !== null){
      if(localStorage.getItem("theme") === "light"){
         document.body.classList.remove("dark");
      }
      else{
         document.body.classList.add("dark");
      }
   }

   updateIcon();
 }
themeMode();

 function updateIcon(){
   if(document.body.classList.contains("dark")){
      dayNight.querySelector("i").classList.remove("fa-moon");
      dayNight.querySelector("i").classList.add("fa-sun");
   }
   else{
      dayNight.querySelector("i").classList.remove("fa-sun");
      dayNight.querySelector("i").classList.add("fa-moon");
   }
 }
