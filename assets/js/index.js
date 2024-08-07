// importar todas las clases de Tipos.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Tipos.js";


let Animales = ( function(){
    const url = "http://localhost:5501/animales.json";

    
    const getAnimales = async function(){
      const res = await fetch(url);
      const { animales } = await res.json();
      return animales;
    };
    
    return { getAnimales };
  })();
  
  
  
  let imagenSrc;
  let sonido;
  let animales = [];

  
async  function mostrarAnimal(e){
    const animalSelected = e.target.value;
  
     
    const animales = await Animales.getAnimales();
    console.log(animales);
    
    
    const animalObject = animales.find((a) => a.name == animalSelected);
    console.log(animalObject);
  
    imagenSrc = `/assets/imgs/${animalObject.imagen}`;
    sonido = animalObject.sonido;
    
    const preview = document.getElementById("preview");
    preview.parentElement.classList.remove("p-5");
    preview.style.backgroundImage = `url(${imagenSrc})`;
  }

document.getElementById("animal").addEventListener("change", mostrarAnimal);


async function resgistraAnimal(e){
    
    const nombreElement = document.getElementById("animal");
    const edadElement = document.getElementById("edad");
    const comentariosElement = document.getElementById("comentarios");
    
    const nombre = nombreElement.value;
    const edad = edadElement.value;
    const comentarios = comentariosElement.value;

    if (nombre && edad && comentarios) {
        let animal;
        switch (nombre) {
            case "Leon":
                animal = new Leon(nombre, edad, imagenSrc, comentarios, sonido);
                break;
            case "Lobo":
                animal = new Lobo(nombre, edad, imagenSrc, comentarios, sonido);
                break;
            case "Oso":
                animal = new Oso(nombre, edad, imagenSrc, comentarios, sonido);
                break;
            case "Serpiente":
                animal = new Serpiente(nombre, edad, imagenSrc, comentarios, sonido);
                break;
            case "Aguila":
                animal = new Aguila(nombre, edad, imagenSrc, comentarios, sonido);
                break;
            default:
                animal = undefined;
                break;
        }

        nombreElement.selectedIndex = 0;
        edadElement.selectedIndex = 0;
        comentariosElement.value = "";
        
        document.getElementById("preview").style.backgroundImage = "url(assets/imgs/lion.svg)";
        animales.push(animal);
        console.log(animales);
        agregarAnimal();

    } else {
        alert("Debe llenar todos los datos del formulario");
    }
  }

  
document.getElementById("btnRegistrar").addEventListener("click", resgistraAnimal);
  


function agregarAnimal(){
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";

    console.log(animales);
    animales.forEach((p, i) => {
    console.log(p);
      animalesTemplate.innerHTML += `
            <div class="px-3 pb-2">
              <div class="bg-dark text-white">
                <img
                  height="200"
                  src="${p.img}"
                  data-toggle="modal" data-target="#exampleModal"
                  onclick="modalDetails('${i}')"
                />
                <div>
                  <button onclick="playSound('${p.nombre}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
                </div>
              </div>
            </div>
      `;
    });
    document
      .querySelectorAll(".card-body button")
      .forEach((b) => b.addEventListener("click", activarHabiblidad));
  };
  

  window.playSound = function(nombre){
    const animal = animales.find((a) => a.nombre == nombre);
    console.log(animal);
    switch (nombre) {
        case "Leon":
            animal.Rugir();
            break;
        case "Lobo":
            animal.Aullar();
            break;
        case "Oso":
            animal.Gruñir();
            break;
        case "Serpiente":
            animal.Sisear();
            break;
        case "Aguila":
            animal.Chillar();
            break;
        default:
            
            console.log(`Acción no definida para el animal ${nombre}`);
    }
  };
  