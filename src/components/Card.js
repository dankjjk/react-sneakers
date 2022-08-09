function Card() {
    return (
        <div className="item flex flex-col">
            <div className="itemImg">
                <img class="heart" src="img/icons/heart.svg" alt="Heart" />
                <img class="sneaker" src="img/sneakers/1.jpg" alt="Sneakers #1" />
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
    );
}

export default Card;
