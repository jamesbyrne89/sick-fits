import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <Link href="./">Home</Link>
            <Link href="./sell">Sell</Link>
        </nav>
    );
};

export default Nav;
