<script>
export default {
  name: "Cards",
  data() {
    return {
      items: [
        { id: 1, title: "Cavalo" },
        { id: 2, title: "Coberturas" },
        { id: 3, title: "Embriões" },
        { id: 4, title: "Óvulos" }
      ]
    };
  }
};
</script>

<template>
  <main>
    <section class="grid">
      <div class="element" v-for="item in items" :key="item.id">
        <article>
          <div id="titulo">{{ item.title }}</div>
        </article>
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
border-radius:
5px;text-align:
center;width:
300px;cursor:
pointer;margin-left:
20px;margin-right:
20px;}

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
