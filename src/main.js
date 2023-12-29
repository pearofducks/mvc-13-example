import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { mount } from 'mount-vue-component'
import HighlightPlugin from '@highlightjs/vue-plugin'

mount(HighlightPlugin.component, {
  element: document.querySelector('#highlight-el'),
  props: {
    language: 'js',
    code: `console.log('Hello world');`
  }
})

createApp(App).mount('#app')
