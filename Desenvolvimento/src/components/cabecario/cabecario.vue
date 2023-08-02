<script>
    export default{
        name:'cabecarioMain',
    }


</script>


<template>
  <main>
    <section class="icone">
        <img src="./icon/logo.svg" alt="Logo cavalo">
    </section>
    <section class="links_aside">
        <div class="link">
            <a href="#">leilões</a>
        </div>
        <div class="link">
            <a href="#">contato</a>
            
        </div>
        <div class="link">
            <a href="#">quem somos</a>
        </div>
    </section>

  </main>  
</template>

<style scoped>

main{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

section{
    display: flex;
    height: 90px;
    width: 100%;
    font-size: 1.5rem;
    justify-content: end;
    padding-left: 10%;
    padding-right: 10%;
    align-items: center;
    gap: 30px;
    color: #0369a2;
}

section.icone{
    justify-content: center;
}

img{
    color: #0369a2;
    width: 70px;
    aspect-ratio: 1/2;
}

.link{
    text-decoration: none;
}


</style>