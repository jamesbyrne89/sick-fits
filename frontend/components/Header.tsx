import Nav from './Nav';

interface HeaderProps {}

const Header = () => {
    return (
        <header>
            <div className="bar">
                <a href="">Sick fits</a>
                <Nav />
            </div>
            <div className="sub-bar">
                <label>
                    <span>Search</span>
                    <input type="search"></input>
                </label>
            </div>
            <div>Cart</div>
        </header>
    );
};

export default Header;
