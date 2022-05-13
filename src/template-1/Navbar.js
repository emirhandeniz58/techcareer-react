
function Navbar(){

    return(<>
    <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <a href="#home" className="w3-bar-item w3-button">
        <b>BR</b> Architects
        </a>
        {/* Float links to the right. Hide them on small screens */}
        <div className="w3-right w3-hide-small">
        <a href="#projects" className="w3-bar-item w3-button">
            Projects
        </a>
        <a href="#about" className="w3-bar-item w3-button">
            About
        </a>
        <a href="#contact" className="w3-bar-item w3-button">
            Contact
        </a>
        </div>
    </div>
    </div>

    </>)
}

export default Navbar