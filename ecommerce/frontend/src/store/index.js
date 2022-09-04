import Vue from 'vue'
import Vuex from 'vuex'
import url from '@/utils/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    cart:[],
    product:{},
    orders:[]
  },
  getters: {
    products(state) {
      return state.products
    },
    product(state){
      // console.log(state.product.id)
      return state.product
    },
    cart(state){
      return state.cart
    },
    //filtrando el cart que tenga quantity > 0
    // cartItems(state){
    //   let cartItem = state.cart.filter(item => item.quantity > 0)
    //   return cartItem
    // },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setCart(state, cart) {
      state.cart = cart
    },
    addOrder(state, order) {
      state.orders.push(order)
    },
    pushProductToCart(state, cartItem) {
      state.cart.push({
        productId: cartItem.productId,
        quantity: 1
      })
    },
    incrementProductInCart(state, cartItem) {
      state.cart.filter(item => {
        if (item.productId == cartItem.productId) {
          item.quantity++
        }
      })
    },
    decrementProductInCart(state, cartItem) {
      state.cart.filter(item => {
        if (item.productId == cartItem.productId) {
          item.quantity--
        }
      })
    },
    deleteProductinCart(state, cartItem) {
      let itemToRremove = state.cart.filter(item => item.productId == cartItem.productId)
      let index = state.cart.indexOf(itemToRremove[0])
      state.cart.splice(index, 1)  
    }
  },
  actions: {
    fetchAllProducts(context) {
      return fetch(url('/products'))
        .then((response) => response.json()) 
        .then((data) => {
          context.commit('setProducts', data)
        })
        .catch((err) => console.error(err))
    },
    fetchProductbyId(context, id) {
      return fetch(url(`/products/${id}`))
        .then((response) => response.json()) 
        .then((data) => {
          context.commit('setProduct', data)
        })
        .catch((err) => console.error(err))
    },
    fetchCart(context) {  
      return fetch(url('/cart'))
        .then((response) => response.json()) 
        .then((data) => {
          context.commit('setCart', data)
        })
        .catch((err) => console.error(err))
    }, 

    fetchAddProductToCart(context, product) {
      return fetch(url('/cart'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1
        })
      })
        .then((response) => response.json())
        .then((data) => { 
          context.commit('pushProductToCart', data)
        })
      .catch((err) => console.error(err))
    },

    fetchIncrementProductInCart(context, cartItem) {
      return fetch(url(`/cart/${cartItem.id}`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: cartItem.id,
          productId: cartItem.productId,
          quantity: cartItem.quantity +1
        })
      })
        .then((response) => response.json())
        .then((data) => { 
          context.commit('incrementProductInCart', data)
        })
      .catch((err) => console.error(err))
    },
    fetchDecreaseProductInCart(context, cartItem) {
      return fetch(url(`/cart/${cartItem.id}`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: cartItem.id,
          productId: cartItem.productId,
          quantity: cartItem.quantity -1

        })
      })
        .then((response) => response.json())
        .then((data) => { 
          context.commit('decrementProductInCart', data)
        })
      .catch((err) => console.error(err))
    },
    fetchDeleteProductInCart(context, cartItem) {
      return fetch(url(`/cart/${cartItem.id}`), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: cartItem.productId,
          // quantity: cartItem.quantity -1

        })
      })
        .then((response) => response.json())
        .then((data) => { 
          context.commit('deleteProductinCart', data)
        })
      .catch((err) => console.error(err))
    },
    fetchCreateOrder(context, cart) {
      return fetch(url('/orders'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "items":cart
        })
      })
        .then((response) => response.json())
        .then((data) => { 
          context.commit('addOrder', data)
        })
      .catch((err) => console.error(err))
    }
    
   
  
  },
  modules: {
  }
})
