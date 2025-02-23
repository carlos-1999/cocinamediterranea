document.addEventListener("DOMContentLoaded", function () {
    const tips = document.querySelectorAll(".tips p");
    let currentTip = 0;

    function showTip(index) {
        tips.forEach((tip, i) => {
            tip.classList.remove("active");
            tip.computedStyleMap.display = "none";
            if (i === index) {
                tip.classList.add("active");
                tip.style.display = "block";
            }
        });
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentTip = (currentTip - 1 + tips.length) % tips.length;
        showTip(currentTip);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentTip = (currentTip + 1) % tips.length;
        showTip(currentTip);
    });

    setInterval(() => {
        currentTip = (currentTip + 1) % tips.length;
        showTip(currentTip);
    }, 6000);

    showTip(currentTip);
});

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar"); 
    const recipes = document.querySelectorAll(".receta-item"); 

    searchBar.addEventListener("keyup", function (event) {
        const query = event.target.value.toLowerCase(); 

        recipes.forEach((recipe) => {
            const title = recipe.querySelector("h3").textContent.toLowerCase();
            const description = recipe.querySelector("p").textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                recipe.style.display = "block"; 
            } else {
                recipe.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recipe-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático

        // Obtiene los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const recipeName = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;

        // Simula el envío 
        console.log("Nueva sugerencia de receta:");
        console.log(`Nombre: ${name}`);
        console.log(`Correo: ${email}`);
        console.log(`Receta: ${recipeName}`);
        console.log(`Ingredientes: ${ingredients}`);
        console.log(`Instrucciones: ${instructions}`);

        // Muestra un mensaje de éxito
        successMessage.classList.remove("hidden");

        // Limpia los campos del formulario
        form.reset();

        // Oculta el mensaje después de 10 segundos
        setTimeout(() => {
            successMessage.classList.add("hidden");
        }, 10000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-ingredient");
    const ingredientItems = document.querySelectorAll(".ingrediente-item");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        
        ingredientItems.forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

function confirmarRedireccion(event, url) {
    event.preventDefault(); // Evita la redirección inmediata
    let confirmacion = confirm("Serás redirigido a una página externa. ¿Deseas continuar?");
    
    if (confirmacion) {
        window.location.href = url; // Redirige si el usuario acepta
    }
}




