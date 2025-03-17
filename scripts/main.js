// import { fishList, fishListToDom } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './threeFish.js'

// Generate the fish list
// const fishHTML = fishList()
// fishListToDom(fishHTML)

// Generate the care tips
const tipHTML = tipList();
document.getElementById ('tipList').innerHTML = `<h2>Tips</h2>${tipHTML}`;


// Generate the location list
const locationHTML = locationList();
document.querySelector ('#locationList').innerHTML =  `<h2>Locations</h2>${locationHTML}`;


const holyFishHTML = mostHolyFish();
const soldierFishHTML = soldierFish();
const regularFishHTML = regularFish();
document.querySelector ("#threeFishList").innerHTML = `<h2>Fish List</h2>${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;

// Render each HTML string to the correct DOM element