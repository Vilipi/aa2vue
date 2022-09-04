<template>
    <div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          :fade="true"
          indicators
          :interval= interval
          img-width="1024"
          img-height="480">
          <b-carousel-slide
            caption="First slide"
            :img-src= correctImages[0]>
          </b-carousel-slide>
          <b-carousel-slide
            caption="First slide"
            :img-src= correctImages[1]>
          </b-carousel-slide>
          <b-carousel-slide
            caption="First slide"
            :img-src= correctImages[2]>
          </b-carousel-slide>
        </b-carousel>
      </div>
</template>

<script>
// import {mapGetters, mapActions} from "vuex"

export default {
    name: 'CarouselItem',
    // props: ['product'],
    data() {
        return{
            // myProduct: this.$store.state.product.images,
            interval: 0,
            productId: this.$route.params.id,

        }

    },
    computed: {
    // ...mapGetters(["product"]), // llamando al state de vuex desde el view
    correctImages(){
      let imagesArr = []
      const images = this.$store.state.products[this.productId].images
      let image0 = this.$store.state.products[this.productId].images[0]
      imagesArr.push(image0)

      if (!images[1]){
        imagesArr.push(image0)
      } else {
        imagesArr.push(images[1])
      }
      if (!images[2]){
        imagesArr.push(image0)
      } else {
        imagesArr.push(images[2])
      }
      
      return imagesArr
    },
    },
    methods: {
    // ...mapActions(["fetchProductbyId"]), // llamando al action de vuex desde el view
    changeInterva(){
      if(this.$store.state.products[this.productId].images.length === 1){
        this.interval = 0
      } else {
        this.interval = 4000
      }
    },
    },
    mounted(){
      this.changeInterva()
    // this.fetchProductbyId(`${this.productId}`) // utilizando el fetchAllProducts del action
    // console.log(this.image1)

    },
 }
 
</script>

<style>

</style>