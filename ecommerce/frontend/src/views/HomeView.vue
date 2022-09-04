<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col cols="9">
          <div>
            Listado de productos
          </div>
          <b-row cols="1" cols-sm="2" cols-xl="4">
            <ProductCard
            v-for="product in products" :key="product.id"
            :products='products'
            :product='product'
            class="cardItem">   
            </ProductCard>
          </b-row>
        </b-col>
        <b-col cols="3">
          <div>
            Shopping cart
            <CartItem>
            </CartItem>
          </div>
        </b-col>
      </b-row> 
    </b-container>  
  </div>
</template>


<script>
// @ is an alias to /src
// import {mapState} from 'vuex'
import { mapActions, mapGetters } from "vuex"
import ProductCard from '../components/ProductCard.vue'
import CartItem from '../components/CartItem.vue'

export default {
  name: 'Home',
  components: {
    ProductCard,
    CartItem
  },
  data() {
    return {
      totalPrice: 0,
    }
  },
  computed: {
    ...mapGetters(["products","cart",]), // llamando al state de vuex desde el view
    
  },
   methods: {
    ...mapActions(["fetchAllProducts","fetchCart",]), // llamando al action de vuex desde el view
  },
  mounted(){
    // this.fetchAllProducts() // utilizando el fetchAllProducts del action
    // this.fetchCart() // utilizando el fetchCart del action 
  }
}
</script>

<style>

.cardItem{
  margin-bottom: 2vh;
}

</style>