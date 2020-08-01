import Header from '../header/Header';
import Meta from '../meta/Meta';
import { PageStyles, Inner, theme, SiteThemeProvider, GlobalStyle } from './PageStyles';

interface PageProps {
    children: React.ReactNode;
}

const Page = ({ children }: PageProps) => (
    <SiteThemeProvider theme={theme}>
        <GlobalStyle />
        <PageStyles>
            <Meta />
            <Header />
            <Inner>{children}</Inner>
        </PageStyles>
    </SiteThemeProvider>
);

export default Page;
