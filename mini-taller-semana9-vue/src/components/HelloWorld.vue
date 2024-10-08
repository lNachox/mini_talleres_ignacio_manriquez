<template>
  <div class="calculator">
    <h1>Calculadora de Promedios</h1>
    <div v-for="(nota, index) in notas" :key="index">
      <label :for="'nota' + index">Nota {{ index + 1 }}:</label>
      <input
        type="number"
        :id="'nota' + index"
        v-model.number="nota.value"
        @input="validarNota(index)"
        min="1"
        max="7"
      />
      <label :for="'percentage' + index"> Porcentaje (%) {{ index + 1 }}:</label>
      <input
        type="number"
        :id="'percentage' + index"
        v-model.number="nota.percentage"
        @input="validarPeso"
        min="0"
        max="100"
      />
      <button @click="eliminarNota(index)">Eliminar</button>
    </div>
    <button @click="agregarNota">Agregar Nota</button>
    <h2>Promedio: {{ promedio.toFixed(2) }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notas: [{ value: 1, peso: 100 }],
      promedio: 0,
    };
  },
  methods: {
    validarNota(index) {
      if (this.notas[index].value < 1) {
        this.notas[index].value = 1;
      } else if (this.notas[index].value > 7) {
        this.notas[index].value = 7;
      }
      this.calcularPromedio();
    },
    validarPeso() {
      const totalPeso = this.notas.reduce((acc, nota) => acc + (nota.peso || 0), 0);
      if (totalPeso > 100) {
        alert('La suma de los pesos no puede exceder el 100%.');
        this.notas.forEach(nota => nota.peso = 0); // Reiniciar pesos si excede
      }
      this.calcularPromedio();
    },
    agregarNota() {
      this.notas.push({ value: 1, peso: 0 });
    },
    eliminarNota(index) {
      this.notas.splice(index, 1);
      this.calcularPromedio();
    },
    calcularPromedio() {
      const sumaNotas = this.notas.reduce((acum, nota) => {
        return acum + (nota.value * (nota.peso / 100));
      }, 0);
      const totalPeso = this.notas.reduce((acc, nota) => acc + (nota.peso || 0), 0);
      this.promedio = totalPeso ? sumaNotas / totalPeso : 0;
    },
  },
};
</script>

<style>
.calculator {
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}
input {
  margin: 10px 0;
}
button {
  margin: 10px;
}
</style>
