import { createRouter, createWebHistory } from "vue-router";
// import ContactComponent from "./components/layout/footer/ContactComponent.vue";
import FaqComponent from "./components/layout/footer/FaqComponent.vue";
import AboutusComponent from "./components/layout/footer/AboutusComponent.vue";
import FeaturesComponent from "./components/layout/footer/FeaturesComponent.vue";
import RegisterComponent from "./components/registration/RegisterComponent.vue";
import LoginComponent from "./components/registration/LoginComponent.vue";
import CategoryComponent from "./components/landing-page/CategoryComponent.vue";
import ProductComponent from "./components/Products/ProductComponent.vue";
import ProductDetails from "./components/Products/ProductDetails.vue";
import AdminDashboardComponent from "./components/admin/AdminDashboardComponent.vue";
import UserListings from "./components/Products/my-listings/user-listings/UserListings.vue"
import NewProduct from "./components/Products/NewProduct.vue"
import UpdateProduct from "./components/Products/my-listings/UpdateProduct.vue"

const routes = [
  {
    path: "/aboutus",
    component: AboutusComponent,
    name: "aboutUs",
  },
  {
    path: "/faq",
    component: FaqComponent,
    name: "faq",
  },
  {
    path: "/features",
    component: FeaturesComponent,
    name: "features",
  },
  // {
  //   path: "/contact",
  //   component: ContactComponent,
  //   name: "contact",
  // },
  {
    path: "/register",
    component: RegisterComponent,
    name: "register",
  },
  {
    path: "/login",
    component: LoginComponent,
    name: "login",
  },
  {
    path: "/category",
    component: CategoryComponent,
    name: "category",
  },
  {
    path: "",
    component: CategoryComponent,
    name: "category",
  },
  {
    path: "/product",
    component: ProductComponent,
    name: "product",
  },
  {
    path: "/productDetails",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/admin",
    name: "Admin",
    component:AdminDashboardComponent
  },
  { 
    path: '/userListings', 
    component: UserListings 
  },
  {
    path: '/addProduct',
    component: NewProduct
  },
  {
    path: '/updateProductDetails/:id',
    component: UpdateProduct,
  },


  // {
  //   path: '/addProduct',
  //   component: NewProduct,
  //   name: 'mylist'
  // }
  //   {
  //     path: '/products',
  //     component: ProductsContainer,
  //     name: 'products'
  //   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
