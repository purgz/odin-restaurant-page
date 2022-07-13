
export default function loadContact(){
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contactPage = document.createElement("div");
    contactPage.classList.add("contact-page");
    
    contactPage.innerHTML = `
        <div class = "contact-info">
            <h2>Contact Us</h2>
            <p>phone: 1234567890</p>
            <p>email: restaurant@fakeemail.com</p>
            <h2>Adress</h2>
            <p>adress line 1</p>
            <p>adress line 2</p>
            <p>adress line 3</p>
        </div>

        <div class = "map">
        <iframe width="300px" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300px&amp;height=300&amp;hl=en&amp;q=buckingham%20palace+(Restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/farm-gps/">tractor gps</a></iframe>
        </div>
    `   

    content.appendChild(contactPage)
}