<template>
  <div id="app">
    <header class='header'>
      <app-title />
      <app-navigation />
    </header>
    <section>
      <router-view />
    </section>
  </div>
</template>
<script>
import AppTitle from '@/components/App/AppTitle'
import AppNavigation from '@/components/App/AppNavigation'

export default {
  name: 'App',

  components: {
    AppTitle,
    AppNavigation
  },
  metaInfo: {
    title: 'Kaviaren',
    titleTemplate: 'Kaviaren - %s'
  }
}

</script>

<style>
@font-face {
  font-family: 'Lato';
  src: url('./assets/fonts/Lato-Regular.ttf');
}

body{
  margin: 0;
}

.header {
  background-color: darkslateblue;
  padding: 0 10px;
}
.header:after{
  content: '';
  display: block;
  clear: both;
}
</style>
