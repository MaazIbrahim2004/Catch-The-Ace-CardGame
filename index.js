
// array of card object defenitions, each with an id and an image path
const cardObjectDefenitions = [
    {id:1,imagePath: '/images/card-KingHearts.png'},
    {id:2,imagePath: '/images/card-JackClubs.png'},
    {id:3,imagePath: '/images/card-QueenHearts.png'},
    {id:3,imagePath: '/images/card-QueenHearts.png'},
    {id:4,imagePath: '/images/aceOfSpades.png'},
]

function createCard(cardItem) {
    // creating div elements that make up the card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    // create front and back elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // add class and id to the card elements
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // add class to the inner card element
    addClassToElement(cardInnerElem, 'card-inner')
}

function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addIdToElement(elem, id) {
    elem.id = id
}