<template>
  <div>
    <b-container>
      <h1>{{this.$store.state.cart.length}}</h1>
      <h1 class="display-4">{{product.name}}</h1>
    <!-- <button @click="home">Home</button> -->
      <CarouselItem
      class="carousel">  
      </CarouselItem>
      <p>Id: {{product.id}}</p>
      <p>{{product.description}}</p>
    </b-container>  

    <b-container class="product-info bv-example-row">
    <b-row class="text-center">
    <b-col class="display-6">{{product.price}}  €</b-col>
    <b-col>
      <b-button variant="outline-primary" @click="addToCart(product)">Add to cart</b-button>
    </b-col>
    </b-row>
    </b-container>
    
    <b-button variant="outline-dark" class="return-btn" @click="previous">Previous</b-button>
  </div>
</template>


<script>

import { mapActions, mapGetters } from "vuex"
import CarouselItem from '../components/CarouselItem.vue'


export default {

 name: 'Product',
 components:{
  CarouselItem
    
 },
 data(){
     return{
        productId: this.$route.params.id, //Guardando el id de la ruta para usarlo en el fecth
        // productUnic: this.$store.state.product,
        // myProduct: {},
     }
 },
 computed: {
    ...mapGetters(["product","cart"]), // llamando al state de vuex desde el view
    
  },
 methods:{
    // home(){
    //     this.$router.push('/') //volviendo a home
    // },
    previous(){
        this.$router.go(-1) // volver a la pagina anterior donde estaba
    },
    ...mapActions(["fetchProductbyId","addProductToCart","fetchAddProductToCart","fetchIncrementProductInCart"]), // llamando al action de vuex desde el view
    
    addToCart(product){
      // buscando el item en nuestro cart
      let cartItem = this.cart.find(item => item.productId == product.id)
      if (!cartItem) {
        this.fetchAddProductToCart(product)
      } else {
        this.fetchIncrementProductInCart(cartItem)

      }
     },
 },
 mounted(){
    this.fetchProductbyId(`${this.productId}`) // utilizando el fetchAllProducts del action
 },
}
</script>

<style>

.carousel {
  width: 35rem;
  margin: 0 auto;
}
.product-info{
  margin-top: 2rem;
  margin-bottom: 4rem;

} 
.return-btn {
  margin-bottom: 4rem;
}
</style>