import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className="p-2 z-10 w-full absolute">
            <nav className="bg-black py-1 px-4  flex justify-between items-center max-container">
                <a href="/">
                    <img
                        className="size-11"
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-8 max-md:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-md text-white"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-md:block">
                    <img
                        className="fill-white"
                        src={hamburger}
                        alt="Hamburger"
                        width={24}
                        height={24}
                    ></img>
                </div>
            </nav>
        </header>
    )
}

export default Nav
