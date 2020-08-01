import Nav from '../nav/Nav';
import Link from 'next/link';
import { Logo, StyledHeader } from './HeaderStyles';
import Search from '../search/Search';

interface HeaderProps {}

const Header = () => {
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
