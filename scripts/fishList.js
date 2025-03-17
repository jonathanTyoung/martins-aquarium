import { getFish } from './aquariumData.js';


const fishType = getFish()
export const fishList = () => {
    let fishHTML = '';

    for (const fish of fishType) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} poster" class="fish_picture">
                <div class="fish">
                    <h2 class="fish_name">${fish.name}</h2>
                    <p class="fish_species">${fish.species}</p>
                    <p class="fish_length">${fish.length}</p>
                    <p class="fish_location">${fish.location}</p>
                    <p class="fish_diet">${fish.diet}</p>
                </div>
            </article>
        `;
    }
 
    return fishHTML
 };

//  console.log(fishList);



 export const fishListToDom = (fishHTML) => {
    const fishList = document.getElementById('fishList');
 
    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
 };