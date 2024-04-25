'use strict';

// selecting elements

const inputElement = document.querySelector('input');
const tagsElement = document.querySelector('.tags');

// colors array 
let colors = [
    { background: "rgb(255,240,246)", text: "rgb(192, 75, 143)" },
    { background: "rgb(255,241,240)", text: "rgb(203, 69, 80)" },
    { background: "rgb(255,242,232)", text: "rgb(196, 96, 66)" },
    { background: "rgb(255,247,230)", text: "rgb(206, 107, 36)" },
    { background: "rgb(255,251,230)", text: "rgb(196, 144, 54)" },
    { background: "rgb(252,255,230)", text: "rgb(117, 151, 36)" },
    { background: "rgb(246,255,237)", text: "rgb(131, 176, 109)" },
    { background: "rgb(230,255,251)", text: "rgb(71, 159, 161)" },
    { background: "rgb(230,244,255)", text: "rgb(64, 121, 212)" },
    { background: "rgb(240,245,255)", text: "rgb(93, 110, 197)" },
    { background: "rgb(249,240,255)", text: "rgb(140, 116, 173)" },
    { background: "rgb(255,85,0)", text: "rgb(255,255,255)" },
    { background: "rgb(45,183,245)", text: "rgb(255,255,255)" },
    { background: "rgb(135,208,104)", text: "rgb(255,255,255)" },
    { background: "rgb(16,142,233)", text: "rgb(255,255,255)" },
    { background: "rgb(22,119,255)", text: "rgb(255,255,255)" },
    { background: "rgb(205,32,31)", text: "rgb(255,255,255)" },
    { background: "rgb(59,89,153)", text: "rgb(255,255,255)" },
    { background: "rgb(56,106,32)", text: "rgb(255,255,255)" },
    { background: "rgb(30,31,37)", text: "rgb(255,255,255)" },
];



//listening event

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        // console.log('Value entered')
        if (inputElement.value) {
            const tagElement = document.createElement('div');

            tagElement.className = 'tag';

            tagElement.insertAdjacentHTML("beforeend", inputElement.value);

            /* Adding delete icon */
            const close = document.createElement('span');

            close.className = 'material-icons';
            close.innerHTML = 'close';

            tagElement.insertAdjacentElement("beforeend", close);


            /* Adding tag to the tags container */

            tagsElement.append(tagElement);


            /* Adding tag removal functionality */

            close.addEventListener('click', () => {
                tagElement.remove();
            });


            /* Adding random colors to tags */

            let colorValue = colors[Math.floor(Math.random() * colors.length)];
            tagElement.style.color = colorValue.text;
            tagElement.style.backgroundColor = colorValue.background;

        }
    }
});