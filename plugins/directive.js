import Vue from 'vue';
Vue.directive('hover',{
    bind(el, binding){
      el.onmouseover = ()=>{
        if (typeof binding.value.class != "undefined"){
          el.classList.add(binding.value.class)
        }
      }
      el.onmouseout = () => {
        if (typeof binding.value.class != "undefined") {
          el.classList.remove(binding.value.class)
        }
      }
      
    }
  })