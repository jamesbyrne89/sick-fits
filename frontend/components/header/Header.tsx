import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Nav from '../nav/Nav';
import { Logo, StyledHeader } from './HeaderStyles';
import Search from '../search/Search';

interface HeaderProps {}

const Header = () => {
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            NProgress.start();
        });
        router.events.on('routeChangeComplete', () => {
            NProgress.done();
        });
        router.events.on('routeChangeError', () => {
            NProgress.done();
        });
    }, [router]);

    return (
        <StyledHeader>
            <div className="bar">
                <Logo>
                    <Link href="/">
                        <a>Sick fits</a>
                    </Link>
                </Logo>
                <Nav />
            </div>
            <div className="sub-bar">
                <Search />
            </div>
            <div>Cart</div>
        </StyledHeader>
    );
};

export default Header;
