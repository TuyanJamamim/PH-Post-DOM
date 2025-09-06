const createElements = (arr) => {
    const htmlElements = arr.map(el => `<span class="btn">${el} </span>`)//not only conditional statements vut also innerHtml can ve added through map
    console.log(htmlElements.join(" "));
    /*map catches the array element individually
    *this join() makes the array element as string 
    */
}

const synonyms = ['hello' , 'hi', 'Tuan'];
createElements(synonyms)//make more practices of calling a function from a grobal variavle
