import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
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
                        <a href="/" className="navbar-item">
                            Home
                        </a>
                        <a href="/contact" className="navbar-item">
                            Contact
                        </a>
                        <a href="https://drive.google.com/file/d/1dlA72u353dnxsp6ORHVCN6I-dqJ9zHX-/view" target="_blank" className="navbar-item">
                            Resume
                        </a>
                        
                        {/* <a className="navbar-item" key='1'>
                            <Link href="/">
                                Home
                            </Link>
                        </a>
                        <a className="navbar-item" key='2'>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </a>
                        <a className="navbar-item"  key='3' href="https://drive.google.com/file/d/1dlA72u353dnxsp6ORHVCN6I-dqJ9zHX-/view" target="_blank">
                            Resume
                        </a> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;