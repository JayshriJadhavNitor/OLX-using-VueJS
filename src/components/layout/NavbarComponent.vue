
<script>
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { mapGetters } from 'vuex';
import isLoggedIn from '@/store/modules/auth/getters'
// import { mapState } from 'vuex';
// import { useRouter } from 'vue-router';
// import { useSearchService } from '../../services/searchService'; 
// import { useSessionService } from '../../services/sessionService'; 

export default {
  name: 'NavbarComponent',

  data() {
    return {
      user: faUser,
      loggedInUser: null
    }
  },
 
  mounted() {
    this.loggedInUser = sessionStorage.getItem('jwt');
},
   computed: {
        ...mapGetters('auth', {
            isAuthenticated: isLoggedIn
        }),
  },
  methods: {
      logout() {
      sessionStorage.clear();
      }
    }
  // setup() {
  //   const icon = faUser;
  //   const searchText = ref('');
  //   const loggedIn = ref(false);
  //   const isUser = ref(false);
    // const router = useRouter();
    
    // Accessing the services
    // const searchService = useSearchService();
    // const sessionService = useSessionService();

    // const updateSearch = () => {
    //   searchService.setSearchText(searchText.value);
    // };

    // const checkUserRole = () => {
    //   sessionService.userRole$.subscribe((userRole) => {
    //     if (userRole === 'USER') {
    //       isUser.value = true;
    //       loggedIn.value = true;
    //     }
    //   });
    // };

    // const logOut = () => {
    //   sessionService.removeSessionItems();
    //   isUser.value = false;
    //   loggedIn.value = false;
    // };

    // onMounted(() => {
    //   checkUserRole();
    // });

    // onBeforeUnmount(() => {
      
    // });

    // return {
    //   icon,
    //   searchText,
    //   loggedIn,
    //   isUser,
    //   updateSearch,
    //   logOut
    // };
  // }
};
</script>
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <router-link class="navbar-brand" to="/"><img src="../../assets/logo.png" class="logo" alt="OLX logo"></router-link>
    <form class="d-flex mx-auto" style="margin-left: 35% !important;" role="search">
      <input class="form-control me-2 search_input"  type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-dark search_button" type="submit">Search</button>
    </form>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login" v-if="!loggedInUser">SignIn</a>
        </li>
        <li class="nav-item dropdown" v-if="loggedInUser">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <font-awesome-icon :icon="user" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><router-link class="dropdown-item" to="/userListings">My Listing</router-link></li>
            <li><router-link class="dropdown-item" to="/addProduct">Add Listing</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout()" href="/login">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>



<style >
/* Basic styles for the navbar */


  .search{
  margin-bottom: auto;
  margin-top: auto;
  height: 70px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 40px;
  padding: 10px;
  }

  .search_input{
  color: rgb(10, 10, 10);
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  margin-top:5px;
  caret-color:transparent;
  line-height: 40px;
  transition: width 0.4s linear;
  }

  .search .search_input{
  padding: 0 10px;
  width: 550px;
  caret-color:red;
  transition: width 0.4s linear;
  }
  
  .search:hover > .search_icon{
  background: red;
  color: #fff;
  }

  .search_icon{
  height: 50px;
  width: 50px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color:white;
  background-color:black;
  }
  
a:link{
  text-decoration:none;
}    

.navbar {
  padding: 1rem;
  background-color: #25292d;
  max-height: 105px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.navbar-brand h1 {
  font-size: 50px;
  font-weight: 600;
  background-image: radial-gradient(circle, #4302f4, #ee992b);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin: 0;
  padding: 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.navbar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar-brand img[src$="logo.png"] {
  width: 65px;
  height: auto;
  margin-right: 10px;
}

.navbar-menu li {
  margin: 0 1rem;
}

.navbar-menu a {
  color: rgb(13, 13, 13);
  text-decoration: none;
}

.navbar-menu a.active {
  text-decoration: underline;
}

.navbar-search {
  display: flex;
  align-items: center;

}

.navbar-search input {
  padding: 0.5rem;
  border: solid black 2px;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.navbar-search button {
  padding: 0.5rem 1rem;
  border: black;
  border-radius: 4px;
  background-color: #2a7df1;
  color: rgb(14, 13, 13);
  cursor: pointer;
}

.navbar-search button:hover {
  background-color: #2d2def;
}

.search_button{
  border: 0;
  outline: 0;
  background: none;
  margin-top:5px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-menu {
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .navbar-menu li {
    margin: 0.5rem 0;
  }

  .navbar-search {
    width: 100%;
    margin-top: 1rem;
  }

  .navbar-search input {
    width: 80%;
    margin-right: 0;
  }

  .navbar-search button {
    width: 100%;
  }
}




/* search button */
.form-inline {
  display: flex;
  justify-content: flex-end;
  /* Align items to the right */
  align-items: center;
  /* Center vertically */
}

.form-control {
  align-items: center;
  width: 500px;
}

/* Optional: Adjust margin or padding as needed */
.form-inline .btn {
  margin-left: 10px;
  position: absolute;
  right: 0;
  /* Add some space between input and button */
}

/* .profile-container {
  /* margin-left: auto;
  margin-left: 0; */
  /* margin: auto; */
  /* Pushes the profile container to the right */
/* } */


/* .profile-img :hover {
  background-color: green;
  color: #fff;
} */
.profile-img {
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

.profile-img:hover {
  color: #f0f0f0;
}


.navbar-brand img {
  /* width: 65px; */
  /* Adjust width as needed */
  /* height: auto; */
  /* Maintain aspect ratio */
  margin-right: auto;
  /* Optional: Add some margin if needed */
}
.twobuttons{
  display: flex;
  justify-content: space-around;
}

.d-flex{
  margin: auto;
}

.my-listings{
  margin: 10px;
}

.logo {
    width: 78px;
}
</style>