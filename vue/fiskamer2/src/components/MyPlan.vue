<template>
  <div>
    <b-table responsive :fields="fields" :items="plan2" foot-clone no-footer-sorting>
      <template v-slot:cell(features)="row">
        <b-form-checkbox
          v-for="feature in row.item.features"
          :key="feature.name"
          v-model="row.item.selected"
          :value="feature.price"
        >
          <p>{{feature.name}} - {{feature.price}}</p>
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
          <!-- @click="" -->
          <b-icon-x variant="danger" scale="2"></b-icon-x>
        </a>
      </template>
      <template v-slot:foot(service)>
        <span>Total</span>
      </template>
      <template v-slot:foot(price)>
        <span></span>
      </template>
      <template v-slot:foot(features)>
        <span></span>
      </template>
      <template v-slot:foot(total)>
        <span>{{columnTotal2}}</span>
      </template>
      <template v-slot:foot(acções)>
        <span></span>
      </template>

      <h1>Total:</h1>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import { confirm } from "../mixins/confirm";
export default {
  mixins: [confirm],
  data() {
    return {
      columnTotal: 0,
      plan: {},
      plan2: [],
      fields: [
        { key: "service", sortable: true },
        { key: "price", sortable: true },
        "features",
        "total",
        "acções"
      ]
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
          selected: [0, 0]
        };
        plan.total = plan.price;
        this.plan2.push(plan);
      }
    },
    totalRow(total, selected) {
      if (Boolean(selected)) return (total += selected.reduce((a, b) => a + b));
    },
    removeFromPlan(flag, entity) {
      flag ? this.plan2.splice(entity.index, 1) : alert("erro");
    }
  },
  beforeMount() {
    this.setPlan2();
    console.log(this.plan2);
  }
};
</script>

<style>
</style>