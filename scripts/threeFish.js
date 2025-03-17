import { getFish } from './aquariumData.js';

let fishType = getFish()
export const mostHolyFish = () => {
    let holyFishHTML = ""

    for (const holy of fishType) {
        if (holy.length % 3 === 0) {
            holyFishHTML += `
            <article class="holy fish">
                <img src="${holy.image}" alt="${holy.name} poster" class="fish_picture">
                <div class="fish">
                    <h2 class="fish_name">${holy.name}</h2>
                    <p class="fish_species">${holy.species}</p>
                    <p class="fish_length">${holy.length}</p>
                    <p class="fish_location">${holy.location}</p>
                    <p class="fish_diet">${holy.diet}</p>
                </div>
            </article>
        `;
        }
    }

    return holyFishHTML
}

export const soldierFish = () => {

    let soldierFishHTML = ""

    for (const soldier of fishType) {
        if (soldier.length % 5 === 0) {
            soldierFishHTML += `
            <article class="soldier fish">
                <img src="${soldier.image}" alt="${soldier.name} poster" class="fish_picture">
                <div class="fish">
                    <h2 class="fish_name">${soldier.name}</h2>
                    <p class="fish_species">${soldier.species}</p>
                    <p class="fish_length">${soldier.length}</p>
                    <p class="fish_location">${soldier.location}</p>
                    <p class="fish_diet">${soldier.diet}</p>
                </div>
            </article>
        `;
        }
    }

    return soldierFishHTML
}


export const regularFish = () => {

    let regularFishHTML = ""

    for (const rege of fishType) {
        if (rege.length % 3 !== 0 && rege.length % 5 !== 0) {
            regularFishHTML += `
            <article class="holy fish">
                <img src="${rege.image}" alt="${rege.name} poster" class="fish_picture">
                <div class="fish">
                    <h2 class="fish_name">${rege.name}</h2>
                    <p class="fish_species">${rege.species}</p>
                    <p class="fish_length">${rege.length}</p>
                    <p class="fish_location">${rege.location}</p>
                    <p class="fish_diet">${rege.diet}</p>
                </div>
            </article>
        `;
        }
    }

    return regularFishHTML
}

