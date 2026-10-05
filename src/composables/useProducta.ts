import { ref } from "vue"

export const useProducta = () => {
    
 const producta = ref([
    {
    id: 1,
    nomen: 'camisa',
    quantitas: 10
    },
    {
    id: 2,
    nomen: 'Pantalón',
    quantitas: 5
    },
    {
    id: 3,
    nomen: 'Zapatos',
    quantitas: 3
    }
])





    const quantitatemIncrementa = (id: number) => {
    const productum = producta.value.find( productum => productum.id === id )
    if (!productum) return
    productum.quantitas++
    }

    const quantitatemDecrementa = (id: number) => {
    const productum = producta.value.find( productum => productum.id === id )
    if (!productum) return
    if (productum.quantitas === 0) return
    productum.quantitas--
    }



    return {
        producta,
        quantitatemIncrementa,
        quantitatemDecrementa

    }
}