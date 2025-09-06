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
