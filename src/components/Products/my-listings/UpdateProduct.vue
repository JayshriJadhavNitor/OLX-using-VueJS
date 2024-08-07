<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="heading">
        <h2>Update Product</h2>
      </div>
      <div>
        <label for="productName">Product Name:</label>
        <input id="productName" v-model="productName" type="text" required />
      </div>

      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>

      <div>
        <label for="price">Price:</label>
        <input id="price" type="number" v-model.number="price" required min="0" />
      </div>

      <div>
        <label for="addedDate">Added Date:</label>
        <input id="addedDate" type="date" v-model="addedDate" required />
      </div>

      <div>
        <label for="file">Upload File:</label>
        <input id="file" type="file" @change="onFileChange" />
      </div>

      <button type="submit" :disabled="isFormInvalid">Update Product</button>
    </form>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProductService from '../../../services/productService'; // Adjust the path as necessary

export default {
  name: 'UpdateProduct',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const productId = route.params.id;
    const productName = ref('');
    const description = ref('');
    const price = ref(0);
    const addedDate = ref('');
    const selectedFile = ref(null);

    const isFormInvalid = computed(() => {
      return !productName.value || !description.value || !price.value || !addedDate.value || !selectedFile.value;
    });

    const loadProductData = async () => {
      try {
        const product = await ProductService.getProductById(productId);
        productName.value = product.productName;
        description.value = product.description;
        price.value = product.price;
        addedDate.value = product.addedDate;
        // Handle image separately if needed
      } catch (error) {
        alert('Error loading product data: ' + error.message);
      }
    };

    const onFileChange = (event) => {
      selectedFile.value = event.target.files[0];
    };

    const onSubmit = async () => {
      if (isFormInvalid.value) return;

      try {
        const productDTO = {
          productName: productName.value,
          description: description.value,
          price: price.value,
          addedDate: addedDate.value,
        };
        await ProductService.updateProduct(productId, productDTO, selectedFile.value);
        router.push('/userListings');
      } catch (error) {
        alert('Error updating product: ' + error.message);
      }
    };

    onMounted(() => {
      loadProductData();
    });

    return {
      productName,
      description,
      price,
      addedDate,
      selectedFile,
      onFileChange,
      onSubmit,
      isFormInvalid,
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  max-width: 900px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', Times, serif;
}

.heading {
  display: flex;
  justify-content: center;
  font-weight: 800;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="number"],
input[type="date"],
input[type="file"],
textarea {
  min-width: 450px;
  padding: 2px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
}

input[type="file"] {
  border: solid black 1px;
  padding: 0;
  margin-top: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #070707;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: solid black 1px;
}

button:hover {
  background-color: white;
  color: black;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  input[type="text"],
  input[type="number"],
  input[type="date"],
  textarea {
    font-size: 16px;
  }

  button {
    padding: 8px 8px;
    font-size: 18px;
  }
}
</style>
