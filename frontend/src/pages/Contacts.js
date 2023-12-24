function Contacts() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Mari El, Yoshkar-Ola</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79961166348">+7 (996) 116-63-48</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:lasvacations@yandex.ru">lasvacations@yandex.ru</a></p>
                        </li>
                    </ul>

                </div>
            </main>
        </>
    )
}

export default Contacts