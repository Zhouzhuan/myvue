<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
  @font-face {
  font-family: 'icomoon';
  src:  url('./assets/fonts/icomoon.eot?orzw9m');
  src:  url('./assets/fonts/icomoon.eot?orzw9m#iefix') format('embedded-opentype'),
    url('./assets/fonts/icomoon.ttf?orzw9m') format('truetype'),
    url('./assets/fonts/icomoon.woff?orzw9m') format('woff'),
    url('./assets/fonts/icomoon.svg?orzw9m#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="myicon-"], [class*=" myicon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

 .myicon-menu:before {
    content: "\e9bd";
  }
  .myicon-user:before {
    content: "\e975";
    font-size: 20px;
    line-height: 40px;
  }
  .myicon-key:before {
    content: "\e98d";
    font-size: 20px;
    line-height: 40px;
  }

</style>
