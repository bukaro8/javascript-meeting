/*
    Ejercicio:
    Obtener la edad de las personas que hablen inglés de un arreglo de 5 objetos Persona. Cada elemento del arreglo tiene la siguiente estructura:
    [{
        nombre: "Jesus",
        sexo: "M",
        edad: 36,
        idiomas: ["EN","ES"],
        verEdad: function(){
            console.log(`La edad de ${this.nombre} es ${this.edad}`);
        }
    }, ...]
*/

/* Solución plateada */

const personas = [
    {
      nombre: "Carlos",
      sexo: "M",
      edad: 36,
      idiomas: ["EN","ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Pedro",
      sexo: "M",
      edad: 26,
      idiomas: ["EN","ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Jesus",
      sexo: "M",
      edad: 20,
      idiomas: ["ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Sebastian",
      sexo: "M",
      edad: 25,
      idiomas: ["EN"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    },
    {
      nombre: "Adolfo",
      sexo: "M",
      edad: 66,
      idiomas: ["ES"],
      verEdad: function(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
      }
    }
  ];
  // -------------Victor's Contibution--------------
  let languageToSearch='EN'
  // ---------------find method---------------
  // let lang = (langage)=>langage==languageToSearch
  // let fn2= person=>person.idiomas.find(lang)
  // ------------------includes method-----------
  let fn= person=>person.idiomas.includes(languageToSearch)
  let resultLanguage = personas.filter(fn)
  
  for (i=0 ; i<resultLanguage.length ; i++){
    console.log(`${resultLanguage[i].nombre} habla ingles y su edad es ${resultLanguage[i].edad}`)
  }
  // -----------------end Victor's contribution-------------

  