// open and close hamburger menu
const nav=document.querySelector(".primary-navigation");
const mobilenav=document.querySelector(".mobile-navbar");

mobilenav.addEventListener("click",()=> {
    const visvible=nav.getAttribute("data-visible");
    if(visvible==="false"){
        nav.setAttribute("data-visible",true);
        mobilenav.setAttribute("aria-expanded",true);
    }else{
        nav.setAttribute("data-visible",false);
        mobilenav.setAttribute("aria-expanded",false);
    }
})

