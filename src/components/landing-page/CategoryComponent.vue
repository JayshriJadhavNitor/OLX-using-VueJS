<template>
     
    <div style="text-align: center;">
      <br>
      <h2><strong>Browse Categories</strong></h2>
      <br>
    </div>
    <div class="home-container">
      <section class="categories">
        <div class="category-list">
          <div v-for="category in categories" :key="category.name" class="category-card">
            <img 
        :src="require(`@/assets/${category.categoryImgPath.split('/').pop()}`)" 
              :alt="category.name" 
               
            />
            <h3>{{ category.name }}</h3>
          </div>
        </div>
      </section>
    </div>
    <div style="text-align: center;">
        <br>
        <h2><strong>Must See Featured Listings</strong></h2>
        <br>
    </div>
    <div>
           
            <ProductComponent />

    </div>
  

</template>

<script>

//import  Category from "../../models/category.js"

import axios from "axios";
import ProductComponent from "../Products/ProductComponent.vue";
export default {


    name: "app-category",
    components: {
        ProductComponent,
    },

    data() {

        return {
            categories: [],
        }

    },

    methods: {


         getCategory(){
            
            axios.get("http://localhost:8080/category").then((res)=>{
                this.categories= res.data;
                
            }).catch((error)=> console.log(error))

         },

         getImagePath(filePath) {
      // Extract file name and return relative path
      const fileName = filePath.split('/').pop();
      console.log(`../../assets/${fileName}`)
      return `../../assets/${fileName}`; // Assumes `assets` is in the `public` directory
    }
         
    }, 

    mounted(){
         this.getCategory();
    },

   


    
    
}
</script>

<style scoped>

.home-container {
  padding: 20px;
}

.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.category-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.category-card img {
  width: 100%;
  height: auto;
  display: block;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card h3 {
  margin: 10px 0;
  font-size: 16px;
}

</style>