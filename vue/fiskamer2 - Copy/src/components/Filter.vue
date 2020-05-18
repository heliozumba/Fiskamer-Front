<template>
  <div v-if="filterArray">
    <b-form-group>
      <b-form-input v-model="search" :placeholder="kindOfArray" :id="kindOfArray" type="text"></b-form-input>
      <b-list-group class>
        <b-list-group-item
          href="#"
          v-for="(item, index) in filtered"
          :key="item.name"
          @click="setSubFilterArray(index)"
        >{{ item.name }}</b-list-group-item>
      </b-list-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    filterArray: Array,
    kindOfArray: String
  },
  data() {
    return {
      provinces: [
        {
          name: "Luanda",
          counties: [
            {
              name: "Cacuaco"
            },
            {
              name: "Belas"
            },
            {
              name: "Cazenga"
            },
            {
              name: "Icolo e Bengo"
            },
            {
              name: "Luanda"
            },
            {
              name: "Quissama"
            },
            {
              name: "Kilamba Kiaxi"
            },
            {
              name: "Talatona"
            },
            {
              name: "Viana"
            }
          ]
        },
        {
          name: "Bengo",
          counties: [
            {
              name: "Ambriz"
            },
            {
              name: "Bula Atumba"
            },
            {
              name: "Dande"
            },
            {
              name: "Dembos"
            },
            {
              name: "Nambuangongo"
            },
            {
              name: "Pango"
            },
            {
              name: "Aluquem"
            }
          ]
        }
      ],
      search: ""
    };
  },
  methods: {
    setSubFilterArray(id) {
      this.$emit("selected", id);
    }
  },
  computed: {
    filtered() {
      return this.filterArray.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.list-group {
  overflow-y: scroll;
}
</style>