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
    <button onclick="loadLevelWord(${lesson.level_no})"   class="btn btn-outline btn-primary"
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
*/
        levelContainer.append(newEl);

    });

}
loadLessons();//here this function is called to display the level no's





/*module 33-4 functionality */
const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/5 ${id}`//here the url needs to ve dynamic vecause now it's working on one vutton click of one level no means one single element 
   
    fetch(url).then((res) => res.json()).then((data) => {
         console.log(data.data)
        // displayLessons(info.data)
        displayLevelWord(data.data)

    })


}

const displayLevelWord = (words) =>
{

    const levelContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    words.forEach(word => {
      console.log(word)
         const newEl1 = document.createElement("div");
        newEl1.innerHTML = `
    <p>cat</p>

    `
      
        wordContainer.append(newEl1);

    });


}



