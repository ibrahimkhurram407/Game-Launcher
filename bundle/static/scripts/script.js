    // Your product database
    var productDatabase = {
        'product1': { id: 1, name: 'MARIO + RABBIDS', caption: 'Sparks of Hope!', src: './bundle/images/world.jpg' }
        // Add more product entries here as needed
    };

    // Function to display the worlds
    function displayWorlds() {
        const searchInput = document.getElementById('search-bar').value.toLowerCase();
        const worldsContainer = document.querySelector('.filtered-worlds');
        const sortedWorlds = Object.values(productDatabase)
            .filter(world => world.name.toLowerCase().includes(searchInput))
            .sort((a, b) => a.name.localeCompare(b.name));

        worldsContainer.innerHTML = ''; // Clear the previous content

        sortedWorlds.forEach(world => {
            worldsContainer.innerHTML += `
            
            <div class="worlds" id="world">
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
                                    fill="currentColor" class="bi bi-play" viewBox="0 0 16 16" id="IconChangeColor">
                                    <path
                                        d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                        id="mainIconPathAttribute" fill="green"></path>
                                </svg>
                                <svg height="60px" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify"
                                    viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet"
                                    version="1.0">
                                    <defs>
                                        <clipPath id="id1">
                                            <path
                                                d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                                                clip-rule="nonzero" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#id1)">
                                        <path fill="rgb(100%, 100%, 100%)"
                                            d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                                            fill-opacity="1" fill-rule="nonzero" />
                                    </g>
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
    const favorites = [/* Add favorite world IDs here */]; // Example: [1, 3, 5]
    const filteredWorlds = Object.values(productDatabase)
        .filter(world => favorites.includes(world.id));
    displaySortedWorlds(filteredWorlds);
}

// Function to display the sorted and filtered worlds
function displaySortedWorlds(sortedWorlds) {
    const worldsContainer = document.querySelector('.filtered-worlds');
    worldsContainer.innerHTML = ''; // Clear the previous content

    sortedWorlds.forEach(world => {
        worldsContainer.innerHTML += `
            
        <div class="worlds" id="world">
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
                                fill="currentColor" class="bi bi-play" viewBox="0 0 16 16" id="IconChangeColor">
                                <path
                                    d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                                    id="mainIconPathAttribute" fill="green"></path>
                            </svg>
                            <svg height="60px" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify"
                                viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet"
                                version="1.0">
                                <defs>
                                    <clipPath id="id1">
                                        <path
                                            d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                                            clip-rule="nonzero" />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#id1)">
                                    <path fill="rgb(100%, 100%, 100%)"
                                        d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                                        fill-opacity="1" fill-rule="nonzero" />
                                </g>
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

// Call displayWorlds initially to display all worlds in the default order
defaultOrder();