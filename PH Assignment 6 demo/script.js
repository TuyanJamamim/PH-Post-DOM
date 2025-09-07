const categoryLoad = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url).then((res) => res.json()).then((data) => {
        // console.log(data.categories);
        displayCategories(data.categories)
    })
}

const displayCategories = (catas) => {
    
       
        const categoryContainer = document.getElementById('category-container');
        categoryContainer.innerHTML = "";
catas.forEach(cata => {
        const el1 = document.createElement('div');
        el1.innerHTML = `
        
 <button class= "btn btn-soft btn-success">
 ${cata.category_name}
    
                  </button>

        `
categoryContainer.append(el1);
    });
}


categoryLoad();

const allPlantLoad = () =>
{
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url).then((res) => res.json()).then((data) => {
        // console.log(data.plants)
        // console.log(data.categories);
        // displayCategories(data.categories)
        displayAllPlant(data.plants)
    })
}

displayAllPlant = (plants) =>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    plants.forEach(plant => {

const el2 = document.createElement('div');
el2.innerHTML = `

<div class="bg-white space-y-3 rounded-2xl ">

                    <div class="bg-gray-100 rounded-2xl m-4">
                        <img src="${plant.image}" alt="">
                    </div>
                    <h1 class="ml-4 font-bold">${plant.name}</h1>
                    <p class="ml-4">${plant.description}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class=" bg-green-200 text-green-700 ml-4 rounded-2xl">${plant.category}</div>
                        <div class="mr-4">৳${plant.price}</div>
                    </div>

                    <div class="flex justify-center items-center bg-green-600 rounded-2xl mx-4">Add To Cart</div>
                </div>

    
</div>

`
cardContainer.append(el2)

    })
}

allPlantLoad()