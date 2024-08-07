<template>
    <div class="div1">
    <div class="card" v-for=" product in products" :key="product.id">
    <img :src="require(`@/assets/${product.productImgPath.split('/').pop()}`)" class="card-img-top" :alt="product.productName">
    <div class="card-body">
      <h5 class="card-title">{{product?.productName}}</h5>
      <!-- <p class="card-text">{{product.description}}</p>
       -->
      <h6 class="price">Price: ₹{{product?.price}}</h6>
      <!-- <a href="#" class="btn btn-primary ">Details</a> -->
      <button @click="viewDetails(product.id)">Details</button>
    </div>
  </div>
</div>


</template>

<script>
import axios from 'axios';


    export default{

        name: "ProductComponent",
        components: {},
        data() {

            return{
                products: []
            }
        },

        mounted() {

            this.getProducts()
        },

        methods: {
            getProducts(){

                axios.get("http://localhost:8080/product")
                .then((res)=> {
                    this.products= res.data
                    console.log(this.products)
                })
                .catch((error)=> console.log(error)
                )

            },

            viewDetails(id){
                console.log(id)
                this.$router.push({ name: 'ProductDetails' ,params: {id}})
            }
        }

    }

</script>

<style scoped>

img{
    min-height: 150px;

}

.card-container {
    perspective: 1000px; /* Create 3D perspective */
    display: inline-block;
  }
  
  .card {
    width: 16rem;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Add shadow for depth */
    margin: 10px;
    
  }
  
  .card:hover {
    transform: scale(1.05) rotateY(5deg); /* Scale up and tilt slightly on hover */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* Increase shadow size */
  }
  
  .card-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://i.pinimg.com/originals/92/94/1d/92941d986586249ee79a24065f68c910.jpg");
    
  }
  
  .card-img-top {
    width: 100%;
    height: 12rem; /* Adjust height as needed */
    object-fit: cover;
    
  }
  
  .card-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 900;
    color: #0a0a0a;
  }
  
  .card-text {
    font-size: 0.875rem;
    color: #0f0f10;
    font-family: 'Times New Roman', Times, serif;
  }
  .price{
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
  }
  .btn-primary {
    background-color: #0a0a0a;
    border-color: #d9dee4;
    color: #fff;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
    width: 6rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
    
  }
  
  .btn-primary:hover {
    background-color: #f9fafc;
    border-color: #0a0a0a;
    color: #0a0a0a;
    font-weight: 500;
  }
  .products{
    display: flex;
    justify-content: space-around;
  }
  /* Additional animations or effects can be added as needed */

  .div1 {
  
  margin: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 1px solid #ddd; Border color */
  padding: 30px;
  /* Padding inside the border */
  border-radius: 8px;
  /* Rounded corners for the border */
  max-width: 100%;
  /* Ensures the container doesn't overflow its parent */
  margin: 0 auto;
  /* Centers the container horizontally */
  box-sizing: border-box;
  /* Ensures padding and border are included in the width */
  background: #fff;
  /* 3D Shadow Effect */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;


}
  

</style>