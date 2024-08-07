<template>
  <div class="card">
     <img :src="require(`@/assets/${product.productImgPath.split('/').pop()}`)" class="card-img-top" :alt="product.productName">
    <div class="card-body">
      <h5 class="card-title">{{ product?.productName }}</h5>
      <h6 class="price">Price: {{ product?.price }}</h6>
      <button class="btn btn-primary" @click="onRemove">Remove</button>
      <router-link :to="`/updateProductDetails/${product?.id}`" class="btn btn-primary">Update</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProductCard',
  props: {
    product: {
      type: Object,
      required: false
    }
  },
  methods: {
    onRemove() {
      this.$emit('removeProduct', this.product);
    }
  }
}
</script>

<style scoped>
img {
  min-height: 150px;
}

.card {
  width: 16rem;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin: 10px;
}

.card:hover {
  transform: scale(1) rotateY(3deg);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://i.pinimg.com/originals/92/94/1d/92941d986586249ee79a24065f68c910.jpg");
}

.card-img-top {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 900;
  color: #0a0a0a;
}

.price {
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
}
</style>
