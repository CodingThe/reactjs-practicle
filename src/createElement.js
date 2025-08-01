import { createElement } from "react";

export default function CreateElement(){
    // const paragraph= document.createElement("p");
    // paragraph.textContent="hi";
    // paragraph.style.color="green";
    const paragraph = createElement('p',null,'Hello');
    const val=createElement(
        'div',
        {
            style: {
            color: 'green',
            backgroundColor: 'chocolate',
            },
        },
        createElement('p',null,'Hi'),
        createElement('p',null,'ji'),

    )
    return val;
}