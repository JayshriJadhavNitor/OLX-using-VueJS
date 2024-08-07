<template>
  <main class="container-fluid">
    <section class="row">
      <div class="col-md-6 col-lg-4">
        <!-- card -->
        <article
          class="p-4 rounded shadow-sm border-left mb-4 d-flex justify-content-center align-items-center"
        >
          <a class="d-flex flex-column align-items-center">
           <font-awesome-icon :icon="cart" class="icon-size" />
            <h5 class="mt-2">Products {{ productCount }}</h5>
          </a>
        </article>
      </div>
      <div class="col-md-6 col-lg-4">
        <article
          class="p-4 rounded shadow-sm border-left mb-4 d-flex justify-content-center align-items-center"
        >
          <a class="d-flex flex-column align-items-center">
            <font-awesome-icon :icon="buyer" class="icon-size" />
            <h5 class="mt-2">Buyer {{ buyerCount }}</h5>
          </a>
        </article>
      </div>
      <div class="col-md-6 col-lg-4">
        <article
          class="p-4 rounded shadow-sm border-left mb-4 d-flex justify-content-center align-items-center"
        >
          <a class="d-flex flex-column align-items-center">
             <font-awesome-icon :icon="handShake"  class="icon-size"/>
            <h5 class="mt-2">Sellers {{ sellerCount }}</h5>
          </a>
        </article>
      </div>
    </section>

    <div
      class="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4"
    >
      <div class="container">
        <h1 class="display-4 mb-2 text-dark">Recent Users</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of recentUser" :key="item.id">
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import productService from "@/services/productService";
import userService from "@/services/userService";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"; 
export default {
  data() {
    return {
      recentUser: null,
        userService: null,
        productService:null,
        handShake: faHandshake,
        cart: faCartPlus,
        buyer: faHandHoldingDollar,
        sellerCount: 0,
        buyerCount: 0,
        productCount:0
    };
  },

  mounted() {
      this.userService = userService;
      this.productService = productService;
      this.getRecentUser();
      this.getCount();
  },
  methods: {
    getRecentUser() {
      this.userService.getRecentUser().then((result) => {
        this.recentUser = result.data;
      });
      },

      getCount() {
          this.userService.getBuyerCount().then(result => {
              this.buyerCount = result.data
          })
        this.productService.getSellerCount().then(result => {
            this.sellerCount=result.data
        })

          this.productService.getProducts().then(result => {
            this.productCount=result.data.length
          });
      },
  },
};
</script>

<style scoped>
.icon-size {
  color: black;
  font-size: 2rem; 
}

.icon-with-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-with-text .fa {
  font-size: 3rem;
  color: #007bff;  
}

.icon-with-text .text {
  margin-top: 0.5rem;
  font-size: 1rem;   
  color: #6c757d;    
}

article .d-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

article h5 {
  color: black;
  margin-top: 0.5rem;
}
a{
  text-decoration: none;
}

a:hover{
  text-decoration: underline;
  cursor: pointer;
}

.container h1, .container p{
color: black;
}

</style>
