import {Container} from "../shared/Container.tsx";
import logo from "/assets/logo.svg"
import {navItems} from "./Navbar.tsx";
import {NavItem} from "../shared/NavItem.tsx";

export const Footer = () => {
    return (<footer className="relative pt-28 rounded-t-3xl bg-box-bg">
        <Container className="pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <img src={logo} className="w-7 h-7"/>
                    <span className="text-lg font-seibold text-heading-1">Edge AI</span>
                </div>

                <ul className="flex gap-6 text-heading-1">
                    {navItems.map((item, key) => (
                        <NavItem href={item.href} text={item.text} key={key}></NavItem>
                    ))}
                </ul>
            </div>

        </Container>
    </footer>)
}