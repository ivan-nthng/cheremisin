import { headerLogo } from '../assets/images'

const Nav = () => {
    return (
        <header>
            <nav className="bg-black">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
            </nav>
        </header>
    )
}

export default Nav
