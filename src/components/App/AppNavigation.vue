<template>
  <div class="navigation">
    <ul>
      <li><router-link :to="{name: 'home'}" exact>Home</router-link></li>
      <li><router-link :to="{name: 'products'}" exact>Products</router-link></li>
      <li><router-link to="/gallery" exact>Gallery</router-link></li>
      <li><router-link to="/contact" exact>Contact</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AppNaviagation'
}
</script>
<style>
.navigation {
  float: right;
}

.navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;

}

.navigation ul:after {
  content: '';
  display: block;
  clear: both;
}

.navigation li {
  float: left;
  width: 110px;
}
.navigation a {
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  font-family: 'Lato';
  font-size: 22px;
  font-weight: bold;
  line-height: 60px;
}

.navigation a.router-link-active {
  background-color: lightskyblue;
  color: darkslateblue;
}
.navigation a:hover {
  background-color: lightskyblue;
  color: darkslateblue;
}
</style>
