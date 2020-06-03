<template>
  <div id="app">
    <notifications position="top-left" group="auth" />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#explorer-carousel .view {
  height: 80vh;
}

#explorer-carousel .view img {
  object-fit: cover !important;
  filter: blur(1px) brightness(40%);
}
</style>
