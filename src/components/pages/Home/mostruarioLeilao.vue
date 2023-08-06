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
    <section class="grid" v-for="card in online" :key="card.id">
    <div class="element" >

        <img src="/public/destaque.jpg" alt="Anuncio">

        <article>
            <div id="titulo">{{card.titulo}}</div>
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
    display: flex;
    align-items: center;
    width: 100%;

}

section{
    display: grid;
    grid-template-columns: repeat(4fr);
    width: 80%;
    gap: 1rem;
}
.element{
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #1c1c1c;
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