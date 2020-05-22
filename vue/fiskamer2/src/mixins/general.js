import axios from "axios";
axios.defaults.withCredentials = true;

export const general = {
  data() {
    return {
      baseUrl: "http://localhost:3000/api/v1/"
    };
  },
  methods: {
    generalGet(entity, retriever) {
      axios
        .get(this.baseUrl + "/" + entity)
        .then(response => {
          console.log(response.data);
          retriver.apply.push(response.data.data.docs);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
