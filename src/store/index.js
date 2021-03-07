import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    baseurl: "https://jsonplaceholder.typicode.com",
  },
  mutations: {
  },
  actions: {
    postdata({ state }, postdata) {
      axios.post(`${state.baseurl}/posts`, postdata).then(post_response => {
        //console.log("update_response", post_response);
        alert("Kayıt başarıyla gerçekleşmiştir...");
      }).catch(e => console.log("error", e));
    }

  },
  modules: {
  }
})
