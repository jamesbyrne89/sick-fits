import App, { AppProps } from 'next/app';
import Page from '../components/page/Page';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Page>
        <Component {...pageProps} />
    </Page>
);

export default MyApp;
