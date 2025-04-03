import type { Preview } from '@storybook/react';

import '@2e32/react-radio/css';

// Общие стили для всего storybook
import '../stories/assets/css/common.css';

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

export default preview;
