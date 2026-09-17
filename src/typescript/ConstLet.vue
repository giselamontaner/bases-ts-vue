
<script setup lang="ts">

let urbs: string = 'Valencia'
urbs = 'Madrid'

//console.log(urbs);

const aetas: number = 24

const nomen =  'Tony'
//nomen =  'fernando'

const cognomen =  'Stack'

const plenumNomen = `${ nomen } ${ cognomen }`

console.log(`${plenumNomen.toUpperCase()} es de ${urbs} y tiene ${aetas + 3} años`)


</script>


<template>
    <div>
        <h2>Tipos básicos</h2>

        <p>{{ plenumNomen.toLocaleUpperCase ()}} es de {{ urbs }} y tiene {{ aetas + 3}} años</p>
    </div>
</template>


<style scoped> 

</style>