
/*arrays*/

const productos = [
    {
        "id": "Plato-1",
        "titulo": "Birria",
        "imagen": "./img/IMG_20220703_195722.jpg",
        "categoria": {
            "nombre": "especiales",
            "id": "Birria"
        },
        "precio": 40.000
    },

    {
        "id": "Plato-2",
        "titulo": "Pizza",
        "imagen": "./img/IMG_20220828_125643.jpg",
        "categoria": {
            "nombre": "clasicos",
            "id": "Pizza"
        },
        "precio": 30.000
    },

    {
        "id": "Plato-3",
        "titulo": "Pasta",
        "imagen": "./img/IMG_20220916_182857.jpg",
        "categoria": {
            "nombre": "especiales",
            "id": "pasta"
        },
        "precio": 40.000
    },

    {
        "id": "Plato-4",
        "titulo": "empanadas",
        "imagen": "./img/IMG_20221127_173953.jpg",
        "categoria": {
            "nombre": "clasicos",
            "id": "empanadas"
        },
        "precio": 14.000
    },

    {
        "id": "Plato-5",
        "titulo": "papas",
        "imagen": "./img/papas.jpg",
        "categoria": {
            "nombre": "adiciones",
            "id": "papas"
        },
        "precio": 6.000
    },

    {
        "id": "Plato-6",
        "titulo": "pan",
        "imagen": "./img/pan-de-ajo.jpg",
        "categoria": {
            "nombre": "adiciones",
            "id": "pan"
        },
        "precio": 10.000
    },

]

/*constantes*/

const menuBtns = document.querySelectorAll(".boton-menu");
const foodItems = document.querySelectorAll(".opciones-plato");
const agregarProducto = document.querySelectorAll(".boton-compra")


/*funciones*/
let activeBtn = "categoria";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('boton-activo');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('boton-activo');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((opciones) => {
        if(opciones.classList.contains(activeBtn)){
            opciones.style.display = "grid";
        } else {
            opciones.style.display = "none";
        }
    });
}

/*funcion de guardado en carro*/

let cardtProducts = []


function addtocardtBotton () {
    let addboton = document.querySelectorAll (".boton-menu")
    addbutton.forEach(button => {
        button.onclick = (e) => {
            const prooductId = e.currentTarget.id
            const selectproduct = agregarProducto.find  (button.id == productId)
            cardtProducts.push
            console.log (cardtProducts)
        }
        
    });
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
};