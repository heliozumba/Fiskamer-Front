<template>
  <div class="div-main">
    <b-row>
      <!--b-col md="2"></b-col-->
      <b-col md="10" offset="1" class="mt-5">
        <h1 class="text-center">Planejamento de Eventos</h1>
        <hr />
        <div>
          <router-link to="/main/plan/suggestions">Sugestões</router-link>
          <router-link to="/main/plan/my">O meu planejamento</router-link>
        </div>
        <router-view name="helper2"></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Salões",
          img: "salao.jpg"
        },
        {
          id: 2,
          name: "DJs",
          img: "dj-1.jpg"
        },
        {
          id: 3,
          name: "Noivos",
          img: "casal.jpg"
        },
        {
          id: 4,
          name: "Decoração",
          img: "salao.jpg"
        },
        {
          id: 5,
          name: "Consultoria",
          img: "credentials.png"
        },
        {
          id: 6,
          name: "Tecnologia",
          img: "71462.jpg"
        },
        {
          id: 7,
          name: "Salões",
          img: "salao.jpg"
        },
        {
          id: 8,
          name: "DJs",
          img: "dj-1.jpg"
        },
        {
          id: 9,
          name: "Noivos",
          img: "casal.jpg"
        },
        {
          id: 10,
          name: "Decoração",
          img: "salao.jpg"
        },
        {
          id: 11,
          name: "Consultoria",
          img: "credentials.png"
        },
        {
          id: 12,
          name: "Tecnologia",
          img: "71462.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" >
.div-main {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}

.card,
.card-img-overlay {
  height: 20vh;
  border: none;
}

.card-title {
  margin-top: 20%;
}

.plan-category-box {
  height: 20vh;
}

.plan-category-box img {
  filter: brightness(60%);
  height: -webkit-fill-available;
  object-fit: cover;
}
</style>