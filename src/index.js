import "./style.css"
import homeContent from "./pages/home";
import menuContent from "./pages/menu";
import aboutContent from "./pages/about";

const contentDiv = document.querySelector("div#content")
setContent(homeContent)

function setContent(content) {
    contentDiv.innerHTML = ""
    contentDiv.appendChild(content)
}

const homeButton = document.querySelector("button#home-btn")
homeButton.addEventListener("click", () => {
    setContent(homeContent)
})

const menuButton = document.querySelector("button#menu-btn")
menuButton.addEventListener("click", () => {
    setContent(menuContent)
})

const aboutButton = document.querySelector("button#about-btn")
aboutButton.addEventListener("click", () => {
    setContent(aboutContent)
})