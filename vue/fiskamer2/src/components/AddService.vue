<template>
  <div>
    <b-form>
      <div class="add-service m-5 active">
        <h3 class="text-center">Registro de Serviços</h3>
        <hr />

        <!-- <b-row>
        
        <b-col md="7">-->
        <b-form-group>
          <b-row>
            <b-col md="4">
              <b-form-select v-model="selected" :options="options" id="service-category"></b-form-select>
            </b-col>
            <b-col md="8">
              <b-form-input type="text" required placeholder="Nome do Serviço" id="service-name"></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group>
          <b-form-textarea rows="3" placeholder="Descreva o serviço..."></b-form-textarea>
        </b-form-group>
        <b-form-group>
          <b-form-input type="text" required placeholder="Localização" id="service-name"></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-row>
            <b-col md="6">
              <b-form-input type="number" required placeholder="Preço" id="service-price"></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-file placeholder="Selecionar Fotografia" accept=".jpg, .png, .jpeg"></b-form-file>
            </b-col>
          </b-row>
        </b-form-group>
        <b-row>
          <b-col md="8" offset-md="2">
            <b-form-group label="Disponibilidade de Atendimento:" class="text-center mt-4">
              <b-form-checkbox-group
                v-model="checked"
                :options="checkedOptions"
                name="disponibilidade"
                buttons
              ></b-form-checkbox-group>
            </b-form-group>
          </b-col>
          <b-col md="2"></b-col>
        </b-row>

        <!--  </b-col> -->
        <!-- <b-col md="5"></b-col> -->
        <!-- <div class="buttons-footer mx-auto">
          <b-button
            variant="success"
            class="add-service-button mx-auto mt-2"
            @click="nextPhase(0,1)"
          >Continuar</b-button>
        </div>-->

        <!-- </b-row> -->
      </div>
      <div class="add-service2">
        <h3 class="text-center">Responda a estas questões para terminar</h3>

        <!--   <b-table :items="questions"> -->
        <b-table :items="items" :fields="fields" responsive="sm">
          <template v-slot:cell(respostas)="row">
            <b-form-group v-model="row.detailsShowing">
              <b-form-radio-group
                :id="'radio-answers'+
                row.index"
                v-model="radioSelected"
                :options="radioOptions"
                buttons
                name="radio-answers"
              ></b-form-radio-group>
            </b-form-group>
          </template>

          <!-- </b-table> -->
          <!-- <template v-slot:cell(respostas)="row">
            {{row.value}}
          < <b-button v-model="row.detailsShowing">Try</b-button>-->
          <!-- 
          < </template>-->
        </b-table>
        <!--  <b-button variant="secondary add-service-button" @click="nextPhase(1,0)">Voltar</b-button> -->
        <div class="buttons-footer mx-auto">
          <b-button size="lg" variant="success" class="mx-auto">FINALIZAR</b-button>
        </div>

        <hr />
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service_: {
        category: "",
        name: "",
        description: "",
        location: [],
        photo: "",
        price: "",
        availability: []
      },
      fields: ["questões", "respostas"],
      items: [
        {
          questões: "Celebração de mais de um evento diário"
        },
        { questões: "Aluguel só do espaço" },
        { questões: "Possui cozinha" },
        { questões: "Possui Piscina" },
        { questões: "Alteração de Menu" },
        { questões: "Bolo de Casamento Incluido" },
        { questões: "Fotografo" },
        { questões: "Musica" },
        { questões: "Horário Limite" },
        { questões: "Bar Aberto" },
        { questões: "Acesso para Deficientes" },
        { questões: "Método de Pagamento" }
      ],
      selected: null,
      options: [
        {
          value: null,
          text: "Selecione a Categoria"
        },
        {
          value: "Tecnologia",
          text: "Tecnologia"
        },
        {
          value: "Decoração",
          text: "Decoração"
        },
        {
          value: "Espaços",
          text: "Espaços"
        }
      ],
      checked: [],
      checkedOptions: [
        {
          text: "Segunda",
          value: 2
        },
        {
          text: "Terça",
          value: 3
        },
        {
          text: "Quarta",
          value: 4
        },
        {
          text: "Quinta",
          value: 5
        },
        {
          text: "Sexta",
          value: 6
        },
        {
          text: "Sábado",
          value: 7
        },
        {
          text: "Domingo",
          value: 1
        }
      ],
      radioOptions: [
        {
          text: "Sim",
          value: "Sim"
        },
        {
          text: "Não",
          value: "Não"
        },
        {
          text: "Por Definir",
          value: "Por Definir"
        }
      ],
      radioSelected: "Sim"
    };
  },
  methods: {
    nextPhase(from, to) {
      $(".add-service-button").click(function() {
        $(".add-service")
          .eq(from)
          .removeClass("active");
        $(".add-service")
          .eq(to)
          .addClass("active");
      });
    }
  }
};
</script>

<style land="scss" scoped>
.add-service {
  display: none;
}

.active {
  display: block !important;
}
</style>