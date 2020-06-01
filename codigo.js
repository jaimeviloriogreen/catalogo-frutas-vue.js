'use strict'

const app = new Vue({
    el: '#app', 
    data:{
        titulo: 'Catálogo de Frutas', 
        frutas: [
            {nombre: 'Manzana', cantidad: 100},
            {nombre: 'Piña', cantidad: 200}, 
            {nombre: 'Uva', cantidad: 0}, 
            {nombre: 'Cereza', cantidad: 300},  
        ], 
        nuevaFruta: '', 
        vacio: '', 
        total: 0
    }, 

    methods:{
        agregar(){
            if(this.nuevaFruta == ''){
                this.vacio = true;
            }else{
                this.frutas.push(
                    {nombre: this.nuevaFruta, cantidad:0}
                );
                this.nuevaFruta = "";
                this.vacio = false;
            }
        }
    }, 

    computed: {
        sumar(){
            this.total = 0;
            for(let fruta of this.frutas){
                if(fruta.cantidad > 0){
                    this.total += fruta.cantidad;
                }else{
                    fruta.cantidad = 0;
                }

            }

            return this.total;
        }
    },
});