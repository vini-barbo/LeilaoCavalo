<script>
    export default{
        name:"MostruarioLeilao",
        
        components:{
        }
    }

</script>

<template>
<main>
    <section class="grid">
    <div class="element">

        <img src="/public/destaque.jpg" alt="Anuncio">

        <article>
            <div id="titulo">Titulo lorem</div>
            <div class="data">
                <div id="comeco">começo 00/00/00</div>
                <div id=termino>termino  00/00/00</div>
            </div>
            <div id="descricao">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi modi reiciendis consequuntur officia
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