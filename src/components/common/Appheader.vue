<template>
	<header id="header">
		 <h1 class="logo">
      <router-link to="/">
        TIL
      </router-link>
    </h1>
		<ul class="navigations">
			<li><router-link to="/signup">회원가입</router-link></li>
			<li><router-link to="/login">로그인</router-link></li>
		</ul>
	</header>
</template>

<script>
export default {}
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
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo a {display:block;}
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
</style>