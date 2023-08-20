<script>
    export default{
        name:"telaItem",

        data() {
            return {
            }
        },
    }

</script>

<template>
<main class="centroPagina">
    <section class="conteudo_principal">
        
        <aside class="espaco_imagens">
        <div class="titulo">
            <div>
                Nome do cavalo
            </div>
            <div class="botao">
                <button> i </button>
                <button> i </button>
            </div>
        </div>
        <div class="imagem_grid">
            <div class="imagem_principal">
                <img  src="/public/destaque.jpg" alt="">
            </div>
        
            <div class="imagem_secundaria" >
                <img v-for="item in 4" src="/public/destaque.jpg" alt="">
            </div>
        </div>
        </aside>

        <aside class="informacoes">
            <div class="tempo">Encerra em : 0 D 23 H 10 M 4 S</div>
            <div class="valor">
                <label> valor atual</label>
                <label>R$ 3500,00</label>
            </div>
            <div class="valor">
                <label> valor atual</label>
                <label>R$ 3500,00</label>  
            </div>
                                  
        </aside>
    </section>
 </main>   
</template>

<style scoped>
section{
    color: black;
    display: flex;
    gap: 10px;
}
.espaco_imagens{
    width: 50vw;
}
.informacoes{
    width: 30vw;
    aspect-ratio: 1/1;
}

img{
    width: 100%;
    
}

.imagem_grid{
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;



}
.imagem_principal{
    grid-row: 1;
    grid-column: 1;
    aspect-ratio: 2/1;
}

.imagem_secundaria{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    height: fit-content;
    grid-column: 1;
}

.imagem_secundaria img{
    cursor: pointer;
}

.informacoes{
    box-shadow: 1px 1px 2px 2px #f0f0f0
}

.informacoes div{
    width: 100%;
    text-align: center;
}

.tempo{
    color: white;
    background: rgb(230, 71, 71);
}

.titulo{
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;

    color: white;
    background: #323232;
}

.botao{
    display: flex;
    gap: 10px;
    font-size: 1rem;
}

.botao button{
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
}

</style>