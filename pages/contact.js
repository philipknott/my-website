import Head from 'next/head'
import Navbar from '../components/Navbar';
import Link from 'next/link'

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="img/favicon.png" type="image/x-icon" />
            </Head>

            <section className="hero is-dark is-fullheight">
                <div className="hero-head">
                    <Navbar />
                </div>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1 has-text-white">Contact Page</h1>
                        <p className="subtitle has-text-grey-light">Coming soon...</p>
                        <br />
                        <a href="/">
                            <button className="button is-warning">
                                Back To Homepage
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;