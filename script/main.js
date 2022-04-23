let itemArray = []

fetch("./data/data.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => {
        jsondata.items.forEach(element => {
            itemArray.push(element)
        });
        console.log('********** in fetch *******')
        console.log(itemArray);
        createLiEliment(itemArray)
    });



const shirts = document.querySelector('.shirts');
const pants = document.querySelector('.pants');
const skirt = document.querySelector('.skirt');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const pink = document.querySelector('.pink');
const title = document.querySelector('.title');


shirts.addEventListener('click', ()=>{
    console.log('shirts clicked');
    const results = itemArray.filter(item => item.type === 'tshirt');
    createLiEliment(results)
});

pants.addEventListener('click', ()=>{
    console.log('pants clicked');
    const results = itemArray.filter(item => item.type === 'pants');
    createLiEliment(results)
});

skirt.addEventListener('click', ()=>{
    console.log('shirts clicked');
    const results = itemArray.filter(item => item.type === 'skirt');
    createLiEliment(results)
});

blue.addEventListener('click', ()=>{
    console.log('blue clicked');
    const results = itemArray.filter(item => item.color === 'blue');
    createLiEliment(results)
});

yellow.addEventListener('click', ()=>{
    console.log('yellow clicked');
    const results = itemArray.filter(item => item.color === 'yellow');
    createLiEliment(results)
});

pink.addEventListener('click', ()=>{
    console.log('pink clicked');
    const results = itemArray.filter(item => item.color === 'pink');
    createLiEliment(results)
});

title.addEventListener('click', ()=>{
    console.log('pink clicked');
    createLiEliment(itemArray)
});

function createLiEliment(dataArray) {
    console.log('createLiEliment() called');
    console.log(dataArray);
    clearList();
    dataArray.forEach(element => {
        console.log(`${element.image}, ${element.gender}, ${element.size}`);
        const li = document.createElement("li");
        const img = document.createElement("img");
        const span = document.createElement("span");

        img.setAttribute('src', element.image)
        const textNode = document.createTextNode(`${element.gender}, ${element.size}`);
        span.appendChild(textNode);
        li.append(img,span);

        document.getElementById('itemList').appendChild(li);
    });
}


function clearList() {
    console.log(`reRencderList() called`);
    //first clear all list
    let ul = document.getElementById('itemList');
    while ( ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

}
