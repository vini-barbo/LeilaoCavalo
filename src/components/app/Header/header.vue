<script>
import { RouterLink } from 'vue-router';

    export default{
        name:'HeaderApp',
    
        components:{
            RouterLink
        }
    }
</script>


<template>
  <main>
    <section class="icone">
        <RouterLink to="/">
        <img src="./icon/logo.svg" alt="Logo cavalo"
        @click.native="InlineButtonClickHandler">
    </RouterLink>
    </section>
    <section class="links_aside">
        <div class="link">
            <RouterLink to="/presencial">Leilões presenciais</RouterLink>
        </div>
        <div class="link">
            <RouterLink to="/online">Leilões online</RouterLink>
        </div>
        <div class="link">
            <RouterLink to="/cavalos">Cavalos</RouterLink>
        </div>
        <div class="link">
            <RouterLink to="/cobertura">Coberturas</RouterLink>
        </div>
        <div class="link">
            <RouterLink to="/embriao">Embriões</RouterLink>
        </div>
        <div class="link">
            <RouterLink to="/ovulo">Óvulos</RouterLink>
        </div>
    </section>
    <section class="login">
    <div class="entrada">
        <div>Entrar</div>
        <div>cadastrar</div>
    </div>
        <div class="fotoPerfil"></div>
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
    font-size: 1.0rem;
    justify-content: end;
    padding-left: 10%;
    padding-right: 10%;
    align-items: center;
    color: #0369a2;
}

section.icone{
}

img{
    color: #0369a2;
    width: 70px;
    aspect-ratio: 1/2;
}

.links_aside{
    padding: 0%;
    width: 100%;
    justify-content: space-between;
}

.link{
    
    text-decoration: none;
}

.login{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.entrada{
    display: flex;
    gap: 5px;
}

.fotoPerfil{
    width: 40px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: brown;
}

</style>