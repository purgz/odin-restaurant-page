import Icon from "../images/icon.svg";

export function loadHome(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.textContent = "Home page";


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

