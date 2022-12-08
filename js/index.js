console.log("test");

const today = new Date();

let thisYear = today.getFullYear();

console.log(thisYear);

const footer = document.querySelector("#footer");

const copyright = document.createElement("p");

copyright.innerText = "Natalie Petrolino " + thisYear;

footer.appendChild(copyright);

const skills = ["beginner coding", "creative writing", "essay writing", "music production",
"video editing and production", "dlsr photography and videography" ];

const skillsSection = document.querySelector("#skills");

const skillsList = document.querySelector("#ul"); 

for (let i=0; i < skills.length; i++) {

    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");


const messageForm = document.querySelector('#form')


messageForm.addEventListener('submit', (event) => {

    event.preventDefault();

    // const nameInput = event.target.name
    // const emailInput = event.target.email
    // const messageInput = event.target.message   I couldnt figure out the way the hw meant for me to do


    // console.log(nameInput);
    // console.log(emailInput);
    // console.log(messageInput);
    
    const messageSection = document.querySelector("#messages");
    
    const messageList = document.querySelector("#messageslist");

    const newMessage = document.createElement("li");
    
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a><span> ${message.value} </span>`

    messageList.appendChild(newMessage);

    const removeButton = document.createElement("button");

    removeButton.innerText = "remove";

    removeButton.setAttribute('type','button');

    newMessage.appendChild(removeButton);

    removeButton.addEventListener('click', (event) => {

        messageList.removeChild(newMessage);
    
    
    });

    document.querySelector('#form').reset();
});

