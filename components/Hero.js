import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <section className="hero is-dark is-fullheight has-background">
            <div className="hero-head">
                <Navbar />
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <figure className="image pb-6 headshot">
                        <img className="is-rounded" src="img/headshot-alt.png" />
                    </figure>

                    <h1 className="title is-1">
                        Philip Knott
                    </h1>
                    <p className="subtitle">
                        Full Time CS Student
                    </p>
                    <br />
                    <p className="mt-5">
                        <a href="https://www.linkedin.com/in/philip-knott/" target="_blank">
                            <span className="icon is-large">
                                <FaLinkedin size={32} />
                            </span>
                        </a>
                        {' '}
                        <a href="https://github.com/philipknott" target="_blank">
                            <span className="icon is-large">
                                <FaGithub size={32} />
                            </span>
                        </a>
                        {' '}
                        <a href="https://www.instagram.com/philip_knott/" target="_blank">
                            <span className="icon is-large">
                                <FaInstagram size={32} />
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;