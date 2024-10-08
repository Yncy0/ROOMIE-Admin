import React from "react";
import { useClickAway } from "react-use";
import Hamburger from "hamburger-react";
import NavBarComponent from "./NavBarComponent";

export default function HamburgerMenuComponent() {
    const [isOpen, setIsOpen] = React.useState(false)
    const ref = React.useRef(null);

    useClickAway(ref, ()=> setIsOpen(false));

    return(
        <div className="button-menu-div" ref={ref}>
            
            <Hamburger size={24} toggle={setIsOpen} toggled={isOpen}/> 
            { isOpen &&(
                    <NavBarComponent/>
                )
            }
            <h1>ROOMIE</h1>
        </div>
    )
}