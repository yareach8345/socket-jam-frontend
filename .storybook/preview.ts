import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { useDarkMode } from 'storybook-dark-mode'
import {createPinia, setActivePinia} from "pinia";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

setup((app) => {
    const pinia = createPinia()
    setActivePinia(pinia)
    app.use(pinia)
})

export default preview;