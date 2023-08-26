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
        <div class="caixa" >
            <div class="tempo">Encerra em : 0 D 23 H 10 M 4 S
            </div>
        </div>
            
        <div class="caixa">
            <div class="valor">
                <label> Lance atual</label>
                <label>R$ 3500,00</label>
            </div>
        </div>
            
        <div class="caixa" >
            <div class="valor">
                <label> Lance minimo</label>
                <label>R$ 4000,00</label>  
            </div>
            <div class="valor">
                <label> Lance inicial</label>
                <label>R$ 2500,00</label>  
            </div>
            <div class="valor" id="input">
                <label for="" >Seu lance:</label>
                <div class="input">
                    R$
                <input type="text">
                </div>
            </div>  
            <div class="botao_lance">
                Dar lance
            </div>
        </div>
        <div class="caixa" style="box-shadow: none;"> 

        </div>
            <div class="historico">
                <div class='titulo_historico'>'i' Lances anteriores  </div>
                <div class="historico_dados">
                    <div v-for="item in 10" key="index" >
                        <li>{{ index }} </li><li>'i' 20.08.2023 </li> <li>'i' 15:21:37</li> <li>R$2000</li>
                    </div>
                </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}
.informacoes .titulo{
    width: 100%;
}

.tempo{
    width: 100%;
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

.valor{
    min-height: 40px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.linha_form{
    width: 80%;
    border-radius: 1px;
    height: 1px;
    background-color: #f0f0f0;
}

.botao_lance{
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #238636;
    font: bolder;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: none;

}

.caixa{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #f0f0f0;
    gap: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
}


.historico{
    width: 100%;
    box-shadow: 1px 1px 2px 2px #f0f0f0;
    overflow-y: scroll;
    max-height: 35%;

}

.historico_dados{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    
    
}

.titulo_historico{
    background-color: #323232;
    color: white;
    text-align: start;
    padding-left: 5px;
}

.historico_dados div{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f0f0f0;
}

li{
    list-style-type: none;
}

input{
    height: 20px;
    width: 100%;
    padding: 0%;
}

#input{
    display: flex;
    justify-content: space-between; 
}

.input{
    display: flex;
    flex-direction: row;
    gap: 5px;
}

</style>