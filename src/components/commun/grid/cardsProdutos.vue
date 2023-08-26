<script>
export default {
  name: "cardsProdutos",

  methods: {
    irProduto(id){
      console.log("consolo pica cu")
      console.log(id)
      this.$router.push(id)
    },
  }
}
</script>

<template>
  <main>
    <section class="grid" @click="irProduto('/cavalos')">
      <div class="element">
          <div id="titulo">Cavalo</div>
      </div>
      <div class="element" @click="irProduto('/cobertura')">
          <div id="titulo">Coberturas</div>
      </div>
      <div class="element" @click="irProduto('/embriao')">
          <div id="titulo">Embriões</div>
      </div>
      <div class="element" @click="irProduto('/ovulo')">
          <div id="titulo"  >Óvulos</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
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

.grid {
  width: 80%;
}

.grid {
  display: flex;
}

.element {
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
border-radius:
5px;text-align:
center;width:
300px;cursor:
pointer;margin-left:
20px;margin-right:
20px;
height: 300px;
}


.element:hover{
animation-timing-function:
ease;box-shadow:
1px1px1.5px1.5pxrgb(201,201,201);
filter: brightness(80%);
}

article{
width:
100%;height:
50px;overflow:hidden;}

#titulo{
font-size:
1.3rem;}
</style>