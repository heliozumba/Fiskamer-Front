<template>
  <div class="altern-body">
    <div class="background-test"></div>
    <div class="container-fluid credentials-container">
      <div class="row">
        <div class="credentials-box col-sm-3 rounded">
          <transition name="fade">
            <router-view name="helper" />
          </transition>
        </div>
        <div class="about-box col-sm-7 rounded">
          <div class="background-box rounded"></div>
          <div class="box-overlay rounded">
            <div class="box-text">
              <div class="box-main-text">
                <img class="img-fluid w-50 rounded" src="./../assets/imgs/logo2.png" alt />
              </div>
              <!--div
              class="next-text"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus magnam, quaerat placeat nobis dolor molestiae delectus qui omnis esse debitis, itaque eveniet distinctio veniam quo iste deserunt adipisci ullam aliquid?</div-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: url("./../assets/imgs/pattern.jpg");
  filter: blur(1px);
  opacity: 0.5;
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
}
.background-box,
.box-overlay {
  height: inherit;
}
.background-box {
  background: url("./../assets/imgs/casal.jpg");
  z-index: 0;
  position: absolute;
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.box-overlay {
  background-color: #000000de;
  z-index: 0;
  position: relative;
}

.box-text {
  padding-top: 30%;
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
</style>