import "./css/style.css";
import {loadHome,loadFooter} from "./modules/home";
import loadMenu from "./modules/menu";
import loadAbout from "./modules/about";
import loadContact from "./modules/contact";

//load home by default
loadHome();
//separate function to load footer only once
loadFooter();

const tabs = document.querySelectorAll(".tab-links>a")

console.log(tabs)

tabs.forEach(tab => {
    tab.addEventListener("click",e =>{
        e.preventDefault();
        switch(e.target.id){
            case "home":
                loadHome();
                break;
            case "menu":
                loadMenu();
                break;
            case "about":
                loadAbout();
                break;
            case "contact":
                loadContact();
                break;
            default:
                break;
        }
    })
})