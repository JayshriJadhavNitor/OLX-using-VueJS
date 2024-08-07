<template>
  <div class="container">
    <h2>Add New Listing</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="productName">Product Name</label>
        <input type="text" v-model="form.productName" id="productName" class="form-control" />
        <div v-if="!form.productName && (touched.productName || dirty.productName)" class="text-danger">
          Product name is required.
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="form.description" id="description" class="form-control"></textarea>
        <div v-if="!form.description && (touched.description || dirty.description)" class="text-danger">
          Description is required.
        </div>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" v-model.number="form.price" id="price" class="form-control" />
        <div v-if="form.price <= 0 && (touched.price || dirty.price)" class="text-danger">
          Price is required and must be a positive number.
        </div>
      </div>
      <div class="form-group">
        <label for="addedDate">Added Date</label>
        <input type="date" v-model="form.addedDate" id="addedDate" class="form-control" />
      </div>
      <div class="form-group">
        <label for="categoryName">Category</label>
        <select v-model="form.categoryName" id="categoryName" class="form-control">
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <div v-if="!form.categoryName && (touched.categoryName || dirty.categoryName)" class="text-danger">
          Category is required.
        </div>
      </div>
      <div class="form-group">
        <label for="image">Product Image</label>
        <input type="file" @change="onFileSelected" id="image" class="form-control-file" />
        <div v-if="!form.image && (touched.image || dirty.image)" class="text-danger">
          Image is required.
        </div>
      </div>
      <button type="submit" class="btn btn-primary" :disabled="isFormInvalid">Add Product</button>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import CategoryService from '../../services/categoryService';
import ProductService from '../../services/productService';

export default {
  name: 'NewProduct',
  setup() {
    const router = useRouter();
    const toast = useToast();

    const form = reactive({
      productName: '',
      description: '',
      price: 0,
      addedDate: new Date().toISOString().split('T')[0],
      categoryName: '',
      image: null,
    });

    const touched = reactive({
      productName: false,
      description: false,
      price: false,
      categoryName: false,
      image: false,
    });

    const dirty = reactive({
      productName: false,
      description: false,
      price: false,
      categoryName: false,
      image: false,
    });

    const categories = ref([]);

    const isFormInvalid = computed(() => {
      return !form.productName || !form.description || form.price <= 0 || !form.categoryName || !form.image;
    });

    const onSubmit = async () => {
      const userId = JSON.parse(sessionStorage.getItem('user')).id;

      try {
        await ProductService.createProduct(
          form.categoryName,
          userId,
          form,
          form.image
        );
        toast.success('Product added successfully');
        router.push('/categories');
      } catch (error) {
        console.error('Error adding product:', error);
        toast.error('Error adding product');
      }
    };

    const onFileSelected = (event) => {
      form.image = event.target.files[0];
    };

    const fetchCategories = async () => {
      try {
        const response = await CategoryService.getCategories();
        categories.value = response.map(category => category.name);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();

    return {
      form,
      touched,
      dirty,
      categories,
      isFormInvalid,
      onSubmit,
      onFileSelected,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 10px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
  font-family: 'Times New Roman', Times, serif;
}

.container:hover {
  background: #f0f0f0;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  transition: color 0.3s ease;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
  transition: color 0.3s ease;
}

.form-control,
.form-control-file {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus,
.form-control-file:focus {
  border-color: #0e0e0e;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.btn-primary {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #070707;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background-color: #0a0a0a;
  transform: scale(1.05);
}

.btn-primary:focus {
  outline: none;
}

.form-control-file {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
}

.form-control-file:hover {
  border-color: #007bff;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .btn-primary {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
