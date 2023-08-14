<script>
    export default{
        name: "MostruarioFiltro"
    }
</script>

<template>
<main class="filtro_container">
    <section class="caixa_filtro">
        filtro1
    </section >
    <section class="caixa_filtro">
        filtro2
    </section>
    <section class="caixa_filtro">
        filtro3
    </section>
</main>
</template>

<style scoped>

.filtro_container{
    height: 50px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0px;
    justify-content: space-between;
}

.caixa_filtro{
    height: 100%;
    border: 1px solid #b3b3b3;
    width: 33%;
}

</style>