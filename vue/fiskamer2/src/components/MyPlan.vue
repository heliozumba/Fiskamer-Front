<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <mdb-card class="mt-2 purple-gradient text-center text-white font-weight-bold px-4">
          <mdb-card-body>
            <h4>Wishlist</h4>
          </mdb-card-body>
        </mdb-card>
        <!--mdb-tbl>
          <mdb-tbl-head>
            <tr>
              <th v-for="column in data.columns" :key="column.field">{{column.label}}</th>
              <th colspan="3">Acções</th>
            </tr>
          </mdb-tbl-head>
          <mdb-tbl-body>
            <tr v-for="row in data.rows" :key="row.key">
              <td>{{row.service}}</td>
              <td>{{row.price}}</td>
              <td>
                <p
                  v-for="feature in row.features"
                  :key="feature.name"
                >{{feature.name}} - {{feature.price}}</p>
              </td>
              <td>{{row.total}}</td>
              <td>
                <button>Juca</button>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
         <mdb-datatable-2
          class="profile-container"
          v-model="data"
          bordered
          reactive
          :time="5000"
          responsive
          scrollY
          :maxHeight="maxH"
          
        />
        <template>
          <th scope=""></tr>
        </template>
        -->
        <b-table
          responsive
          :fields="fields"
          :items="plan2"
          foot-clone
          no-footer-sorting
          class="profile-container scrollbar-primary"
          sticky-header
        >
          <template v-slot:cell(features)="row">
            <b-form-checkbox
              v-for="feature in row.item.features"
              :key="feature.name"
              v-model="row.item.selected"
              :value="feature.price"
            >
              <p class="my-1">{{feature.name}} - {{feature.price}}</p>
            </b-form-checkbox>
          </template>
          <template v-slot:cell(total)="row">
            <span>{{totalRow(row.item.total,row.item.selected)}}</span>
          </template>
          <template v-slot:cell(acções)="row">
            <a
              href="#"
              v-b-tooltip.hover
              title="Eliminar"
              @click="confirmAction('Eliminar', 'Planejamento', row.item.service, row.item,removeFromPlan)"
            >
              <b-icon-x variant="danger" scale="2"></b-icon-x>
            </a>
          </template>
          <template v-slot:foot(service)>
            <h4 class="font-weight-bold">Total</h4>
          </template>
          <template v-slot:foot(price)>
            <span></span>
          </template>
          <template v-slot:foot(features)>
            <span></span>
          </template>
          <template v-slot:foot(total)>
            <h4 class="font-weight-bold">{{columnTotal2}}</h4>
          </template>
          <template v-slot:foot(acções)>
            <span></span>
          </template>

          <h1>Total:</h1>
        </b-table>
      </div>
      <div class="col-md-3">
        <div class="text-center mt-5">
          <h3 class="text-muted font-weight-bold">Visão Geral</h3>
        </div>
        <div class="row">
          <div class="col-md-5 border profile-container rounded p-4 m-2">
            <!-- <div
              class="card-icons float-left text-center text-white p-2 border mb-5 position-absolute profile-container blue-gradient"
            >
              <i class="fas fa-file fa-2x"></i>
            </div>-->
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">{{plan2.length}}</h1>
              <p class="text-muted">Serviços</p>
            </div>
          </div>
          <div class="col-md-5 border profile-container rounded p-4 m-2">
            <!--  <div
              class="card-icons float-left text-center text-white p-2 border mb-5 position-absolute profile-container blue-gradient"
            >
              <i class="fas fa-file fa-2x"></i>
            </div>-->
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">{{columnTotal2}}</h1>
              <p class="text-muted">Preço Total</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 border profile-container rounded p-4 m-2">
            <!-- <div
              class="card-icons float-left text-center text-white p-2 border mb-5 position-absolute profile-container blue-gradient"
            >
              <i class="fas fa-file fa-2x"></i>
            </div>-->
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">5</h1>
              <p class="text-muted">Solicitações</p>
            </div>
          </div>
          <div class="col-md-5 border profile-container rounded p-4 m-2">
            <!--  <div
              class="card-icons float-left text-center text-white p-2 border mb-5 position-absolute profile-container blue-gradient"
            >
              <i class="fas fa-file fa-2x"></i>
            </div>-->
            <div class="text-center">
              <h1 class="font-weight-bold mt-3">5</h1>
              <p class="text-muted">Solicitações</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { confirm } from "../mixins/confirm";
import { toast } from "../mixins/toasts";
import {
  mdbDatatable2,
  mdbCard,
  mdbCardBody,
  mdbTbl,
  mdbTblHead,
  mdbTblBody
} from "mdbvue";

export default {
  mixins: [confirm, toast],
  components: {
    mdbDatatable2,
    mdbCard,
    mdbCardBody,
    mdbTbl,
    mdbTblHead,
    mdbTblBody
  },
  data() {
    return {
      maxH: "55vh",
      columnTotal: 0,
      plan: {},
      plan2: [],
      fields: [
        { key: "service", sortable: true },
        { key: "price", sortable: true },
        "features",
        "total",
        "acções"
      ],
      data: {
        columns: [
          {
            label: "Serviço",
            field: "service",
            sort: true
          },
          {
            label: "Preço",
            field: "price",
            sort: false,
            format: value => value + " AOA"
          },
          {
            label: "Feature",
            field: "feature",
            sort: false
          },
          {
            label: "Total",
            field: "total",
            sort: true
          }
          /* {
            label: "Acções",
            field: "actions",
            sort: false
          } */
        ],
        rows: []
      }
    };
  },
  computed: {
    getPlan() {
      axios
        .get()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    columnTotal2() {
      var total = 0;

      for (var i = 0; i < this.plan2.length; i++)
        total += this.totalRow(this.plan2[i].total, this.plan2[i].selected);

      return total;
    }
  },

  methods: {
    setPlan2() {
      for (var i = 0; i < 10; i++) {
        var plan = {
          service: "Juca" + i,
          price: Math.floor(Math.random() * 10 * 1000),
          features: [
            {
              name: "A",
              price: Math.floor(Math.random() * 10 * 1000)
            },
            {
              name: "B",
              price: Math.floor(Math.random() * 10 * 1000)
            }
          ],
          selected: [0, 0],
          key: i
        };
        plan.total = plan.price;
        this.plan2.push(plan);
      }
    },
    totalRow(total, selected) {
      if (Boolean(selected)) return (total += selected.reduce((a, b) => a + b));
    },
    removeFromPlan(flag, entity, name) {
      if (flag) {
        this.plan2.splice(entity.index, 1);
        this.notify("success", name + " eliminado com sucesso", "Eliminação");
      } else {
        alert("erro");
      }
    }
  },
  beforeMount() {
    this.setPlan2();
    console.log(this.plan2);
  }
};
</script>

<style lang="scss" scoped>
.card-icons {
  margin-top: -20%;
}

.profile-container {
  box-shadow: 1px 1px 8px #343a4033;
}

.table-responsive {
  max-height: 60vh;
}

.scrollbar-primary::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #4285f4;
}

.scrollbar-danger::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}
</style>