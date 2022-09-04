<template>
  <div class="shopping-cart">
      <div>
        <b-row>
            <b-col class="fw-bold">Product</b-col>
            <b-col></b-col>
            <b-col class="fw-bold">Price</b-col>
        </b-row>
        <b-row  class="item-listed" v-for="cartItem in cart" :key="cartItem.id">
            <b-col>{{cartItem.productId}} {{products[cartItem.productId].name}}</b-col>
            <b-col>{{cartItem.quantity}}</b-col>
            <b-col>{{cartItem.quantity * products[cartItem.productId].price}} $</b-col>
        </b-row>
        <b-row>
            <b-col class="fw-bold">Total</b-col>
            <b-col></b-col>
            <b-col class="fw-bold">{{calculateTotalPrice}} $</b-col>
        </b-row>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    // props: ['cart','products'],

    mounted() {
        // console.log(this.cart)
        // this.storeCart = this.cart
    },
    
    computed: {
        ...mapGetters(["products","cart"]), // llamando al state de vuex desde el view

        calculateTotalPrice() {
            let totalPrice = 0
            if(this.cart.length > 0){
                this.cart.forEach(cartItem => {
                totalPrice += this.products[cartItem.productId].price * cartItem.quantity  
            })
            }
        return totalPrice  
    },
    },
}
</script>

<style>
.shopping-cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
}
.item-listed{
  border-bottom: 1px solid silver;
  padding: 10px;
}
</style>