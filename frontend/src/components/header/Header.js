import "./style.css"


function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Ruslan</em></strong><br/>
                    a QA Performance
                </h1>
                <div className="header__text">
                    <p>example text for portfolio</p>
                </div>
                <a href="#!" className="btn">Test my application</a>
            </div>
        </header>
    )
}
export default Header