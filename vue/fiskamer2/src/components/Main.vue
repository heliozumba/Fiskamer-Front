<template>
  <div>
    <navbar></navbar>
    <div class="main-navigator">
      <transition name="fade">
        <router-view name="navigator" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-navigator {
}
</style>