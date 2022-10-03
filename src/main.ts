import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router)

app.mount('#app')
