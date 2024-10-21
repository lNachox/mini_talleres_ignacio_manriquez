<template>
    <div>
      <h1>Rutas</h1>
      <div>
        <button @click="goToRoute('/route1')">Ir a Ruta 1</button>
        <button @click="goToRoute('/route2')">Ir a Ruta 2</button>
        <button @click="goToRoute('/route3')">Ir a Ruta 3</button>
        <button @click="goToRoute('/route4')">Ir a Ruta 4</button>
        <button @click="goToRoute('/route5')">Ir a Ruta 5</button>
      </div>
      <div>
        <input v-model="inputText" placeholder="Ingrese las palabras secretas" />
        <button @click="checkSecretWords">Comprobar</button>
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        inputText: '',
        secretWords: ['manzana', 'banana', 'uva', 'naranja', 'fresa'],
        message: ''
      };
    },
    setup() {
      const router = useRouter();
      const goToRoute = (route) => {
        router.push(route);
      };
      return { goToRoute };
    },
    methods: {
      checkSecretWords() {
        const inputWords = this.inputText.split(' ');
        if (JSON.stringify(inputWords) === JSON.stringify(this.secretWords)) {
          this.message = '¡El mensaje es correcto!';
        } else {
          this.message = 'El mensaje es incorrecto.';
        }
      }
    }
  };
  </script>