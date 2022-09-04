<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Carrito</router-link>
    </div>
    <h5 v-if="isMock">Working with MOCK data</h5>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  computed: {
    isMock() {
    return process.env.VUE_APP_API_IS_MOCK === "true"
  },
  // ...mapGetters(["products","cart",]), // llamando al state de vuex desde el view
    
  },
  methods: {
    ...mapActions(["fetchAllProducts","fetchCart",]), // llamando al action de vuex desde el view
  },
  created(){
    this.fetchAllProducts() // utilizando el fetchAllProducts del action
    this.fetchCart() // utilizando el fetchCart del action 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
