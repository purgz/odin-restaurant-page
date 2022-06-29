import Icon from "../images/icon.svg";
import BackgroundImg from "../images/pizza-background.jpg";

export function loadHome(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
   
    //add background image
    const fullPage = document.querySelector("html");
    fullPage.style.backgroundImage = `url(${BackgroundImg})`
}

export function loadFooter(){
    const footer = document.querySelector("#github-link");
    footer.appendChild(addImage(Icon,"github-icon"));
}

function addImage(img,className){
    const icon=new Image();
    icon.src = img;
    icon.classList.add(className);
    return icon;
}

