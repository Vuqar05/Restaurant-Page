const homeContentHTML = `
        <div class="name-side">
            <h1>Steak House</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet illum itaque mollitia natus placeat quas quod soluta, voluptas. Accusantium ad architecto commodi deleniti distinctio dolorem earum expedita iste iusto, mollitia numquam pariatur placeat quae sunt tempore. Accusamus alias cupiditate ea earum itaque, natus neque officiis perferendis, praesentium quis suscipit.</p>
        </div>
        <div class="img-side">
            <div class="photo-credits">
                Photo by <a href="https://unsplash.com/@shioyang?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Shio Yang</a> on <a href="https://unsplash.com/photos/fire-in-a-dark-room-RQYKAv-4F-U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
        </div>
`

const homeContent = document.createElement("div")
homeContent.id = "home-content"
homeContent.innerHTML = homeContentHTML

export default homeContent