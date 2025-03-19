let left= document.querySelector(".left");
let line= document.querySelector(".blueline");
let right= document.querySelector(".right");
left.addEventListener("click",()=>{
    line.style.left='16%';
})
right.addEventListener("click",()=>{
    line.style.left='60%';
})

const themeToggle = document.querySelector(".themeToggle");
const htmlElement = document.documentElement;

// Check if the user already has a saved theme
if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");

    // Save theme preference in localStorage
    if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
