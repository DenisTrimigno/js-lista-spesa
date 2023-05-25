
let list = [

    'latte',
    'biscotti',
    'cereali',
    'tazza',
    'uova',
    'farina',
];

const list_dom = document.getElementById ('list');

// for(let  i=0; i<list.length; i++) {

// }

let i=0; 
while(i<list.length) {
    
    let elem = document.createElement('li');
    elem.innerText = list[i];
    list_dom.append(elem);

    i++;
}





