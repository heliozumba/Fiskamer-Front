<template>
  <div class="altern-body">
    <div class="background-test"></div>
    <div class="container-fluid credentials-container">
      <div class="row">
        <div class="credentials-box col-sm-4 col-xs-12 rounded">
          <transition name="fade">
            <router-view name="helper" />
          </transition>
        </div>
        <div class="about-box col-sm-6 rounded d-none d-sm-block">
          <div class="background-box rounded"></div>
          <div class="box-overlay rounded">
            <div class="box-text">
              <div class="box-main-text">
                <img class="img-fluid w-50 rounded" src="./../assets/imgs/logo2.png" alt />
              </div>
              <div class="next-text">
                <h1 class="display-4">Encontre tudo que precisa</h1>
                <p
                  class="text-justify"
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus magnam, quaerat placeat nobis dolor molestiae delectus qui omnis esse debitis, itaque eveniet distinctio veniam quo iste deserunt adipisci ullam aliquid?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeMount() {
    if (Boolean(this.$store.state.user)) {
      this.$store.state.user.role.perfilCode == 1
        ? this.$router.push("/main/supply/state")
        : this.$router.push("/main/explorer");
    }
  }
};
</script>
<style scoped>
.row {
  padding-top: 8%;
}
.credentials-container {
  height: 100vh;
  z-index: -1;
}
.background-test {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-position: 20%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background: url("./../assets/imgs/credentials.png");
  filter: brightness(30%);
}
.row {
  margin-left: 15%;
}
.credentials-box,
.about-box {
  padding: 0;
  box-shadow: 3px 3px 6px;
}
.credentials-box,
.about-box {
  height: 70vh;
}
.credentials-box {
  background-color: white;
  overflow-y: scroll;
}
.background-box,
.box-overlay {
  height: inherit;
}
.background-box {
  background: url("./../assets/imgs/credentials_overlay.jpg");
  z-index: 0;
  position: absolute;
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.box-overlay {
  background: linear-gradient(rgba(246, 218, 17, 0.5), rgba(123, 109, 9, 0.5));
  z-index: 0;
  position: relative;
}

.box-text {
  color: white;
}
.box-main-text {
  padding-top: 5%;
  padding-left: 10%;
  margin-left: 20%;
  font-weight: bolder;
}

.next-text {
  margin-top: 15%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 1.2vw;
}

.logo {
  width: 60%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 576px) {
  .credentials-box {
    margin-left: -10%;
    margin-right: 10%;
    margin-top: 20%;
  }
}
</style>