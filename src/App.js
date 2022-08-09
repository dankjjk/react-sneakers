import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {
    return (
        <div className="wrapper">
            <div className="mainContent">
                <Drawer />
                <Header />
                <main className="main">
                    <div className="container w-main m-auto items-center flex flex-col">
                        {/* Title element */}
                        <div className="mainTitle flex flex-row w-full items-center justify-between my-10">
                            <h1>Все кроссовки</h1>
                            <div className="search-block flex">
                                <img src="img/icons/search.svg" alt="Search" />
                                <input type="text" placeholder="Поиск..." />
                            </div>
                        </div>

                        {/* Sneakers content */}
                        <div className="mainSneakers mb-10">
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                            {/* <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/1.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/2.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/3.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/4.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/5.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/6.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/7.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="item flex flex-col">
                                <div className="itemImg">
                                    <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                                    <img
                                        class="sneaker"
                                        src="img/sneakers/8.jpg"
                                        alt="Sneakers #1"
                                    />
                                </div>
                                <div className="itemTitle">
                                    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
                                </div>
                                <div className="itemPrice">
                                    <div className="itemPrice__left">
                                        <span>Цена:</span>
                                        <b>12 999 руб.</b>
                                    </div>
                                    <div className="itemPrice__right">
                                        <span>+</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
