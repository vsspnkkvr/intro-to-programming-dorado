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

const skillsList = document.querySelector("#ul"); //check this

for (let i=0; i < skills.length; i++) {

    const skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}