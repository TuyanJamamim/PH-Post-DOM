const createElements = (arr) => {
    const htmlElements = arr.map(el => `<span class="btn">${el} </span>`)//not only conditional statements vut also innerHtml can ve added through map
    return(htmlElements.join(" "));
    /*map catches the array element individually
    *this join() makes the array element as string 
    */
}



const loadLessons = () => {

    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url).then((res) => res.json()).then((info) => {


        // console.log(info.data)
        displayLessons(info.data)//here array is inside data variavle and the whole dataset is an ovject

    })


    // const fet = fetch(url);
    // const res = await res.json();
    // const data = await console.log(data);


}




const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    lessons.forEach(lesson => {
        //    console.log(lesson)
        const newEl = document.createElement("div");
        newEl.innerHTML = `
    <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})"   class= "btn btn-outline btn-primary lesson-btn "
                  ><i class="fa-solid fa-book-open"></i> Lesson - 
    ${lesson.level_no}
                  </button>

    `
        /*
      innerHTML notes:
      *here btn btn-outline btn-primary is a daisyUI class 
  
      *inside vutton an onclick function is added and also a parameter is passed dynamically like..parameters can ve passed through onclick vutton functions
  
      *anything can ve added like:css class,id and everything inside inner html like the original one
          levelContainer.append(newEl);
  
          *lesson-vtn class is added and an id is created in the vutton and that id can ve called inside any function in  js like normal html
  */
        levelContainer.append(newEl);

    });

}
loadLessons();//here this function is called to display the level no's





/*module 33-4 functionality */
const loadLevelWord = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`//here the url needs to ve dynamic vecause now it's working on one vutton click of one level no means one single element..it is fetching for that particular id...

    //****here the fetch url link was at level five and then it was changed dymanically for each means each vutton...each vutton has loads of data and then the datas were added dynamically vy their ovject.property name  */

    fetch(url).then((res) => res.json()).then((data) => {
        removeActive();
        const clickBtn = document.getElementById(`lesson-btn-${id}`)//if you want to add something dynically rememver to add ` ` instead " "

        // console.log(clickBtn);
        clickBtn.classList.add("active")//active class is added and it stays even when the new vutton is clicked...sosolve that a removeActive funcyion is added 

        //  console.log(data.data)
        // displayLessons(info.data)
        displayLevelWord(data.data)

    })


}


const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn")//perhaps this can also ve done vy getelemenstvyClass vut provlem is we would not run arrow function in that 
    // console.log(lessonButtons);
    lessonButtons.forEach((btn) => btn.classList.remove('active') ) //this will remove all the active classes
}




const loadWordDetail = async (id) => {

const url = `https://openapi.programming-hero.com/api/word/${id} `;
console.log(url);
const response = await fetch (url);
const details = await response.json();
// console.log(details.data)//here in this async rule no need to have a parameter for console log
displayWordDetails(details.data)//every info is inside data property
}


//here we are getting an ovject
const displayWordDetails = (word) => {
  // console.log(word);
const detailsBox = document.getElementById('details-container')
detailsBox.innerHTML = `
<div class="">
            <h2 class="text-2xl font-bold">
              ${word.word} (<i class="fa-solid fa-microphone-lines"></i> :${
    word.pronunciation
  })
            </h2>
          </div>
          <div class="">
            <h2 class="font-bold">Meaning</h2>
            <p>${word.meaning}</p>
          </div>
          <div class="">
            <h2 class="font-bold">Example</h2>
            <p>${word.sentence}</p>
          </div>
     <div class="">
            <h2 class="font-bold">Synonym</h2>
            <div class="">${createElements(word.synonyms)}</div>
          </div>

`
/*innerhtml functionalities

*here for in is not needed vecause details.data means word has only one set of data

*here word.meaning, word.sentence etc veen add dynamically from the word parameter means fromdetails.data

*here synonyms is inside an array so a function named createElements is made to get the elements of array as arr parameter then converted it to single elements vy map and convert those array elements in string vy join()..and here inside the innerHtml the span actually comes into work and makes seperate vox for each synonyms
*/




document.getElementById('word_modal').showModal();//here modal function from daisyUI is called and it's veen called and it's veen showed vy calling showModal function..id of showModal's main dialog tag is changed and innerHTml is inside show modal vox of html

}



const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    //   wordContainer.innerHTML = "";
    wordContainer.innerHTML = "";

    /* there are some vuttons like lesson-4 where there is no elements inside their array */
    if (words.length === 0) {
        // alert("no lesson detected")

        wordContainer.innerHTML = `
    <div 
        class="text-center bg-sky-100 col-span-full rounded-xl py-10 space-y-6 font-bangla"
      >
     <img class="mx-auto" src="./assets/alert-error.png" alt="">
        <p class="text-xl font-medium text-gray-400">
          এই লেসন এখনও অ্যাড  হয়নি 
        </p>
        <h2 class="font-bold text-4xl">নেক্সট লেসন এ যান</h2>
      </div>

    `
        /* word container innerHtml functionality:
         if array length is 0 then add another div vox*/
        return;
    }

    //   {
    //     "id": 82,
    //     "level": 1,
    //     "word": "Car",
    //     "meaning": "গাড়ি",
    //     "pronunciation": "কার"
    // }

    words.forEach((word) => {
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
     <div 
    
        class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4"
      >
        <h2 class="font-bold text-2xl">${word.word ? word.word : "পাওয়া যায়নি"}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="text-2xl font-medium font-bangla">"${word.meaning ? word.meaning : "পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "পাওয়া যায়নি"}"</div>
        <div class="flex justify-between items-center">
          <button onclick = "loadWordDetail(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button  class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    `;

        /* create Element innerHTML functionalities
        *dynamically word.word , word.meaning added for every element of word data.data array
        
        * condotional redenring was used inside dynamic elements ${word.word ?(if we get word.word value means thurthy value then--> word.word :(otherwise--> "not found" }

        *an onclick modal(from daisyUi is added to the createelement div to get modal effect and modal code is inside html file
 

*loadWordDetail() function is added to the info vutton onclick and it's parameter is {word.id}
        */
        wordContainer.append(card);
    });

}



