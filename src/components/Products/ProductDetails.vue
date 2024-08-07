<template>

<div class="product-details-container">
<router-link :to="{ name: 'category' }" class="btn btn-secondary back-button">Back</router-link>
    <div class="detailsContainer">
    <div class="product-details-content">
      <div class="product-image">
        <img :src="productImagePath" :alt="product.productName" />
    </div>
      <div class="product-info">
        <h1>{{ product.productName }}</h1>
        <p>{{ product.description }}</p>
        <h2>Price: ₹{{ product.price  }}</h2>
        <button  class="btn btn-primary">Contact Seller</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

    export default{

        name: 'ProductDetails',
        components: [],


        data(){
            return {
              product: [],
               rupee:faRupeeSign
            }
        },

        mounted(){
           this.fetchProduct()
        },

        methods: {
            fetchProduct(){
                const productId=this.$route.params.id;
                axios.get(`http://localhost:8080/product/${productId}`)
                .then((res)=>{
                    this.product=res.data
                    console.log(this.product);
                    
                })
                .catch((error)=> {
                    console.log(error)
                })
                
            }
        },

        computed: {
           productImagePath() {
              return this.product.productImgPath ? require(`@/assets/${this.product.productImgPath.split('/').pop()}`) : '';
    }
  },
    }

</script>

<style scoped>

.product-details-container {
    padding: 20px;
    font-family: 'Times New Roman', Times, serif;
    background-image: url("https://i.pinimg.com/originals/92/94/1d/92941d986586249ee79a24065f68c910.jpg");

    
  }
  
  .back-button {

    top: 20px;
    left: 20px;
    z-index: 1000; 
    background-color: black;

    /* Ensure it's above other content */
  }
  .detailsContainer{
    display: flex;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.926);
    margin: 5px;
    border-radius: 8px;

  }
  .product-details-content {
    display: flex;
    align-items: flex-start;
    gap: 50px;
    margin-top: 30px; /* Adjust based on the height of the back button */
  }
  
  .product-image {
    flex: 1;
    min-width: 450px;
    min-height: 500px;
    margin-right: 50px;
    object-fit: cover;
  }
  
  .product-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .product-info {
    flex: 2;
  }
  
  .product-info h1 {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 800;
  }
  
  .product-info p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .product-info h2 {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  .product-info .btn {
    margin-top: 10px;
    background-color: black;
    border: 0;
  }
  .btn:hover {
    background-color: #f9fafc;
    border-color: #0a0a0a;
    color: #0a0a0a;
    font-weight: 500;
  }

</style>