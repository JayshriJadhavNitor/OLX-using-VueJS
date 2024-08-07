<template>
  <!-- Registration 5 - Bootstrap Brain Component -->
  <section class="p-3 p-md-4 p-xl-5">
    <div class="container">
      <div class="card border-light-subtle shadow-sm">
        <div class="row g-0">
          <div class="col-12 col-md-6 text-bg-light">
            <div class="d-flex align-items-center justify-content-center h-100">
              <div class="col-10 col-xl-8 py-3">
                <img
                  class="img-fluid rounded mb-4"
                  loading="lazy"
                  src="../../assets/logo.png"
                  width="245"
                  height="80"
                  alt="OLX Logo"
                />
                <hr class="border-primary-subtle mb-4" />
                <h2 class="h1 mb-4">
                  After all, on OLX, your next great deal is just a click away.
                </h2>
                <p class="lead mb-5">Explore, sell, and discover with ease.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <div class="row">
                <div class="col-12">
                  <div class="mb-5">
                    <h2 class="h3"><strong>Registration</strong></h2>
                    <h3 class="fs-6 fw-normal text-secondary m-0">
                      Enter your details to register
                    </h3>
                  </div>
                </div>
              </div>
              <form action="#!" method="post" @submit.prevent="register()">
                <div class="row gy-3 gy-md-4 overflow-hidden">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        v-model="firstName"
                        required
                      />
                      <label for="firstName" class="form-label"
                        >First Name <span class="text-danger">*</span></label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        required
                        v-model="lastName"
                      />
                      <label for="lastName" class="form-label"
                        >Last Name <span class="text-danger">*</span></label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="address"
                        class="form-control"
                        name="address"
                        id="address"
                        placeholder="Address"
                        required
                        v-model="address"
                      />
                      <label for="address" class="form-label"
                        >Address<span class="text-danger">*</span></label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                        v-model="email"
                      />
                      <label for="email" class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        value=""
                        placeholder="password"
                        required
                        v-model="password"
                      />
                      <label for="password" class="form-label"
                        >Password <span class="text-danger">*</span></label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn btn-lg" type="submit">
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-12">
                  <hr class="mt-5 mb-4 border-secondary-subtle" />
                  <p class="m-0 text-secondary text-center">
                    Already have an account?
                    <router-link
                      to="/login"
                      class="text-decoration-none text-dark fw-bold"
                      >Sign In</router-link>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from '../../routes';
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      address: "",
      firstName: "",
      lastName: "",
    };
  },
  methods: {
      register() {
          const registerRequest = {
              firstName: this.firstName,
              lastName: this.lastName,
              address: this.address,
              email: this.email,
            password:this.password
          }

          axios.post("http://localhost:8080/user/signup", registerRequest).then(res => {
            console.log("Registration done successfully");
            if(res) router.push("/login");
          }).catch(err => {
            console.log(err);
          })
    },
  },
};
</script>
