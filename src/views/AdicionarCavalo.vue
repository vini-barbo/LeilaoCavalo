<script>
    export default{
        name: "AdicionarCavalo",

        data(){
            return{
            nomeCavalo: "",
            data: "",
            valor: "",
            descricao: "",
            imagem: ""
            };
        },

        methods:{
            /* aqui vai ficar o codigo de gravar no banco */
            inserirBanco(){
            const cavalo = {nomeCavalo: this.nomeCavalo,
            data: this.data,
            valor: this.valor,
            descricao: this.descricao,
            imagem: this.image}

            localStorage.setItem("Cavalo", JSON.stringify(cavalo) )
            },
        }

    }

</script>

<template>
    <main class="centroPagina">
    <aside class="cadastro">
        <section class="inputs">
        <div>
            <input type="text" name="" id="" placeholder="Nome do cavalo" v-model="nomeCavalo">
        </div>
        <div>
            <input type="text" name="" id="" placeholder="Data do leilao" v-model="data">
        </div>
        <div>
            <input type="text" name="" id="" placeholder="Valor inicial" v-model="valor">
        </div>
        <div class="descricao">
            <input class="descricao_item" type="text" name="" id="" placeholder="Descrição" v-model="descricao">
        </div>
        <div>
            <button @click="inserirBanco"> Cadastrar </button>
        </div>
        </section>
        <section class="image">
            <div class="image_title">
                
            </div>
            <div class="image_placeholder">

            </div>

            <div class="image_button">
                <button>selecionar imagem</button>
            </div>
        </section>
    </aside>
    </main>
</template>

<style scoped>

.centroPagina{
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

.cadastro{
    background-color: white;
    height: 30vw;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    
}

.cadastro section{
    height: 70%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cadastro section.image{
    width: 20%;
}

button,input{
    align-items: center;
    margin: 0;
    width: 100%
}

input{
    background-color: white;
    border:none;
    border-bottom: 1px solid grey;
}

.descricao{
    height: 30%;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
}

.descricao_item{
    text-align: start;
    border: none;
    max-height: 100%;
    max-width: 100%;
    overflow-y: scroll;
}

.image_placeholder{
    border-radius: 5px;
    aspect-ratio: 1/1;
    width: 98%;
    border: 1px solid grey;
}


</style>
