import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.$ = window.JQuery = require("jquery")
require("jquery-ui-dist/jquery-ui.min.js")
// Or npm i jquery-ui And require('jquery-ui/ui/widgets/datepicker') (more small bundle)
require("jquery-ui-dist/jquery-ui.min.css") 

// Origin autocomplete START
window.$("#originCS").autocomplete({
  source: function(request, response) {
      window.$.ajax({
          url: "https://biletbayisi.com/api/flight-ticket/autocomplete",
          dataType: "json",
          data:{
            term: request.term
          },
          minLength: 3,
          success: function( data ) {
            console.log(data)
            let res = data.data.map(item=>item.code + " " + item.city_name + " - " + item.name);
            response( res );
          } 
      });
  }
});


// Destination autocomplete START
window.$("#destinationCS").autocomplete({
  source: function(request, response) {
      window.$.ajax({
          url: "https://biletbayisi.com/api/flight-ticket/autocomplete",
          dataType: "json",
          data:{
            term: request.term
          },
          minLength: 3,
          success: function( data ) {
            console.log(data)
            let res = data.data.map(item=>item.code + " " + item.city_name + " - " + item.name);
            response( res );
          } 
      });
  }
});

window.$( "#datepicker" ).datepicker();
window.$( "#datepicker2" ).datepicker();
