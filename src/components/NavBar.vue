<template>
  <mdb-navbar expand="large" dark color="blue" position="top">
    <mdb-navbar-brand>
      <router-link :to="{path: '/'}">
        <img src="@/assets/brand.png" class="zoom overlay" height="40px"/>
      </router-link>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <router-link :to="{path: '/'}"><mdb-nav-item href="#" active>Home</mdb-nav-item></router-link>
        <router-link :to="{name: 'PlayUrl'}"><mdb-nav-item>Play with url</mdb-nav-item></router-link>
        <router-link :to="{name: 'ParseM3u'}"><mdb-nav-item>Parse</mdb-nav-item></router-link>
        <router-link :to="{name: 'Favourites'}" v-if="isAuthenticated"><mdb-nav-item>Favourites</mdb-nav-item></router-link>
        <router-link :to="{name: 'Mychannels'}" v-if="isAuthenticated"><mdb-nav-item>My channels</mdb-nav-item></router-link>
      </mdb-navbar-nav>
      <mdb-navbar-nav right v-if="!isAuthenticated">
        <router-link :to="{name: 'signup'}"><mdb-nav-item href="#">Sign up</mdb-nav-item></router-link>
        <router-link :to="{name: 'signin'}"><mdb-nav-item>Sign in</mdb-nav-item></router-link>
      </mdb-navbar-nav>
      <mdb-navbar-nav right v-else>
       <i class="fas fa-user" style="font-size: 2em;"></i> <mdb-nav-item href="#"> {{user}} </mdb-nav-item>
        <mdb-nav-item @click="signOut">Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<style scoped>
  img {
    cursor: pointer;
  }
</style>

<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  import { mapGetters } from 'vuex';
  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters({
        user: 'getUser',
        isAuthenticated: 'isAuthenticated'
      })
    },
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    },
    methods: {
      signOut() {
        this.$store.commit('LOGOUT');
        if (this.$router.currentRoute.path !== '/') {this.$router.push("/")}
      }
    }
  }
</script>