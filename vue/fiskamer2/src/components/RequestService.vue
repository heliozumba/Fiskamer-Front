<template>
  <div class="requests-container">
    <h3 class="my-4">Solicitações</h3>
    <b-table responsive :items="requests"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requests: [
        {
          solicitante: "<b-badge></b-badge>",
          serviço: "Salão Mar do Arroz",
          valor: "2 000 AOA",
          data: "14/02/2020",
          data_limite: "15/05/2020",
          estado: "Good"
        },
        {
          solicitante: "Antonio",
          serviço: "Salão Pé de Cabra",
          valor: "32 000 AOA",
          data: "14/01/2020",
          data_limite: "15/01/2020",
          estado: "Bad"
        },
        {
          solicitante: "Manuel",
          serviço: "Azul",
          valor: "42 000 AOA",
          data: "14/02/2020",
          data_limite: "15/02/2020",
          estado: "Good"
        },
        {
          solicitante: "Andre",
          serviço: "Juca e Amigos",
          valor: "2 000 AOA",
          data: "14/02/2021",
          data_limite: "21/06/2020",
          estado: "So so"
        },
        {
          solicitante: "Afonso",
          serviço: "Salão Mar do Arroz",
          valor: "28 000 AOA",
          data: "01/02/2020",
          data_limite: "22/07/2020",
          estado: "Good"
        },
        {
          solicitante: "Migueli",
          serviço: "Salão Mar do Arroz",
          valor: "52 000 AOA",
          data: "16/02/2020",
          data_limite: "03/03/2020",
          estado: "Bad"
        },
        {
          solicitante: "Sandra do Arroz",
          serviço: "Salão Mar do Arroz",
          valor: "3 000 AOA",
          data: "24/07/2020",
          data_limite: "15/05/2021",
          estado: "Good"
        },
        {
          solicitante: "Miguel",
          serviço: "Salão Mar do Arroz",
          valor: "1 000 AOA",
          data: "31/03/2020",
          data_limite: "17/02/2020",
          estado: "So so"
        }
      ]
    };
  }
};
</script>

<style>
</style>