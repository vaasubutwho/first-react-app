import React from"react"
import Image from "./Image";
function Navbar(){
    return(
        <nav>
            < Image/>
            <p>React Facts.</p>
            <ul className={"navlist"}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>


    )
}
export default Navbar