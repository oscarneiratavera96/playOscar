import { createTheme, ThemeProvider } from '@material-ui/core';
import { render, RenderOptions } from '@testing-library/react';
import i18n from 'i18n/i18nTesting';
import { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from 'store';

const theme = createTheme({ props: { MuiWithWidth: { initialWidth: 'md' } } });

const wrapper = ({ children }: { children?: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>{children}</Provider>
    </I18nextProvider>
  </ThemeProvider>
);

wrapper.defaultProps = {
  children: null,
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
