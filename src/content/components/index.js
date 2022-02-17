import StarBox from './StarBox.vue'
import TabContent from './TabContent.vue'
import StarTabs from './StarTabs.vue'
import Pane from './TabPane.vue'
export default (Vue) => {
  Vue.component(StarBox.name, StarBox)
  Vue.component(TabContent.name, TabContent)
  Vue.component(StarTabs.name, StarTabs)
  Vue.component(Pane.name, Pane)
}
