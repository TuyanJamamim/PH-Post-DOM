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
        
 <button onclick="loadTree(${cata.id})"  class= "btn btn-soft btn-success">
 ${cata.category_name}
    
                  </button>

        `
categoryContainer.append(el1);
    });
}

categoryLoad();

const loadTree = (num) =>
    {
        const url = `https://openapi.programming-hero.com/api/category/${num}`
        fetch(url).then((res) => res.json()).then((data) => {
        // console.log(data.categories);
        // displayCategories(data.plants)
        displayTree(data.plants)

    })
        
    } 


    const displayTree = (plants) => {
       const treeContainer =  document.getElementById('card-container')
       treeContainer.innerHTML = '';
        plants.forEach(plant => {
       const el3 = document.createElement('div')
       el3.innerHTML = `
       <div class="bg-white space-y-3 rounded-2xl ">

                    <div class="bg-gray-100 rounded-2xl m-4">
                        <img src="${plant.image}" alt="">
                    </div>
                    <h1 class="ml-4 font-bold">${plant.name}</h1>
                    <p class="ml-4">${plant.description}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class=" bg-green-200 text-green-700 p-3 ml-4 rounded-2xl ">${plant.category}</div>
                        <div class="mr-4">৳${plant.price}</div>
                    </div>

                   <div onclick='addToCart(${JSON.stringify(plant)})' 
                class="cursor-pointer flex justify-center items-center bg-green-600 text-white rounded-2xl mx-4 p-2">
                Add To Cart
            </div>
                </div>

    
</div>
       
       `
       treeContainer.append(el3);
        })
    }







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
                        <div class=" bg-green-200 text-green-700 p-3 ml-4 rounded-2xl">${plant.category}</div>
                        <div class="mr-4">৳${plant.price}</div>
                    </div>

                    <div onclick='addToCart(${JSON.stringify(plant)})' 
                class="cursor-pointer flex justify-center items-center bg-green-600 text-white rounded-2xl mx-4 p-2">
                Add To Cart
            </div>
                </div>

    
</div>

`
cardContainer.append(el2)

    })
}

allPlantLoad()


let total = 0;

const addToCart = (plant) => {
    const cartContainer = document.getElementById("cart-container");

    const el4 = document.createElement("div");
    el4.classList = "bg-green-200 m-2 p-2 flex justify-between items-center rounded-lg";

    el4.innerHTML = `
        <div>
            <h1 class="font-bold">${plant.category}</h1>
            <p>৳${plant.price}</p>
        </div>
        <div>
            <i class="fa-solid fa-xmark cursor-pointer text-red-600"></i>
        </div>
    `;

    el4.querySelector("i").addEventListener("click", () => {
        cartContainer.removeChild(el4);
        total -= plant.price;
        updateTotal();
    });

    cartContainer.appendChild(el4);

    total += plant.price;
    updateTotal();
};

const updateTotal = () => {
    let totalEl = document.getElementById("cart-total");
    if (!totalEl) {
        totalEl = document.createElement("h1");
        totalEl.id = "cart-total";
        totalEl.classList = "font-bold mt-4";
        document.getElementById("cart-container").append(totalEl);
    }
    totalEl.innerText = `Total: ৳${total}`;
};

