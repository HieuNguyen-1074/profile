import { Inter } from 'next/font/google';
import './globals.css';
//state
import { LoadingContextProvider } from '@/loaddingState';
import { ThemeProvider } from '@/ThemeProvider';
// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import AnimateCusor from '@/components/AnimateCusor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Profile',
  description: 'This is profile page ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={'max-w-6xl mx-auto md:px-10 px-4  dark:bg-black'}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem>
          <AnimateCusor>
            <LoadingContextProvider>
              <main>
                <Header />
                {children}
              </main>

              <Loading />
            </LoadingContextProvider>
          </AnimateCusor>
        </ThemeProvider>
      </body>
    </html>
  );
}
