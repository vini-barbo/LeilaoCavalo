<script>
    export default{
        name:"DestaqueHome"
    }

</script>

<template>
    <main>
        <div class="img">
            <img src="../../../../public/destaque.jpg" alt="cavalo"></div>
    </main>
</template>

<style scoped>

main{
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    
  }

div{
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;    
}

div.img{
    width: 100%;
    height: 90%;
}

img{
    border: 2px solid grey;
    width: 80%;
    height: 90%;
}

div.texto{
    height: 10%;
    aspect-ratio: 2/1;
}

span{
    width: 80%;
    height: 100px;
    text-align: center;
    color: white;
    font-size: 3rem;
    background-color: #1c1c1c;
    text-align: center;
}

</style>