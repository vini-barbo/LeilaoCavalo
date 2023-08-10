<script>

    export default{
        name:'RouterLinkHeader',

        data() {
            return {
                paginaSelecionada: "TESTESTEZ"
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
        Leilões
        <select name="Leilões" id="Leilões" label="teste" v-model="paginaSelecionada" @change="RedirecionaLink">
        <option value="/presencial">Leilões</option>
        <option value="/presencial">presenciais</option>
        <option value="/online">online</option>
        </select>

        <select name="Produtos" id="Produtos" v-model="paginaSelecionada" @change="RedirecionaLink" style="color: black;" >
        Produtos
        <option value="/cavalos">Cavalos</option>
        <option value="/cobertura">Coberturas</option>
        <option value="/embriao">Embriões</option>
        <option value="/ovulo">Óvulos</option>
    </select>
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

a, select, option{  
    background-color: transparent;
    border: none;
}

</style>