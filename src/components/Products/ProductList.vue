<template>
  <div>
    <div style="text-align: center;">
      <h2><strong>Must See Featured Listings</strong></h2>
      <br>
    </div>
    <div class="div1">
      <div v-for="prod in filteredProducts" :key="prod.id">
        <product :product="prod"></product>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import ProductService from '../../../../services/productService'; // Adjust the import path as necessary

export default {
  components: {
    Product: () => import('../../models/product'), // Adjust the import path as necessary
  },
  props: {
    searchText: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const products = ref([]);

    const loadProducts = async () => {
      try {
        const response = await ProductService.getActiveProducts();
        products.value = response.data.map(product => ({
          ...product,
          productImgPath: `${product.productImgPath.substring(product.productImgPath.indexOf('/assets') + '/assets'.length)}`,
        }));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    const filteredProducts = computed(() => {
      if (!props.searchText) return products.value;
      return products.value.filter(product =>
        product.productName.toLowerCase().includes(props.searchText.toLowerCase())
      );
    });

    onMounted(loadProducts);

    return {
      products,
      filteredProducts,
    };
  },
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
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
}

h2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2em;
}

.card-img-top {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  cursor: pointer;
  transition: 1s ease;
}

.div1:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 1s ease;
}
</style>
