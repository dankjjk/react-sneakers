function Drawer() {
    return (
        <div className="overlay hidden">
            <div className="drawer">
                <div className="cartTitle">
                    <h2>Корзина</h2>
                    <img src="img/icons/delete.svg" alt="Close" />
                </div>

                <div className="cart mb-5 mt-5">
                    <div className="cartItem flex flex-col">
                        <div className="cartItem__img">
                            <img class="sneaker" src="img/sneakers/1.jpg" alt="Sneakers #1" />
                        </div>
                        <div className="cartItem__desc">
                            <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="cartItem__button">
                            <img src="img/icons/delete.svg" alt="Delete" />
                        </div>
                    </div>

                    <div className="cartItem flex flex-col">
                        <div className="cartItem__img">
                            <img class="sneaker" src="img/sneakers/1.jpg" alt="Sneakers #1" />
                        </div>
                        <div className="cartItem__desc">
                            <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="cartItem__button">
                            <img src="img/icons/delete.svg" alt="Delete" />
                        </div>
                    </div>

                    <div className="cartItem flex flex-col">
                        <div className="cartItem__img">
                            <img class="sneaker" src="img/sneakers/1.jpg" alt="Sneakers #1" />
                        </div>
                        <div className="cartItem__desc">
                            <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="cartItem__button">
                            <img src="img/icons/delete.svg" alt="Delete" />
                        </div>
                    </div>

                    <div className="cartItem flex flex-col">
                        <div className="cartItem__img">
                            <img class="sneaker" src="img/sneakers/1.jpg" alt="Sneakers #1" />
                        </div>
                        <div className="cartItem__desc">
                            <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="cartItem__button">
                            <img src="img/icons/delete.svg" alt="Delete" />
                        </div>
                    </div>
                </div>

                <div className="cartTotal flex flex-col">
                    <ul>
                        <li className="flex justify-between">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="flex justify-between">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button>Оформить заказ:</button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
