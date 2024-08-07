<template>
  <section class="bg-primary py-3 py-md-5 py-xl-8 bg-light">
    <br />
    <div class="container bg-light">
      <div class="row gy-4 align-items-center">
        <div class="col-12 col-md-6 col-xl-7">
          <div class="d-flex justify-content-center text-bg-light">

            <div class="col-12 col-xl-9">
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
        <div class="col-12 col-md-6 col-xl-5">
          <div class="card border-0 rounded-4">
            <div class="card-body p-3 p-md-4 p-xl-5">
              <div class="row">

                <div class="col-12">
                  <div class="mb-4">
                    <h3><strong>Signin</strong></h3>
                  </div>
                </div>
              </div>
              <form @submit.prevent="login()">
                <div class="row gy-3 overflow-hidden">
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="email"
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        required
                        :class="{ 'is-invalid': emailError }"
                      />
                      
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                      <div v-if="emailError" class="invalid-feedback">
                        {{ emailError }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating mb-3">
                      <input
                        v-model="password"
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        :class="{ 'is-invalid': passwordError }"
                      />
                      <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                      <div v-if="passwordError" class="invalid-feedback">
                        {{ passwordError }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn btn-lg" type="submit" :disabled="hasErrors">
                        Sign in
                      </button>
                      <!-- console.log("Login successfully") -->
                    </div>
                  </div>
                  <p>
                    Don't have an account?
                    <router-link to="/register" class="text-decoration-none text-dark fw-bold"
                      >Sign up</router-link
                    >
                  </p>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </section>
</template>

<script>
import router from '@/routes';
import authService from '@/services/authService';
// import axios from 'axios';


export default {
    data() {
        return {
        email: '',
      password: '',
      emailError: '',
      passwordError: '',
            hasErrors: false,
    loginService:null
      
        }
    },

    created() {
        this.loginService = authService;
    },

   methods: {
    login() {
      // Validate email and password
      this.hasErrors = false;
      if (!this.isValidEmail(this.email)) {
        this.emailError = 'Invalid email address';
        this.hasErrors = true;
      }
      if (this.password.length < 4) {
        this.passwordError = 'Password must be at least 8 characters';
        this.hasErrors = true;
      }

      if (this.hasErrors) return;

    //   Create login request object
      const loginRequest = {
        email: this.email,
        password: this.password
      };

    //        axios.post("http://localhost:8080/user/login",loginRequest).then(result => {
    //         console.log(result);
    //   })

      
      this.loginService.login(loginRequest)
          .then(response => {
            console.log(response);
           if (response.data.jwtToken != null) {
            sessionStorage.setItem('jwt', response.data.jwtToken);
            console.log("Login successfully");
               router.push("/category");
      }
        })
        .catch(error => {
          console.log(error);
        });
    },

    isValidEmail(email) {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
};
</script>

<style scoped>

.img-fluid {
    margin-left: 150px;
}

h2{
    font-family: 'Times New Roman', Times, serif;
}

.btn{
    border: solid black 1px;
    background-color: black;
    color: white;
}



</style>
