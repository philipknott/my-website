import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar is-dark">
            <div className="container">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" data-target="navMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">About</a>
                        </Link>
                        <a className="navbar-item"
                            href="https://drive.google.com/file/d/1dlA72u353dnxsp6ORHVCN6I-dqJ9zHX-/view" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;