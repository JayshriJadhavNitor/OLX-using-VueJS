import axios from 'axios';

// Base URL for the API
const apiUrl = 'http://localhost:8080/product';

// Create a class for the ProductService
class ProductService {
  // Get all products
  getProducts() {
    return axios.get(apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching products:', error);
        throw error;
      });
  }

  // Get product by ID
  getProductById(id) {
    return axios
      .get(`${apiUrl}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
      });
  }

  // Search products
  searchProducts(query) {
    return axios
      .get(`${apiUrl}?q=${query}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error searching products:", error);
        throw error;
      });
  }

  // Create a new product
  async createProduct(categoryName, userId, productDTO, file) {
    const formData = new FormData();
    
    // Append the productDTO properties
    formData.append('productName', productDTO.productName);
    formData.append('description', productDTO.description);
    formData.append('price', productDTO.price.toString());
    formData.append('addedDate', productDTO.addedDate);
  
    // Append the categoryName and file
    formData.append('categoryName', categoryName);
    formData.append('image', file, file.name);
  
    try {
      const response = await axios.post(`${apiUrl}/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }

  // Update an existing product
  updateProduct(productId, productDTO, file) {
    // Create a FormData object
    const formData = new FormData();
    
    // Append product details to the FormData object
    formData.append('productName', productDTO.productName);
    formData.append('description', productDTO.description);
    formData.append('price', productDTO.price);
    formData.append('addedDate', productDTO.addedDate);
    
    // Append file if it exists
    if (file) {
      formData.append('file', file);
    }
  
    // Send PUT request using fetch API
    return fetch(`${apiUrl}/${productId}`, {
      method: 'PUT',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .catch(error => {
      console.error('Error updating product:', error);
      throw error;
    });
  }

  // Delete a product
  deleteProduct(id) {
    return axios
      .delete(`${apiUrl}/${id}`)
      .then(() => {})
      .catch(error => {
        console.error(`Error deleting product with ID ${id}:`, error);
        throw error;
      });
  }

  // Get seller count
  getSellerCount() {
    return axios
      .get(`${apiUrl}/getSellerCount`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching seller count:', error);
        throw error;
      });
  }
}

// Export an instance of ProductService
export default new ProductService();
