'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

import { ThemeProvider } from '@/providers/ThemeProvider';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
          <Main />
          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  );
}
