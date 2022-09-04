<template>
<div>
    <a :href="`http://localhost:8080/#/products/${product.id}`">
        <b-card
            :title= product.name
            :img-src= product.images[0]
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2">
            <b-card-text>
                {{product.short}}
            </b-card-text>
            <b-card-text class="card-price">
                {{product.price}} €
            </b-card-text>
        </b-card> 
    </a>    
</div>    
</template>

<script>
export default {
    name: 'ProductCards',
    props: ['products', 'product'],
}
</script>

<style>
a {
    text-decoration: none;
    color: inherit;
}
a:hover {
    color:#00A0C6; 
    text-decoration:none; 
    cursor:pointer;  
}

.mb-2 {
    border-radius: 1.5rem;
    height: 100%;
    max-width: 100vw;
    /* PONER ESPACIADO HIGHT */
}
.card-text {
    /* display: flex;
    justify-content: center; */
    position: relative;
}
.mb-2 img {
    border-radius: 1.5rem 1.5rem 0 0;
}
.card-price {
    font-size: 1.4rem;
    font-weight: bold;
    color: #00A0C6;
    position: absolute;
    bottom: 0.6vh;
    left: 1vw;
    right: 1vw;
    
}



</style>