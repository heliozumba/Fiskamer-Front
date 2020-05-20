<template>
  <div>
    <b-row>
      <div class="plan-category-box col-md-3 p-0" v-for="category in categories" :key="category.id">
        <b-card
          overlay
          :title="category.name"
          :img-src="require('../assets/imgs/'+category.img)"
          img-alt="category"
          class="text-center rounded my-5 mx-0 d-inline-block"
          text-variant="white"
          id
        ></b-card>
      </div>
    </b-row>

    <b-row class="mt-5">
      <h3 class="text-center">As nossas sugestões</h3>
      <hr />
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

<style>
</style>