<template>
  <div class="container mt-3">
    <div class="heading">
      <h2><strong>MY LISTINGS</strong></h2>
    </div>
    <div class="div1">
      <UserProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @removeProduct="onRemoveProduct"
      />
    </div>
    <div v-if="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import UserProductCard from './UserProductCard'; // Adjust the path as necessary
import productService from '../../../../services/productService';

export default {
  name: 'UserListings',
  components: {
    UserProductCard
  },
  data() {
    return {
      products: [],
      errorMessage: '',
    };
  },
  async created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      try {
        // Fetch products from the service
        const response = await productService.getProducts();
        // No need to access response.data directly; response is already the data
        this.products = response;
      } catch (error) {
        console.error('Error loading products:', error);
        this.errorMessage = 'Failed to load products. Please try again later.';
      }
    },
    async onRemoveProduct(product) {
      try {
        await productService.deleteProduct(product.id);
        // Remove the product from the list locally
        this.products = this.products.filter(p => p.id !== product.id);
      } catch (error) {
        console.error('Error deleting product:', error);
        this.errorMessage = 'Failed to delete the product. Please try again later.';
      }
    }
  }
};
</script>

<style scoped>
.div1 {
  margin: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  max-width: 100%;
  margin: 10px;
  box-sizing: border-box;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

.heading {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #060606;
  font-family: 'Times New Roman', Times, serif;
  color: #fefefe;
  border-radius: 8px;
}

.card-img-top {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  cursor: pointer;
  transition: 1s ease;
}

.div1 :hover {
  cursor: pointer;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition: 1s ease;
}

.alert {
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
}
</style>
