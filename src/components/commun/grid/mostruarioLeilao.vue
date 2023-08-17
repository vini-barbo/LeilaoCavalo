<script>
import {online} from "./mostruarioDados.js"
import mostruarioFiltro from "./mostruarioFiltro.vue";
    export default{
        name:"MostruarioLeilao",
        data(){
            return{
                online: online,
            };
        },
        components:{
            mostruarioFiltro,
        },
        methods: {
            irParaPaginaItem(){
                this.$router.push("/item")
            }
        },
    };

</script>

<template>
<main>
    <section class="telaItem" v-if="false">
    </section>
    <section v-if="false" class="filtro">
        <mostruarioFiltro></mostruarioFiltro>
    </section>
    <section class="grid" >
    <div class="element" v-for="card in online" :key="card.id" @click="irParaPaginaItem()">

        <img src="/public/destaque.jpg" alt="Anuncio" style="border-radius: 5px;">

        <article>
            <div id="titulo">{{card.titulo}} id:{{card.id}}</div>
            <div v-if="true" class="data">
                <div id=termino>Termina em {{card.termino}}</div>
            </div>
        </article>
    </div>
    </section>
</main>
</template>

<style scoped>
main{
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #eeeeee;
    padding-top: 30px;
    padding-bottom: 30px;
}

.filtro , .grid{
    width: 80%;
}

.grid{
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
    gap: 1rem;
    justify-items: center;
    
}
.element{
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 1px 1px 1.5px 1.5px rgb(176, 176, 176);
    border-radius: 5px;
    text-align: center;
    width: 300px;
    cursor: pointer;
    transition: 8ms;

}

.element:hover{
    animation-timing-function: ease;
    box-shadow: 1px 1px 1.5px 1.5px rgb(201, 201, 201);
}

img{
    width: 100%;
    height: 300px;
}

article{
    width: 100%;
    height: 50px;
    overflow: hidden;
}

#titulo{
    font-size: 1.3rem;
}
.data{
    display: flex;
    width: 100%;
    justify-content: center;
}

#comeco{
 padding-right:5px;
 border-right: 1px solid #1c1c1c;
}

#termino{
    padding-left:5px; 
}
</style>