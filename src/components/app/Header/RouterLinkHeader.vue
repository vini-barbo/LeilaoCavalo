<script>


    export default{
        name:'RouterLinkHeader',

        data() {
            return {
                paginaSelecionada: ""
            }
        },
        methods: {
            RedirecionaLink(){
                this.$router.push(this.paginaSelecionada)
            }
        },
    }
</script>


<template>
    <section class="links_aside" style="color: black;" >
        <select name="Leilões" id="Leilões" label="teste" v-model="paginaSelecionada" @change="RedirecionaLink">
        <option value="">Leilões</option>
        <option value="/presencial">presenciais</option>
        <option value="/online">online</option>
        </select>

        <select name="Produtos" id="Produtos" v-model="paginaSelecionada" @change="RedirecionaLink" style="color: black;" >
        <option value="">Produtos</option>
        <option value="/cavalos">Cavalos</option>
        <option value="/cobertura">Coberturas</option>
        <option value="/embriao">Embriões</option>
        <option value="/ovulo">Óvulos</option>
    </select>

    <router-link  to="/" class="a">Adicionar cavalo</router-link>
    <router-link to="/" class="a">Adicionar cavalo</router-link>
    </section>


</template>

<style scoped>
section{
    display: flex;
    height: 90px;
    font-size: 1.0rem;
    justify-content: end;
    padding-left: 10%;
    padding-right: 10%;
    align-items: center;
    color: #0369a2;
}

.links_aside{
    padding: 0%;
    width: 100%;
    justify-content: flex-start;
    gap: 5px;
}

a, select, option .a{  
    background-color: transparent;
    border: none;
    text-decoration: none
}

</style>