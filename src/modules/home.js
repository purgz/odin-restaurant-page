import Icon from "../images/icon.svg";
import BackgroundImg from "../images/pizza-background.jpg";

export function loadHome(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
   
    //add background image
    const fullPage = document.querySelector("html");
    fullPage.style.backgroundImage = `url(${BackgroundImg})`

    const container = document.createElement("div");
    const title = document.createElement("h2");
    const p = document.createElement("p");

    container.classList.add("main-page-container");

    title.textContent = "Welcome to the main page";
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique neque odio, at lacinia erat hendrerit eu. Duis non turpis vehicula, pulvinar dolor ac, varius enim. Vestibulum at dolor in eros dignissim lobortis vitae ac velit. Vestibulum pretium sed neque sed consequat. Nulla vestibulum neque id lacus ullamcorper lobortis."

    container.appendChild(title);
    container.appendChild(p);
    content.appendChild(container);
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

