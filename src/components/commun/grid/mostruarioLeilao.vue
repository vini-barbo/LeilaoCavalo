<script>
import {online} from "./mostruarioDados.js"
    export default{
        name:"MostruarioLeilao",
        data(){
            return{
                online: online,
            };
        },
    };

</script>

<template>
<main>
    <section class="grid" >
    <div class="element" v-for="card in online" :key="card.id" >

        <img src="/public/destaque.jpg" alt="Anuncio">

        <article>
            <div id="titulo">{{card.titulo}} id:{{card.id}}</div>
            <div class="data">
                <div id="comeco">começo {{card.comeco}}</div>
                <div id=termino>termino  {{card.termino}}</div>
            </div>
            <div id="descricao">
                {{card.descricao}}
            </div>
        </article>
    </div>
    </section>
</main>
</template>

<style scoped>
main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 80%;
    gap: 2rem;
}
.element{
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid white;
    text-align: center;
    width: 300px;
}

img{
    width: 100%;
    height: 300px;
}

article{
    width: 100%;
    height: 150px;
    overflow: hidden;
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