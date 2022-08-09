function Header() {
    return (
        <header className="header">
            <div className="container w-main m-auto items-center flex justify-between">
                <div className="headerLeft flex">
                    <img src="img/logo.png" alt="Logotype" />
                    <div className="headerLeft__title">
                        <h3>REACT SNEAKERS</h3>
                        <span>Магазин лучших кроссовок</span>
                    </div>
                </div>
                <div className="headerRight">
                    <ul className="flex flex-row">
                        <li className="flex items-center">
                            <img src="img/icons/cart.svg" alt="Cart" />
                            <span>1205 руб.</span>
                        </li>
                        <li>
                            <img src="img/icons/heart.svg" alt="Favourites" />
                        </li>
                        <li>
                            <img src="img/icons/user.svg" alt="User" />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
