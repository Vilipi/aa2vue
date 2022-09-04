<template>
  <div>
    <b-container class="shopping-cart">
      <CartDetailedItem>
      </CartDetailedItem>
      <b-row>
        <b-col>
          <b-button v-on:click="fetchCreateOrder(cartItems)" variant="success">Create order</b-button>
        </b-col>
        <!-- <b-col>
          <b-button  disabled variant="outline-danger">Clear cart</b-button>
        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import CartDetailedItem from '../components/CartDetailedItem.vue'

/*
ARREGLAR TOTAL PRICE Y EL NUMNERO DE ITEMS QUE HAY EN EL CART
*/

export default {
  name: 'Cart',
  components: {
    CartDetailedItem
  },
  computed: {
    ...mapGetters(["products","cart",]), // llamando al state de vuex desde el view
    //devuelve un array con los items del carrito > 0
    cartItems() {
      let cartItems = this.cart.filter(item => item.quantity > 0)
      return cartItems
    },
    
  },
  methods: {
    ...mapActions(["fetchAllProducts","fetchCart","fetchCreateOrder"]), // llamando al action de vuex desde el view
    deleteMyCart(){
      // this.deleteCart()
      this.$store.state.cart = [] //simulando que se borra el carrito
    }
  },
  mounted(){
    this.fetchCart() // utilizando el fetchCart del action 
    this.fetchAllProducts() // utilizando el fetchAllProducts del action
  } 
}
</script>

<style>
.shopping-cart{
  background-color: #f5f5f5;

}

</style>