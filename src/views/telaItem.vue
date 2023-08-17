<script>
    export default{
        name:"telaItem",

        data() {
            return {
                id : this.$route
            }
        },
    }

</script>

<template>
 <main class="centroPagina">
    <div class="imagens">
    <img src="/public/destaque.jpg" alt="">
    <div v-if="false">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </div>
    </div>
    <div>

    </div>

    
 </main>   
</template>

<style scoped>

img{
    width: 80vw;
    height: 80vh;
}

</style>