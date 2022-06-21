import "./css/style.css";
import {loadHome,loadFooter} from "./modules/home";
import loadMenu from "./modules/menu";


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
            default:
                break;
        }
    })
})