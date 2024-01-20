function Contacts() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Контакты</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Расположение</h2>
                            <p>Марий Эл, Йошкар-Ола, 424008</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram</h2>
                            <p><a href="https://t.me/sudo_zxc">cheranev.telegram</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Почта</h2>
                            <p><a href="mailto:lasvacations@yandex.ru">lasvacations@yandex.ru</a></p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Contacts