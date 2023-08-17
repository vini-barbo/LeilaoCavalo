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
    box-shadow: 1px 1px 2px 2px rgb(152, 152, 152);
    width: 80%;
    height: 90%;
    border-radius: 5px;
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