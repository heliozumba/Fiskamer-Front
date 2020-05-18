<template>
  <!-- <div class="div-main">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="payment-form-container col-md-6">
        <b-form>
          <div class="payment-phase">
            <h4 class="text-center">Selecção de Compra</h4>
          </div>
          <div class="payment-phase active">
            <h4 class="text-center">Confirmação de Dados Pessoais</h4>
            <b-form-group label="Nome:" label-for="name">
              <b-form-input id="name" type="text" required></b-form-input>
            </b-form-group>
            <b-form-group label="Email:" label-for="email">
              <b-form-input id="email" type="email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Telemóvel:" label-for="phone">
              <b-form-input id="phone" type="phone" required></b-form-input>
            </b-form-group>
            <b-form-group label="Endereço:" label-for="address">
              <b-form-input id="address" type="text" required></b-form-input>
            </b-form-group>
            <b-button class="next-phase">Avançar</b-button>
          </div>
          <div class="payment-phase active">
            <h4 class="text-center">Método de Pagamento</h4>
            <div class="row">
              <div class="col-md-5">
                <p class="text-center">Pagamento por Referência</p>
              </div>
              <div class="col-md-5">
                <p class="text-center">Transferência Bancária</p>
              </div>
            </div>
            <b-button class="next-phase">Avançar</b-button>
          </div>
          <div class="payment-phase active">
            <h4 class="text-center">Método de Pagamento</h4>
            <div class="row">
              <div class="col-md-5">
                <p class="text-center">Pagamento por Referência</p>
              </div>
              <div class="col-md-5">
                <p class="text-center">Transferência Bancária</p>
              </div>
            </div>
            <div class="payment-phase active">
              <h4 class="text-center">Informações</h4>
              <p
                class="lead text-justify"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati repellendus molestiae voluptatum perspiciatis, consequuntur, nemo natus laudantium alias corrupti corporis dignissimos at. Corporis esse harum deserunt? Cupiditate, velit reiciendis?</p>
              <b-button class="next-phase">Avançar</b-button>
            </div>
            <div class="payment-phase active">
              <h4 class="text-center">Finalizar Compra</h4>
              <p
                class="lead text-justify"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati repellendus molestiae voluptatum perspiciatis, consequuntur, nemo natus laudantium alias corrupti corporis dignissimos at. Corporis esse harum deserunt? Cupiditate, velit reiciendis?</p>
              <b-button class="next-phase">Avançar</b-button>
            </div>
          </div>
        </b-form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>-->
  <b-modal id="payment" title="Pagamento de Serviço" class="text-center">
    <div></div>
    <div class="payment-phase activated">
      <h4 class="text-center">1.Selecção de Compra</h4>
      <b-button class="next-phase" @click="next">Avançar</b-button>
    </div>
    <div class="payment-phase">
      <h4 class="text-center">2.Confirmação de Dados Pessoais</h4>
      <b-form-group label="Nome:" label-for="name">
        <b-form-input id="name" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Email:" label-for="email">
        <b-form-input id="email" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Telemóvel:" label-for="phone">
        <b-form-input id="phone" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Endereço:" label-for="address">
        <b-form-input id="address" type="text" required></b-form-input>
      </b-form-group>

      <b-button class="next-phase" @click="next">Avançar</b-button>
    </div>
    <div class="payment-phase">
      <h4 class="text-center">3.Método de Pagamento</h4>
      <div class="row">
        <div class="col-md-5">
          <p class="text-center">Pagamento por Referência</p>
        </div>
        <div class="col-md-5">
          <p class="text-center">Transferência Bancária</p>
        </div>
      </div>
      <b-button class="next-phase" @click="next">Avançar</b-button>
    </div>
    <div class="payment-phase">
      <h4 class="text-center">4.Informações</h4>
      <p
        class="lead text-justify"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati repellendus molestiae voluptatum perspiciatis, consequuntur, nemo natus laudantium alias corrupti corporis dignissimos at. Corporis esse harum deserunt? Cupiditate, velit reiciendis?</p>
      <b-button class="next-phase" @click="next">Avançar</b-button>
    </div>
    <div class="payment-phase">
      <h4 class="text-center">5.Finalizar Compra</h4>
      <p
        class="lead text-justify"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati repellendus molestiae voluptatum perspiciatis, consequuntur, nemo natus laudantium alias corrupti corporis dignissimos at. Corporis esse harum deserunt? Cupiditate, velit reiciendis?</p>
      <b-button class="next-phase" @click="next">Avançar</b-button>
    </div>
  </b-modal>
</template>

<script>
var total = $(".payment-phase").length;
var indexb = 0;
export default {
  methods: {
    next() {
      if (indexb < 7) {
        $(".payment-phase")
          .eq(indexb)
          .removeClass("activated");
        indexb++;
        $(".payment-phase")
          .eq(indexb)
          .addClass("activated ");
      } else {
        alert("passou");
        indexb = 0;
      }
    }
  }
};

var total = $(".payment-phase").length;
var index = 0;
</script>

<style lang="scss" scoped>
.div-main {
  width: 99.99vw;
  height: 91.8vh;
  margin-top: 8.2vh;
}

.payment-form-container {
  border: 1px solid red;
}

.payment-phase {
  display: none;
}

.activated {
  display: block !important;
}
</style>