<script setup lang="ts">
import { ref } from 'vue';
import CarrulusEmendi from './components/CarrulusEmendi.vue';
import { useProducta } from './composables/useProducta.ts';
import Pokemoninfo from './components/Pokemoninfo.vue';


let titulus = ref<string>('Bases')

const mutareTitulus = () => {
  if ( titulus.value === 'Cosas') {
    titulus.value = 'Bases'
  } else {
    titulus.value = 'Cosas'
  }

}

const { producta, quantitatemIncrementa, quantitatemDecrementa } = useProducta()



</script>

<template>

  <h1 @click="mutareTitulus">{{ titulus }} de Vue + TS</h1>

  <h2>Mi carrito de la compra</h2>

 <CarrulusEmendi 
 v-for="productum in producta"
   :nomen="productum.nomen" 
   :quantitas="productum.quantitas"
   @decrementum="() => quantitatemDecrementa(productum.id)"
   @incrementum="() => quantitatemIncrementa(productum.id)"
   />

 <Suspense>
   <Pokemoninfo />
 </Suspense>

</template>



