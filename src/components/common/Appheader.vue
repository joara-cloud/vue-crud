<template>
	<header id="header">
		 <h1 class="logo">
      <router-link to="/">
        TIL
        <span v-if="isUserLogin">by {{this.$store.state.username}}</span>
      </router-link>
    </h1>
		<ul class="navigations">
      <template v-if="isUserLogin">
        <li><span class="username">{{this.$store.state.username}}</span></li>
        <li><a href="" @click.prevent="logoutUser">로그아웃</a></li>
      </template>
      <template v-else>
        <li><router-link to="/login">로그인</router-link></li>
        <li><router-link to="/signup">회원가입</router-link></li>
      </template>
		</ul>
	</header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
.logo {

}
.logo a {display:block;  font-size: 30px;
  font-weight: 900;
  color: white;}
.logo span {font-size:16px;font-weight:500}
.navigations li {display:inline-block;}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
.username {color:#fff}
</style>