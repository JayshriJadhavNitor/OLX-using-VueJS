// src/services/categoryService.js
import axios from 'axios';

// Base URL for the API
const apiUrl = 'http://localhost:8080/category';

// Create a class for the CategoryService
class CategoryService {
  // Get all categories
  getCategories() {
    return axios.get(apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching categories:', error);
        throw error;
      });
  }

  // Get category by ID
  getCategoryById(id) {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error fetching category with ID ${id}:`, error);
        throw error;
      });
  }

  // Search categories
  searchCategories(query) {
    return axios.get(`${apiUrl}?q=${query}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error searching categories:', error);
        throw error;
      });
  }

  // Create a new category
  createCategory(category) {
    return axios.post(apiUrl, category)
      .then(response => response.data)
      .catch(error => {
        console.error('Error creating category:', error);
        throw error;
      });
  }

  // Update an existing category
  updateCategory(category) {
    return axios.put(`${apiUrl}/${category.id}`, category)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error updating category with ID ${category.id}:`, error);
        throw error;
      });
  }

  // Delete a category
  deleteCategory(id) {
    return axios.delete(`${apiUrl}/${id}`)
      .then(() => {})
      .catch(error => {
        console.error(`Error deleting category with ID ${id}:`, error);
        throw error;
      });
  }
}

// Export an instance of CategoryService
export default new CategoryService();
