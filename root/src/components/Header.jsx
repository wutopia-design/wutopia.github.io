import siteLogo from '../assets/web-header.png';

function Header() {
    return (
        <div class="header">
            <a href="#" class="logo">
                <img src={siteLogo} alt="Wutopia Logo"></img>
            </a>
            <div class="header-nav">
                <a href="projects/projects.html">Projects</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    )
}

export default Header;