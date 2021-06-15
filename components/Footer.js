const Footer = () => {
    return (
        <footer className="footer pt-5" style={{ backgroundColor: '#123746' }}>
            <div className="container has-text-white has-text-centered">
                <div className="content is-size-7-mobile">
                    <p>
                        Created with Next.js and React. Styled with Bulma.
                        <a href="https://github.com/philipknott/my-website"><strong> View Github Repository</strong></a>
                    </p>
                    <p>
                        <a href="mailto: filupnot@gmail.com"><strong>filupnot@gmail.com</strong></a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;