import axios from "axios";
axios.defaults.withCredentials = true;

export const general = {
  data() {
    return {
      baseUrl: "http://localhost:3000/api/v1/"
    };
  },
  methods: {
    generalGet(entity, retriever, id = false, aditional = false) {
      var api = "";
      Boolean(id)
        ? (api = this.baseUrl + entity + id)
        : (api = this.baseUrl + entity);

      Boolean(aditional) ? (api += aditional) : "";

      axios
        .get(this.baseUrl + entity)
        .then(response => {
          console.log(response.data);

          Array.isArray(response.data.data.docs)
            ? retriever.apply.push(response.data.data.docs)
            : (retriever = response.data.data.docs);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
