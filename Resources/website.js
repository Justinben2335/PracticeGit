let element = document.querySelector('button');
console.log(element)
let elementWrapper = document.querySelector('span');
let count = 0
let color = ''

const changeColor = () => {
    if (count % 3 === 0){
        color = 'blue'
    }else if (count % 2 === 0){
        color = 'black'
    }else if (count % 4 === 0){
        color = 'pink'
    }
    element.style.border = `${color} solid ${count}px`;
    count +=1

}
const addElement = () => {
    let flexBox = document.getElementById('flex-container');
    flexBox.innerHTML += '<div class=\'flex-item\'></div>';
}
element.onclick = addElement;