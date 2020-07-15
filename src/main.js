import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSlash, faPlus, faTrash, faHatWizard, faPlusSquare, faAlignJustify, faGripLines, faCheckSquare, faDotCircle, faSlidersH, faClock, faCalendarDay, faTrashAlt, faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { focus } from './directives/global';

Vue.config.productionTip = false

library.add(faSlash, faPlus, faTrash, faHatWizard, faPlusSquare, faAlignJustify, faGripLines, faCheckSquare, faDotCircle, faSlidersH, faClock, faCalendarDay, faTrashAlt, faSortAmountUp, faSortAmountDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.directive('focus', focus)

