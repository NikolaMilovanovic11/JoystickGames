const products = [
    { id: 1, img: './images/nioh_game.jpg', name: 'Nioh collection', price: 85, currency: '€' },
    { id: 2, img: './images/like_a_dragon_game.jpg', name: 'Like a Dragon', price: 85, currency: '€' },
    { id: 3, img: './images/the_pathles_game.jpg', name: 'The Pathles', price: 85, currency: '€' },
    { id: 4, img: './images/ratchet_game.jpg', name: 'Ratchet Clank', price: 85, currency: '€' },
    { id: 5, img: './images/fifa_2021_game.jpg', name: 'FIFA 21', price: 85, currency: '€' },
    { id: 6, img: './images/fortnite_game.jpg', name: 'Fortnite', price: 85, currency: '€' },
    { id: 7, img: './images/mortal_kombat_game.jpg', name: 'Mortal kombat', price: 85, currency: '€' },
    { id: 8, img: './images/star_wars_game.jpg', name: 'Star Wars', price: 85, currency: '€' },
    { id: 9, img: './images/godfall_game.jpg', name: 'Godfall', price: 85, currency: '€' },
    { id: 10, img: './images/destruction_allstars_game.jpg', name: 'Destruction Allstars', price: 85, currency: '€' },
    { id: 11, img: './images/sniper_game.jpg', name: 'Sniper', price: 85, currency: '€' },
    { id: 12, img: './images/spiderman_game.jpg', name: 'Spiderman', price: 85, currency: '€' },
    { id: 13, img: './images/tony_hawks_proskater2_game.jpg', name: 'Tony Hawks Proskater 2', price: 85, currency: '€' },
    { id: 14, img: './images/call_of_duty_game.jpg', name: 'Call of Duty', price: 85, currency: '€' },
    { id: 15, img: './images/man_eater_game.jpg', name: 'Man eater', price: 85, currency: '€' },
    { id: 16, img: './images/override_2_game.jpg', name: 'Override 2', price: 85, currency: '€' },
    { id: 17, img: './images/Sub Nautica.jpg', name: 'Sub Nautica', price: 85, currency: '€' },
    { id: 18, img: './images/riders_republic_game.jpg', name: 'Riders republic', price: 85, currency: '€' },
    { id: 19, img: './images/horizon_game.jpg', name: 'Horizon', price: 85, currency: '€' },
    { id: 20, img: './images/judgment_game.jpg', name: 'Judgment', price: 85, currency: '€' },
    { id: 21, img: './images/assassins_creed_game.jpg', name: 'Assassins Creed Valhalla', price: 85, currency: '€' },
    { id: 22, img: './images/avengers.jpg', name: 'Avengers', price: 85, currency: '€' },
    { id: 23, img: './images/scarlet_nexus_game.jpg', name: 'Scarlet Nexus', price: 85, currency: '€' },
    { id: 24, img: './images/wreckfest_game.jpg', name: 'Wreckfest', price: 85, currency: '€' },
    { id: 25, img: './images/dirt5_game.jpg', name: 'Dirt 5', price: 85, currency: '€' },
    { id: 26, img: './images/wrc9_game.JPG', name: 'WRC 9', price: 85, currency: '€' },
    { id: 27, img: './images/motogp21_game.jpg', name: 'MotoGP 21', price: 85, currency: '€' },
    { id: 28, img: './images/Outriders_game.jpg', name: 'Outriders', price: 85, currency: '€' },
    { id: 29, img: './images/resident_evil_village.jpg', name: 'Resident Evil Village', price: 85, currency: '€' },
    { id: 30, img: './images/gotham_knights_game.jpg', name: 'Gotham Knights', price: 85, currency: '€' },
    { id: 31, img: './images/evergate_game.jpg', name: 'Evergate', price: 85, currency: '€' },
    { id: 32, img: './images/spirit_of_the_north.jpg', name: 'Spirith of the North', price: 85, currency: '€' },
    { id: 33, img: './images/it_takes_two.jpg', name: 'It takes two', price: 85, currency: '€' },
    { id: 34, img: './images/planet_coaster_game.jpg', name: 'Planet coaster', price: 85, currency: '€' },
    { id: 35, img: './images/hogwarts_legacy_game.jpg', name: 'Hogwarts legacy', price: 85, currency: '€' },
    { id: 36, img: './images/tales_of_arise_game.jpg', name: 'Tales of Arise', price: 85, currency: '€' },
    { id: 37, img: './images/life_is_strange.jpg', name: 'Life is strange', price: 85, currency: '€' },
    { id: 38, img: './images/control.jpg', name: 'Control', price: 85, currency: '€' },
    { id: 39, img: './images/watch_dogs_legion_game.jpg', name: 'Watch dogs legion', price: 85, currency: '€' },
    { id: 40, img: './images/sackboy.jpg', name: 'Sackboy', price: 85, currency: '€' },
    { id: 41, img: './images/hunting2_game.jpg', name: 'Hunting 2', price: 85, currency: '€' },
    { id: 42, img: './images/werewolf.jpg', name: 'Werewolf', price: 85, currency: '€' },
    { id: 43, img: './images/chivalry2_game.jpg', name: 'Chivalry 2', price: 85, currency: '€' },
    { id: 44, img: './images/back4blood_game.jpg', name: 'Back for blood', price: 85, currency: '€' },
    { id: 45, img: './images/thesnow21_game.png', name: 'The snow 21', price: 85, currency: '€' },
    { id: 46, img: './images/final_fantasy7_game.jpg', name: 'Final fantasy 7', price: 85, currency: '€' },
    { id: 47, img: './images/metro_exodus_game.jpg', name: 'Metro exodus', price: 85, currency: '€' },
    { id: 48, img: './images/tormented_souls_game.jpg', name: 'Tormented souls', price: 85, currency: '€' },
    { id: 49, img: './images/exclusive.png', name: 'Smart Watch 4', price: 400, currency: '€' },
    { id: 50, img: './images/dzojstici.png', name: 'Joysticks for PS5', price: 250, currency: '€' },
    { id: 51, img: './images/baza_za_punjenje.png', name: 'Charger for PS5 Joysticks', price: 150, currency: '€' },
    { id: 52, img: './images/ps5-camera.png', name: 'Camera for PS5', price: 200, currency: '€' },
];

function addProduct(id) {
    const product = products.find((p) => p.id === id);

    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (!cartProducts) {
        cartProducts = [];
    }

    const existingProduct = cartProducts.find((e) => e.id === id);
    if (!existingProduct) {
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        showToast();
    }
}

function showToast() {
    $('#liveToast').toast('show');
}