import tomahawkImage from "../img/tomahawk.jpg"
import tBoneImage from "../img/tbone.jpg"
import ribEyeImage from "../img/tbone.jpg"

const menuContentHTML = `
    <div class="menu-item">
        <img src=${tomahawkImage} alt="tomahawk" class="menu-item-img">
        <div class="menu-item-caption">
            <div class="item-name-price">Tomahawk: 80$</div>
            <div class="credits">Photo by <a href="https://unsplash.com/@emersonvieira?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emerson Vieira</a> on <a href="https://unsplash.com/photos/person-barbecuing-meat-_aR4l6fj6wQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
        </div>
    </div>

    <div class="menu-item">
        <img src=${tBoneImage} alt="t-bone" class="menu-item-img">
        <div class="menu-item-caption">
            <div class="item-name-price">T-Bone: 60$</div>
            <div class="credits">
                Photo by <a href="https://unsplash.com/@emersonvieira?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emerson Vieira</a> on <a href="https://unsplash.com/photos/cooked-sliced-meat-cpkPJ-U9eUM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
        </div>
    </div>

    <div class="menu-item">
        <img src=${ribEyeImage} alt="rib-eye" class="menu-item-img">
        <div class="menu-item-caption">
            <div class="item-name-price">Rib-eye: 50$</div>
            <div class="credits">
                Photo by <a href="https://unsplash.com/@emersonvieira?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emerson Vieira</a> on <a href="https://unsplash.com/photos/grilled-meat-3wzps8KbdCQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
        </div>
    </div>
`

const menuContent = document.createElement("div")
menuContent.id = "menu-content"
menuContent.innerHTML = menuContentHTML

export default menuContent