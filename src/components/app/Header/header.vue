<script>
import { RouterLink } from 'vue-router';
import RouterLinkHeader from './RouterLinkHeader.vue'

    export default{
        name:'HeaderApp',
    
        components:{
            RouterLink, RouterLinkHeader
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
    <RouterLinkHeader></RouterLinkHeader>
    <section class="login">
    <div class="entrada">
        <router-link to="/login">Entrar</router-link>
        <router-link to="/login">Cadastrar</router-link>
    </div>
        <div class="fotoPerfil"></div>
    </section>
  </main>  
</template>

<style scoped>

main{
    background-color: rgb(240, 240, 240);
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #1c1c1c;
    box-shadow: 1px 1px 2px 2px (240, 240, 240);
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


img{
    color: #0369a2;
    width: 70px;
    aspect-ratio: 1/2;
}

.links_aside{
    padding: 0%;
    width: 100%;
    justify-content: flex-start;
    gap: 5px;
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
    background: grey;
}


a, select, option{  
    text-decoration: none;
    background-color: transparent;
    border: none;
}


a:link{
    color: #1c1c1c;
}
a:visited {
    color: #1c1c1c;
}
a:hover {
    color: #1c1c1c;
}
a:active {
    color: #0369a2;
}



</style>