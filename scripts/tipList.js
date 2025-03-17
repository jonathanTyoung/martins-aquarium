import { getTips } from './aquariumData.js';

const tipType = getTips()
export const tipList = () => {
    let tipHTML = '';

    for (const tip of tipType) {
        tipHTML += `
            <ul class="tips">${tip.topic}
             <li class="tips">${tip.text}</li>
            </ul>
        `;
    }
    return tipHTML
 };
    


 export const tipListToDom = (tipHTML) => {
    const tipList = document.getElementById('tipList');
 
    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
 };