console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('nombre'))
console.log(document.querySelector('#menu'))


console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))
console.log(document.querySelector('.link-dom').getAttribute('href'))

const $linkDOM = document.querySelector('.link-dom')

$linkDOM.setAttribute('target','_blank')
$linkDOM.setAttribute('rel','noopener')
$linkDOM.setAttribute('href','https://www.youtube.com/')


console.log($linkDOM.style.background)
console.log(getComputedStyle($linkDOM).getPropertyValue('color'))

//DOM ESTILOS

$linkDOM.style.setProperty('text-decoration' , 'none')
$linkDOM.style.setProperty('display','block')
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius ='14px';

//VARIABLES PROPERTY (VARIABLES CSS)

//Este elemento representa la etiqueta HTML 
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--Dark-color')

varYellowColor = getComputedStyle($html).getPropertyValue('--Yellow-color')

console.log(varDarkColor,varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor;

$html.style.setProperty('--Dark-color','#000')

varDarkColor = getComputedStyle($html).getPropertyValue('--Dark-color')


$body.style.setProperty('background-color', varDarkColor)

