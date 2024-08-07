<template>
  <div class="container mt-3">
    <!-- Dropdown menu for adding new listing -->
    <div class="dropdown mt-3">
      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
        My Listings
      </button>
      <div class="dropdown-menu">
        <router-link to="/userListings" class="dropdown-item">My Listings</router-link>
        <router-link to="/addProduct" class="dropdown-item">Add Listing</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyListings'
}
</script>

<style scoped>
.dropdown-toggle {
  background: #f4f1f1;
  color: black;
  border: solid white 1px;
  font-family: 'Times New Roman', Times, serif;
}

.dropdown-item {
  font-family: 'Times New Roman', Times, serif;
}

.dropdown-menu {
  max-width: 5px;
}
</style>
