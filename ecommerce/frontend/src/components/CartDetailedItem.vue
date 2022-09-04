<template>
  <div class="shopping-cart">
      <div>
        <b-row class="title">
            <b-col class="fw-bold">Product</b-col>
            <b-col></b-col>
            <b-col class="fw-bold">Price</b-col>
        </b-row>
        <b-row 
        v-for="cartItem in cart" :key="cartItem.id">
            <template class="item-listed" v-if="cartItem.quantity >  0">
                <b-col>
                    <button class="delete-button" @click="fetchDeleteProductInCart(cartItem)">
                        <b-icon-x-circle class="delete-icon"></b-icon-x-circle>
                    </button>
                    {{cartItem.productId}} {{products[cartItem.productId].name}}</b-col>
                <b-col>
                    <button class="modifier" @click="decreaseItem(cartItem)">-</button>
                    {{cartItem.quantity}}
                    <button class="modifier" @click="incrementItem(cartItem)">+</button>
                </b-col>
                <b-col>
                    {{cartItem.quantity * products[cartItem.productId].price}} $
                </b-col>
            </template>
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
import { mapActions, mapGetters } from "vuex"

export default {
    // props: ['cart','products'],
    data() {
        return {
            //totalPrice: 0,
        }
    },
    mounted() {
        // console.log(this.cart)
    },
    computed: {
         ...mapGetters(["products","cart",]), // llamando al state de vuex desde el view

        calculateTotalPrice() {
            let totalPrice = 0
            this.cart.forEach(cartItem => {
            totalPrice += this.products[cartItem.productId].price * cartItem.quantity  
        })
        return totalPrice  
        },
        // showCorrectData() {
        //     return this.$store.state.cart.filter(cartItems => cartItems.quantity > 0)
        // }
    },
    methods:{
        ...mapActions(["fetchIncrementProductInCart","fetchCart","fetchDecreaseProductInCart","fetchDeleteProductInCart"]), // llamando al action de vuex desde el view
        incrementItem(productCart){
            this.fetchIncrementProductInCart(productCart)
            // this.fetchCart() // recargando el carrito
        },
        decreaseItem(productCart){
            if (productCart.quantity > 1) {
                this.fetchDecreaseProductInCart(productCart)
                // this.fetchCart() // recargando el carrito
            } else {
                this.fetchDeleteProductInCart(productCart)
                // this.fetchCart() // recargando el carrito
            }
        }
    }
}
</script>

<style>
.shopping-cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
}
.modifier{
  height: 30px;
  width: 30px;
  border-radius: 50%; 
  border: 1px solid silver;
  background-color: #ffff;
  margin-left: 14px;
  margin-right: 14px;
  font-weight: 500;
}

.modifier:hover{
  transform: scale(1.05);  
}
.item-listed{
    border-bottom: 1px solid silver;
    padding: 10px;
}
.row{
    margin-bottom: 0.6rem
}
.title{
    border-bottom: 1px solid silver;
    padding: 10px;
}
.delete-button{
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
}
.delete-button:hover{
    cursor: pointer;
    transform: scale(1.05);
}
.delete-icon{
    color: #ff0000;
}
</style>