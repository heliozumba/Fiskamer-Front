<template>
  <div>
    <navbar></navbar>
    <div class="navigator-main container-fluid p-0">
      <transition name="fade">
        <router-view name="navigator" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    getUser(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.main-navigator {
}
</style>