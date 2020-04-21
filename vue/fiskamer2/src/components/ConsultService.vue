<template>
  <div class="consult-service-container">
    <b-row>
      <b-col md="12" class="mb-4">
        <h3 class="text-center">Os seus Serviços</h3>
      </b-col>
    </b-row>
    <b-row class>
      <b-col md="6">
        <b-button v-b-toggle.collapse-filter class="mr-4">
          <i class="fa fa-filter" aria-hidden="true"></i> Filtrar
        </b-button>
      </b-col>
      <b-col md="6">
        <b-form>
          <b-form-group>
            <b-form-input type="search" placeholder="Pesquisar"></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <b-collapse id="collapse-filter">
      <b-form-group class="mx-auto my-4">
        <b-form-radio-group
          id="filter-radios"
          v-model="selected"
          :options="options"
          buttons
          name="filter-radios"
        ></b-form-radio-group>
      </b-form-group>
    </b-collapse>
    <b-row class>
      <b-list-group class="w-100">
        <b-list-group-item class="p-2 mt-1">
          <b-row>
            <b-col md="3" class>
              <b-img
                class="img-fluid rounded w-100"
                :src="require('../assets/imgs/106418_3.jpg')"
                alt="service-img"
              ></b-img>
            </b-col>
            <b-col md="8">
              <h5 class="mb-2 font-weight-bold">Nome</h5>
              <p class="text-muted font-italic mb-2">Localização</p>
              <div class="service-actions">
                <b-row>
                  <b-col md="8">
                    <p class="mb-2">
                      <span class="text-success">75 000 AOA</span>
                      <span class="text-danger ml-4">
                        <b-icon-heart-fill></b-icon-heart-fill>
                        <span class="font-weight-bold">10</span>
                      </span>
                    </p>
                  </b-col>
                  <b-col md="4" class="align-content-end">
                    <span class="text-warning">
                      <b-icon-pencil-fill></b-icon-pencil-fill>Editar
                    </span>
                    <span class="text-danger ml-2">
                      <b-icon-exclude></b-icon-exclude>Eliminar
                    </span>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item class="p-2 mt-1">
          <b-row>
            <b-col md="3" class>
              <b-img
                class="img-fluid rounded w-100"
                :src="require('../assets/imgs/106418_3.jpg')"
                alt="service-img"
              ></b-img>
            </b-col>
            <b-col md="8">
              <h5 class="mb-2 font-weight-bold">Nome</h5>
              <p class="text-muted font-italic mb-2">Localização</p>
              <div class="service-actions">
                <b-row>
                  <b-col md="8">
                    <p class="mb-2">
                      <span class="text-success">75 000 AOA</span>
                      <span class="text-danger ml-4">
                        <b-icon-heart-fill></b-icon-heart-fill>
                        <span class="font-weight-bold">10</span>
                      </span>
                    </p>
                  </b-col>
                  <b-col md="4" class="align-content-end">
                    <span class="text-warning">
                      <b-icon-pencil-fill></b-icon-pencil-fill>Editar
                    </span>
                    <span class="text-danger ml-2">
                      <b-icon-exclude></b-icon-exclude>Eliminar
                    </span>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item class="p-2 mt-1">
          <b-row>
            <b-col md="3" class>
              <b-img
                class="img-fluid rounded w-100"
                :src="require('../assets/imgs/106418_3.jpg')"
                alt="service-img"
              ></b-img>
            </b-col>
            <b-col md="8">
              <h5 class="mb-2 font-weight-bold">Nome</h5>
              <p class="text-muted font-italic mb-2">Localização</p>
              <div class="service-actions">
                <b-row>
                  <b-col md="8">
                    <p class="mb-2">
                      <span class="text-success">75 000 AOA</span>
                      <span class="text-danger ml-4">
                        <b-icon-heart-fill></b-icon-heart-fill>
                        <span class="font-weight-bold">10</span>
                      </span>
                    </p>
                  </b-col>
                  <b-col md="4" class="align-content-end">
                    <span class="text-warning">
                      <b-icon-pencil-fill></b-icon-pencil-fill>Editar
                    </span>
                    <span class="text-danger ml-2">
                      <b-icon-exclude></b-icon-exclude>Eliminar
                    </span>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "Nome",
      options: [
        {
          text: "Nome",
          value: "Nome"
        },
        {
          text: "Localização",
          value: "Localização"
        },
        {
          text: "Preço",
          value: "Preço"
        },
        {
          text: "Favoritos",
          value: "Favoritos"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 15vh;
  object-fit: cover;
}
</style>