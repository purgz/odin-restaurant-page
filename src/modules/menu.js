//stackoverflow - import all images from dir and put into images object
function importAll(r){
    let images = {};
    r.keys().map((item,index) =>{ images[item.replace("./","")] = r(item);});
    return images;
}

const images = importAll(require.context("../images",false,/\.(jpg)$/))

let pizzas = [
    {
        name: "Neapolitan",
        description: `Fresh mozzarella, tomatoes, basil leaves,
         oregano, and olive oil`,
        price: 10.99,
    },
    {
        name: "Chicago",
        description: `Ground beef, sausage, pepperoni, onion, mushrooms,
         and green peppers,`,
        price: 11.99,
    },
    {
        name: "New-York",
        description: `Thick crust, pepperoni, sausage, oregano, mushroom, mozzarella
            and parmesan`,
        price: 12.99,
    },
    {
        name: "Sicilian",
        description: `Tomato, onion, anchovies, and herbs`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    },
    {
        name: "Peperoni",
        description: `Tomato, peperoni, mozzarella`,
        price: 10.99,
    }
]


export default function loadMenu(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.textContent = "";

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    const title = document.createElement("h2");
    title.textContent = "Menu";
    title.style.fontSize ="50px"

    //go through each pizza and create item
    pizzas.forEach(pizza =>{
        let item = createMenuItem(pizza.name,pizza.price,pizza.description);
        itemContainer.append(item)
    })

    content.append(title);
    content.append(itemContainer)
}


function createMenuItem(name,price,description){
    const item = document.createElement("div");
    const itemText = document.createElement("div");
    item.classList.add("menu-item");
    itemText.classList.add("menu-item-text");

    itemText.innerHTML = `
        <h1 class = "menu-item-name"> ${name}</h1>
        <p class = "menu-item-description"> ${description}</p>
        <div class = "menu-item-price">${price}</div>
    `
    
    item.append(itemText);
    //using imported images
    item.style.backgroundImage = `url(${images[name.toLowerCase()+".jpg"]})`
    return item;
}