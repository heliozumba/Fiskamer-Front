<template>
  <!-- <div v-if="view" class="results-container">
    <service-card v-for="service in services" :key="service.id" :service="service" />
  </div>-->
  <div class="results-container">
    <service-list v-for="service in services" :key="service.id" :service="service" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          image: "106418_3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Talatona, Luanda",
          type: "Salao",
          classification: 5.6
        },
        {
          id: 2,
          image: "wedding3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Cazenga,Luanda",
          type: "Salao",
          classification: 7
        },
        {
          id: 3,
          image: "wedding2.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 10
        },
        {
          id: 4,
          image: "wedding.jpg",
          title: "Teste2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "3500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 2
        },
        {
          id: 5,
          image: "106418_3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Talatona, Luanda",
          type: "Salao",
          classification: 7
        },
        {
          id: 6,
          image: "wedding3.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Cazenga,Luanda",
          type: "Salao",
          classification: 1
        },
        {
          id: 7,
          image: "wedding2.jpg",
          title: "Teste",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "2500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 6
        },
        {
          id: 8,
          image: "wedding.jpg",
          title: "Teste2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "3500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 3
        },
        {
          id: 9,
          image: "wedding.jpg",
          title: "Teste2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan suscipit massa, id pharetra metus. Curabitur dignissim est ut pretium interdum. Duis euismod erat id nisl imperdiet ultrices. ",
          price: "3500",
          location: "Mutamba, Luanda",
          type: "Salao",
          classification: 8.5
        }
      ]
    };
  }
};
</script>

<style>
</style>