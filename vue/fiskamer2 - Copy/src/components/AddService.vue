<template>
  <div>
    <b-form>
      <div class="add-service m-5 active">
        <h3 class="text-center">{{isEdit? "Edição de Serviços": "Registro de Serviços"}}</h3>
        <hr />
        <div class="form-group">
          <b-row>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                for
                v-for="pack in packages"
                :key="pack._id"
                class="btn btn-warning"
                @click="selectedPackage(pack._id)"
              >
                <input type="radio" name="options" id="option1" v-model="service_.pacote" />
                {{pack.pacote}}
              </label>
            </div>
          </b-row>
        </div>
        <b-form-group>
          <b-row>
            <b-col md="4">
              <b-form-select v-model="service_.categoria" :options="options" id="service-category"></b-form-select>
            </b-col>
            <b-col md="8">
              <b-form-input
                type="text"
                required
                placeholder="Nome do Serviço"
                id="service-name"
                v-model="service_.nome"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group>
          <b-form-input
            type="text"
            required
            placeholder="Localização"
            id="service-location"
            v-model="service_.location"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-row>
            <b-col md="6">
              <b-form-input
                type="number"
                required
                placeholder="Preço"
                id="service-price"
                v-model="service_.price"
              ></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-file
                placeholder="Selecionar Fotografia"
                accept=".jpg, .png, .jpeg"
                v-model="service_.coverImage"
                :state="Boolean(service_.coverImage)"
                ref="fileInput"
              ></b-form-file>
              <b-button variant="info" @click="uploadFile">
                <!-- @click="$refs.fileInput.click() -->
                <b-icon-camera></b-icon-camera>Imagem
              </b-button>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group>
          <b-form-textarea
            rows="3"
            placeholder="Descreva o serviço..."
            v-model="service_.descricao"
          ></b-form-textarea>
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
      </div>
      <div class="add-service2">
        <h3 class="text-center">Responda a estas questões para terminar</h3>

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
        </b-table>
        <div class="buttons-footer">
          <b-button v-if="isEdit" variant="info" class="mx-auto" @click="updateService">Actualizar</b-button>
          <b-button v-else variant="success" class="mx-auto" @click="addService">Adicionar</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
import { bus } from "../main";
export default {
  data() {
    return {
      isEdit: true,
      packages: {},
      service_: {
        categoria: "",
        nome: "",
        descricao: "",
        endereco: [],
        images: null,
        coverImage: null,
        price: "",
        availability: [],
        fornecedor: this.$store.state.user._id,
        /*  fornecedor: "5ea7f5a4200ad642305fc732", */
        pacote: {},
        features: [
          {
            feature: "Bebidas",
            price: 2000
          },
          {
            feature: "Musica",
            price: 6000
          }
        ],
        formData: null
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
      radioSelected: "Sim",
      categories: {}
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
    },
    addService() {
      this.uploadFile();
      axios
        .post("http://localhost:3000/api/v1/services", this.service_)
        .then(response => {
          //console.log(this.response);
        })
        .catch(error => {
          this.service_.fornecedor = {};
          console.log(error);
        });
    },

    updateService() {
      axios
        .patch("http://localhost:3000/api/v1/services/" + this.service_._id)
        .then(response => {
          console.log(this.response);
          this.isEdit = false;
          this.$router.push("/main/supply/consult");
        })
        .catch(error => {
          console.log(error);
        });

      //Para testar
      this.isEdit = false;
      this.$router.push("/main/supply/consult");
    },
    getCategories() {
      axios
        .get("http://localhost:3000/api/v1/categories")
        .then(response => {
          this.categories = response.data.data.docs;
          this.setCategories(this.categories);
          //console.log(this.categories);
        })
        .catch(error => {
          console.log(error);
        });
      //this.setCategories();
    },
    setCategories(categories) {
      for (var i = 0; i < categories.length; i++) {
        this.options.push({
          value: categories[i]._id,
          text: categories[i].categoria
        });
      }
    },
    getPackages() {
      axios
        .get("http://localhost:3000/api/v1/packages")
        .then(response => {
          this.packages = response.data.data.docs;
          //this.setCategories(this.packages);
        })
        .catch(error => {
          console.log(error);
        });
      //this.setCategories();
    },
    selectedPackage(pack) {
      this.service_.pacote = pack;
    },
    toEdit(service) {},
    fileChange(fieldName, file) {
      let imageFile = file[0];
      let formData = new FormData();

      let imageURL = URL.createObjectURL(imageFile);
      formData.append(fieldName, imageFile);
    },
    uploadFile() {
      const formData = new FormData();
      formData.append(
        "coverImage",
        this.service_.coverImage,
        this.service_.coverImage.name
      );

      axios
        .patch(
          "http://localhost:3000/api/v1/services/" + this.service_._id,
          formData
        )
        .then(response => {
          console.log(this.response);
          this.isEdit = false;
          this.$router.push("/main/supply/consult");
        })
        .catch(error => {
          console.log(error);
        });

      console.log(formData);
    },

    onFileSelected(event) {
      console.log("here");
      console.log(event.target.files[0]);
      this.service_.coverImage = event.target.files[0];
    }
  },
  beforeMount() {
    this.getCategories();
    this.getPackages();
  },

  mounted() {},

  created() {
    bus.$on("toedit", service => {
      this.service_ = service;
      this.service_.pacote = this.service_.pacote.pacote;
      this.service_.categoria = this.service_.categoria.categoria;
      this.service_.fornecedor = this.service_.fornecedor._id;
      this.isEdit = true;
      console.log(this.service_);
    });
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