<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      showPopup: false
    };
  },
  methods: {
    submitForm() {
      console.log("Nome:", this.name);
      console.log("Senha:", this.password);
      this.showPopup = false;
    }
  }
};
</script>

<template>
    <div class="linha">Realizar Login</div>
  <div>
    <div class="overlay" v-if="showPopup">
      <div class="popup">
        <button class="close-button" @click="showPopup = false">x</button>
        <form @submit.prevent="submitForm">
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="name" />
          <br />
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <div class="button-container">
      <button @click="showPopup = true">Login cliente</button>
      <button @click="showPopup = true">Login Vendedor</button>
    </div>
  </div>
</template>

<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4%;
}

.close-button {
  position:relative;
  height:max-content;
  left: 205px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 2%;
}

.button-container button {
  margin: 0 10px;
  width: 100%;
}

button {
  border: none;
  background-color: rgb(255, 255, 255);
  color: black;
}
</style>
