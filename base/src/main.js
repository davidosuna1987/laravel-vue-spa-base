import pinia from '@/modules/pinia'
import  router from '@/router/router'
import { i18n } from '@/modules/i18n'
import App from '@/components/App.vue'
import { createHead } from '@vueuse/head'
import  { installPWA } from '@/modules/pwa'

installPWA()

import '@/sass/app.scss'

// import 'primevue/resources/themes/mdc-light-indigo/theme.css'
// import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
// import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'
// import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
// import 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'
// import 'primevue/resources/themes/md-light-indigo/theme.css'
// import 'primevue/resources/themes/md-light-deeppurple/theme.css'
// import 'primevue/resources/themes/md-dark-indigo/theme.css'
// import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
// import 'primevue/resources/themes/mdc-light-indigo/theme.css'
// import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
// import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
// import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
// import 'primevue/resources/themes/fluent-light/theme.css'
// import 'primevue/resources/themes/lara-light-indigo/theme.css'
// import 'primevue/resources/themes/lara-dark-indigo/theme.css'
// import 'primevue/resources/themes/lara-light-purple/theme.css'
// import 'primevue/resources/themes/lara-dark-purple/theme.css'
// import 'primevue/resources/themes/lara-light-blue/theme.css'
// import 'primevue/resources/themes/lara-dark-blue/theme.css'
// import 'primevue/resources/themes/lara-light-teal/theme.css'
// import 'primevue/resources/themes/lara-dark-teal/theme.css'
// import 'primevue/resources/themes/saga-blue/theme.css'
// import 'primevue/resources/themes/saga-green/theme.css'
// import 'primevue/resources/themes/saga-orange/theme.css'
// import 'primevue/resources/themes/saga-purple/theme.css'
// import 'primevue/resources/themes/vela-blue/theme.css'
// import 'primevue/resources/themes/vela-green/theme.css'
// import 'primevue/resources/themes/vela-orange/theme.css'
// import 'primevue/resources/themes/vela-purple/theme.css'
// import 'primevue/resources/themes/arya-blue/theme.css'
// import 'primevue/resources/themes/arya-green/theme.css'
// import 'primevue/resources/themes/arya-orange/theme.css'
// import 'primevue/resources/themes/arya-purple/theme.css'
// import 'primevue/resources/themes/nova/theme.css'
// import 'primevue/resources/themes/nova-alt/theme.css'
// import 'primevue/resources/themes/nova-accent/theme.css'
// import 'primevue/resources/themes/nova-vue/theme.css'
// import 'primevue/resources/themes/luna-amber/theme.css'
// import 'primevue/resources/themes/luna-blue/theme.css'
// import 'primevue/resources/themes/luna-green/theme.css'
// import 'primevue/resources/themes/luna-pink/theme.css'
// import 'primevue/resources/themes/rhea/theme.css'

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from "primevue/config"
// import AutoComplete from 'primevue/autocomplete'
// import Accordion from 'primevue/accordion'
// import AccordionTab from 'primevue/accordiontab'
// import Avatar from 'primevue/avatar'
// import AvatarGroup from 'primevue/avatargroup'
// import Badge from 'primevue/badge'
// import BadgeDirective from "primevue/badgedirective"
// import BlockUI from 'primevue/blockui'
import Button from 'primevue/button'
// import Breadcrumb from 'primevue/breadcrumb'
// import Calendar from 'primevue/calendar'
// import Card from 'primevue/card'
// import CascadeSelect from 'primevue/cascadeselect'
// import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
// import Chip from 'primevue/chip'
// import Chips from 'primevue/chips'
// import ColorPicker from 'primevue/colorpicker'
// import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup'
// import ConfirmDialog from 'primevue/confirmdialog'
// import ConfirmPopup from 'primevue/confirmpopup'
// import ConfirmationService from 'primevue/confirmationservice'
// import ContextMenu from 'primevue/contextmenu'
// import DataTable from 'primevue/datatable'
// import DataView from 'primevue/dataview'
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
// import DeferredContent from 'primevue/deferredcontent'
import Dialog from 'primevue/dialog'
// import Divider from 'primevue/divider'
// import Dock from 'primevue/dock'
// import Dropdown from 'primevue/dropdown'
// import Fieldset from 'primevue/fieldset'
// import FileUpload from 'primevue/fileupload'
// import Galleria from 'primevue/galleria'
// import Image from 'primevue/image'
// import InlineMessage from 'primevue/inlinemessage'
// import Inplace from 'primevue/inplace'
// import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
// import InputMask from 'primevue/inputmask'
// import InputNumber from 'primevue/inputnumber'
// import Knob from 'primevue/knob'
// import Listbox from 'primevue/listbox'
// import MegaMenu from 'primevue/megamenu'
// import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
// import Message from 'primevue/message'
// import MultiSelect from 'primevue/multiselect'
// import OrderList from 'primevue/orderlist'
// import OrganizationChart from 'primevue/organizationchart'
// import OverlayPanel from 'primevue/overlaypanel'
// import Paginator from 'primevue/paginator'
// import Panel from 'primevue/panel'
// import PanelMenu from 'primevue/panelmenu'
// import Password from 'primevue/password'
// import PickList from 'primevue/picklist'
// import ProgressBar from 'primevue/progressbar'
// import ProgressSpinner from 'primevue/progressspinner'
// import Rating from 'primevue/rating'
// import RadioButton from 'primevue/radiobutton'
// import Ripple from 'primevue/ripple'
// import Row from 'primevue/row'
// import SelectButton from 'primevue/selectbutton'
// import ScrollPanel from 'primevue/scrollpanel'
// import ScrollTop from 'primevue/scrolltop'
// import Skeleton from 'primevue/skeleton'
// import Slider from 'primevue/slider'
// import Sidebar from 'primevue/sidebar'
// import SpeedDial from 'primevue/speeddial'
// import SplitButton from 'primevue/splitbutton'
// import Splitter from 'primevue/splitter'
// import SplitterPanel from 'primevue/splitterpanel'
// import Steps from 'primevue/steps'
// import StyleClass from 'primevue/styleclass'
// import TabMenu from 'primevue/tabmenu'
// import TieredMenu from 'primevue/tieredmenu'
// import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
// import Toolbar from 'primevue/toolbar'
// import TabView from 'primevue/tabview'
// import TabPanel from 'primevue/tabpanel'
// import Tag from 'primevue/tag'
// import Terminal from 'primevue/terminal'
// import Timeline from 'primevue/timeline'
// import ToggleButton from 'primevue/togglebutton'
// import Tooltip from 'primevue/tooltip'
// import Tree from 'primevue/tree'
// import TreeSelect from 'primevue/treeselect'
// import TreeTable from 'primevue/treetable'
// import TriStateCheckbox from 'primevue/tristatecheckbox'
// import VirtualScroller from 'primevue/virtualscroller'

const primeOptions = {
  ripple: true
}

const head = createHead()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(head)

app.use(PrimeVue, primeOptions)
// app.use(ConfirmationService)
app.use(ToastService)

// app.directive('tooltip', Tooltip)
// app.directive('badge', BadgeDirective)
// app.directive('ripple', Ripple)
// app.directive('styleclass', StyleClass)

// app.component('Accordion', Accordion)
// app.component('AccordionTab', AccordionTab)
// app.component('AutoComplete', AutoComplete)
// app.component('Avatar', Avatar)
// app.component('AvatarGroup', AvatarGroup)
// app.component('Badge', Badge)
// app.component('BlockUI', BlockUI)
// app.component('Breadcrumb', Breadcrumb)
app.component('Button', Button)
// app.component('Calendar', Calendar)
// app.component('Card', Card)
// app.component('Carousel', Carousel)
// app.component('CascadeSelect', CascadeSelect)
app.component('Checkbox', Checkbox)
// app.component('Chip', Chip)
// app.component('Chips', Chips)
// app.component('ColorPicker', ColorPicker)
// app.component('Column', Column)
// app.component('ColumnGroup', ColumnGroup)
// app.component('ConfirmDialog', ConfirmDialog)
// app.component('ConfirmPopup', ConfirmPopup)
// app.component('ContextMenu', ContextMenu)
// app.component('DataTable', DataTable)
// app.component('DataView', DataView)
// app.component('DataViewLayoutOptions', DataViewLayoutOptions)
// app.component('DeferredContent', DeferredContent)
app.component('Dialog', Dialog)
// app.component('Divider', Divider)
// app.component('Dock', Dock)
// app.component('Dropdown', Dropdown)
// app.component('Fieldset', Fieldset)
// app.component('FileUpload', FileUpload)
// app.component('Galleria', Galleria)
// app.component('Image', Image)
// app.component('InlineMessage', InlineMessage)
// app.component('Inplace', Inplace)
// app.component('InputMask', InputMask)
// app.component('InputNumber', InputNumber)
// app.component('InputSwitch', InputSwitch)
app.component('InputText', InputText)
// app.component('Knob', Knob)
// app.component('Listbox', Listbox)
// app.component('MegaMenu', MegaMenu)
// app.component('Menu', Menu)
app.component('Menubar', Menubar)
// app.component('Message', Message)
// app.component('MultiSelect', MultiSelect)
// app.component('OrderList', OrderList)
// app.component('OrganizationChart', OrganizationChart)
// app.component('OverlayPanel', OverlayPanel)
// app.component('Paginator', Paginator)
// app.component('Panel', Panel)
// app.component('PanelMenu', PanelMenu)
// app.component('Password', Password)
// app.component('PickList', PickList)
// app.component('ProgressBar', ProgressBar)
// app.component('ProgressSpinner', ProgressSpinner)
// app.component('RadioButton', RadioButton)
// app.component('Rating', Rating)
// app.component('Row', Row)
// app.component('SelectButton', SelectButton)
// app.component('ScrollPanel', ScrollPanel)
// app.component('ScrollTop', ScrollTop)
// app.component('Slider', Slider)
// app.component('Sidebar', Sidebar)
// app.component('Skeleton', Skeleton)
// app.component('SpeedDial', SpeedDial)
// app.component('SplitButton', SplitButton)
// app.component('Splitter', Splitter)
// app.component('SplitterPanel', SplitterPanel)
// app.component('Steps', Steps)
// app.component('TabMenu', TabMenu)
// app.component('TabView', TabView)
// app.component('TabPanel', TabPanel)
// app.component('Tag', Tag)
// app.component('Textarea', Textarea)
// app.component('Terminal', Terminal)
// app.component('TieredMenu', TieredMenu)
// app.component('Timeline', Timeline)
app.component('Toast', Toast)
// app.component('Toolbar', Toolbar)
// app.component('ToggleButton', ToggleButton)
// app.component('Tree', Tree)
// app.component('TreeSelect', TreeSelect)
// app.component('TreeTable', TreeTable)
// app.component('TriStateCheckbox', TriStateCheckbox)
// app.component('VirtualScroller', VirtualScroller)

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

app.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
})

app.directive('can', (el, binding, vnode) => {
  if(userStore.roles.includes('god')) return true

  let permissions = binding.value.split('|')
  let permissionDenyed = permissions.some(p => userStore.permissions.includes(p)) ? false : true

  if(permissionDenyed){ // replace HTMLElement with comment node
    commentNode(el, binding, vnode)
  }
})

app.directive('role', (el, binding, vnode) => {
  if(userStore.roles.includes('god')) return true

  let roles = binding.value.split('|')
  let hasRole = roles.some(r => userStore.roles.includes(r)) ? true : false

  if(!hasRole) commentNode(el, binding, vnode)
})

app.directive('roles', (el, binding, vnode) => {
  if(userStore.roles.includes('god')) return true

  let roles = binding.value.split('|')
  let hasRoles = roles.some(r => !userStore.roles.includes(r)) ? false : true

  if(!hasRoles) commentNode(el, binding, vnode)
})

const commentNode = (el, binding, vnode) => {
  const comment = document.createComment(' '+binding.value+' ')
  Object.defineProperty(comment, 'setAttribute', {
    value: () => undefined,
  })
  vnode.elm = comment
  vnode.text = ' '+binding.value+' '
  vnode.isComment = true
  vnode.context = undefined
  vnode.tag = undefined
  vnode.dirs = undefined

  if(vnode.componentInstance) vnode.componentInstance.$el = comment
  if(el.parentNode) el.parentNode.replaceChild(comment, el)
}

app.mount('#app')
