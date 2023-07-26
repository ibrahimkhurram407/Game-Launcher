    // Your product database
    var productDatabase = {
        'product1': { id: 1, name: 'MARIO + RABBIDS', caption: 'Sparks of Hope!', src: './bundle/images/world.jpg' },
        'product2': {id: 2, name: "Player Unknown's", caption:"Battle Ground", src: 'http://files.ekmcdn.com/6d7106/images/player-unknown-s-pub-g-battlegrounds-game-poster-1700-p.jpg'},
        'product3': {id: 3, name: "GHOST", caption:"of TSUSHIMA", src: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/30179d103446501.5f4d7dd891dac.png'},
        'product4': {id: 4, name: "HALO", caption:"COMBAT EVOLVED", src: 'https://www.solopress.com/blog/wp-content/uploads/2012/11/solopress-design-insight-halo-combat-evolved-anniversary-video-game-poster.jpg'},
        'product5': {id: 5, name: "The Legend of ZELDA", caption:"Breath of the Wild", src: 'http://bananaroad.com/cdn/shop/products/pst1131_Zelda_Breath_of_the-_Wild_BOTW_Poster_large.jpg'},
        'product6': {id: 6, name: "Call of Duty", caption:"Modern Warfare", src: 'https://imgc.allpostersimages.com/img/posters/trends-international-call-of-duty-modern-warfare-2-key-art_u-L-FAAQJY0.jpg'},
        'product7': {id: 7, name: "Valorant", caption:"FPS", src: 'https://cdnb.artstation.com/p/assets/images/images/027/875/935/large/pham-linh-artboard-1.jpg'},
        'product8': {id: 8, name: "Tomb Raider", caption:"DEFINITIVE EDITION", src: 'http://static.wikia.nocookie.net/laracroft/images/2/2d/DefinitiveEditionBoxArt.jpg'},
        'product9': {id: 9, name: "Spider-Man 2", caption:"Marvel", src: 'https://cdn.marvel.com/content/1x/marvelsspiderman2_lob_crd_02.jpg'},
        'product10': {id: 10, name: "Call of Duty", caption:"WWII", src: 'https://imgc.allpostersimages.com/img/posters/call-of-duty-wwii-key-art_u-L-F9DGPH0.jpg'},
        'product11': {id: 11, name: "Assasin's Creed Odyssey", caption:"ODYSSEY", src: 'https://i.pinimg.com/236x/f2/5a/f2/f25af2c92af5ac0d57c41947bbd0e479.jpg'},
    };
    const favorites = [/* Add favorite world IDs here */]; // Example: [1, 3, 5]

    // Function to display the worlds
    function displayWorlds() {
        const searchInput = document.getElementById('search-bar').value.toLowerCase();
        const worldsContainer = document.querySelector('.main');
        const sortedWorlds = Object.values(productDatabase)
            .filter(world => world.name.toLowerCase().includes(searchInput))
            .sort((a, b) => a.name.localeCompare(b.name));

        worldsContainer.innerHTML = ''; // Clear the previous content

        sortedWorlds.forEach(world => {
            worldsContainer.innerHTML += `
            <div class="worlds">
                <div class="card dark-card">
                    <div class="card-img-container">
                        <img src="${world.src}" class="card-img" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-icons">
                            <div class="icon-top-right">
                                <img src="./bundle/images/icon.png" alt="Icon" height="50px">
                            </div>
                            <div class="icon-bottom">
                                <svg class="icons" xmlns="http://www.w3.org/2000/svg" width="61" height="61"
                                    fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                    <path
                                        d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                        id="mainIconPathAttribute" fill="green"></path>
                                </svg>
                                <svg class="icons" onclick="addFav(this)" id="${world.id}" height="61" width="50" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"
                                    viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet"
                                    version="1.0">
                                    <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" id="mainIconPathAttribute" fill="#ffffff" stroke="#000000" stroke-width="0"></path>
                                </svg>
                                <div class="world-name">
                                    <h6>${world.name}</h6>
                                    <p>${world.caption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        });
    }

    // Function to call the displayWorlds function when the search input changes
    document.getElementById('search-bar').addEventListener('input', displayWorlds);

    // Call displayWorlds initially to display all worlds
    displayWorlds();


    // Function to sort alphabetically
function sortAlphabetically() {
    const sortedWorlds = Object.values(productDatabase)
        .sort((a, b) => a.name.localeCompare(b.name));
    displaySortedWorlds(sortedWorlds);
}

// Function to filter by favorites
function filterFavorites() {
    console.log(favorites);
    const filteredWorlds = Object.values(productDatabase)
        .filter(world => favorites.includes(world.id));
    displaySortedWorlds(filteredWorlds);
}

// Function to display the sorted and filtered worlds
function displaySortedWorlds(sortedWorlds) {
    const worldsContainer = document.querySelector('.main');
    worldsContainer.innerHTML = ''; // Clear the previous content

    sortedWorlds.forEach(world => {
        worldsContainer.innerHTML += `
        <div class="worlds">
            <div class="card dark-card">
                <div class="card-img-container">
                    <img src="${world.src}" class="card-img" alt="...">
                </div>
                <div class="card-body">
                    <div class="card-icons">
                        <div class="icon-top-right">
                            <img src="./bundle/images/icon.png" alt="Icon" height="50px">
                        </div>
                        <div class="icon-bottom">
                            <svg class="icon-play" xmlns="http://www.w3.org/2000/svg" width="61" height="61"
                                fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                <path
                                    d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                    id="mainIconPathAttribute" fill="green"></path>
                            </svg>
                            <svg class="icon-fav" onclick="addFav(this)" id="${world.id}" height="61" width="50" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet"
                                version="1.0">
                                <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" id="mainIconPathAttribute" fill="#ffffff" stroke="#000000" stroke-width="0"></path>
                            </svg>
                            <div class="world-name">
                                <h6>${world.name}</h6>
                                <p>${world.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
}

// Function to display the worlds based on the search input
function displayWorlds() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filteredWorlds = Object.values(productDatabase)
        .filter(world => world.name.toLowerCase().includes(searchInput));

    displaySortedWorlds(filteredWorlds);
}

// Function to call the displayWorlds function when the search input changes
document.getElementById('search-bar').addEventListener('input', displayWorlds);

// Function to reset the display to the default order
function defaultOrder() {
    const defaultWorlds = Object.values(productDatabase);
    displaySortedWorlds(defaultWorlds);
}

// Adding to favourite functionality
function addFav (div) {
    let id = div.id;
    id = parseInt(id);
    favorites.push(id);
}

// Call displayWorlds initially to display all worlds in the default order
defaultOrder();