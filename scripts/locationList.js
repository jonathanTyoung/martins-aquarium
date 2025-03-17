import { getLocation } from './aquariumData.js';

const locationType = getLocation()
export const locationList = () => {
    let locationHTML = '';

    for (const locus of locationType) {
        locationHTML += `
            <section class="location">
                <article class="locations">
                    <h1 class="location_name">${locus.name}</h1>
                    <p class="fish_species">${locus.country}</p>
                    <p class="fish_length">${locus.description}</p>
                </article>
             </section>
        `;
    }
 
    return locationHTML
 };

//  console.log(fishList);



//  export const locationListToDom = (locationHTML) => {
//     const locationList = document.getElementById('locationList');
 
//     if (locationList) {
//         locationList.innerHTML = locationHTML;
//     } else {
//         console.error('Could not find element with id "locationList"');
//     }
//  };