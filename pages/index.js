import Head from 'next/head'
import { FaCode, FaBook, FaSchool } from 'react-icons/fa'
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import styles from '../styles/index.module.css'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Philip Knott</title>
                <link rel="icon" href="img/favicon.png" type="image/x-icon" />
            </Head>

            <Hero />

            <section className="section lightblue">
                <div className="container">
                    <div className="content has-text-white">
                        <h1 className="has-text-white">About Me</h1>
                        <p>
                            Hello! My name is Philip Knott, and I am an undergraduate student at the University of Colorado
                            Boulder studying Computer
                            Science. I have a strong interest in Software Development on both the frontend and backend,
                            and I
                            love learning new technologies.
                        </p>
                        <p>
                            I grew up outside San Francisco in the Bay Area, where I have lived my entire life.
                        </p>
                        <p>
                            In addition to academics, some of my interests include skiing, tennis, longboarding,
                            biking,
                            and
                            rock-climbing.
                        </p>
                        <p>
                            Please hire me, I don't want to lifeguard anymore.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section darkblue">
                <div className="container has-text-white">
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <h1 className="has-text-white">
                                    <span className="icon is-large">
                                        <FaCode />
                                    </span>
                                    <span>Skills</span>
                                </h1>
                                <p>
                                    <strong className="has-text-white">Languages/Database: </strong>
                                    Javascript, C++, Python, Java, HTML, CSS, Bash/Zsh, PostgreSQL
                                </p>
                                <p>
                                    <strong className="has-text-white">Frameworks/Technologies: </strong>
                                    Node.js, Express, Svelte, Bulma, Bootstrap
                                </p>
                                <p>
                                    <strong className="has-text-white">Version Control/Tools: </strong>
                                    Git/Github, Visual Studio Code
                                </p>
                                <p>
                                    <strong className="has-text-white">Software: </strong>
                                    Adobe Suite, Microsoft Office Suite, Atlassian/Jira
                                </p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="content">
                                <h1 className="has-text-white">
                                    <span className="icon is-large">
                                        <FaBook />
                                    </span>
                                    <span>Coursework</span>
                                </h1>
                                <p>
                                    <strong className="has-text-white">Programming and Data Structures </strong>
                                    <span className="has-text-grey-light">CSCI 2275</span>
                                </p>
                                <p>
                                    <strong className="has-text-white">Computer Systems </strong>
                                    <span className="has-text-grey-light">CSCI 2400</span>
                                </p>
                                <p>
                                    <strong className="has-text-white">Discrete Structures </strong>
                                    <span className="has-text-grey-light">CSCI 2824</span>
                                </p>
                                <p>
                                    <strong className="has-text-white">Introduction to Data Science </strong>
                                    <span className="has-text-grey-light">CSCI 3022</span>
                                </p>
                                <p>
                                    <strong className="has-text-white">Software Development Methods {'&'} Tools </strong>
                                    <span className="has-text-grey-light">CSCI 3308</span>
                                </p>
                                <p>
                                    <strong className="has-text-white">General Physics 1-2 </strong>
                                    <span className="has-text-grey-light">PHYS 1110, 1120</span>
                                </p>
                                <p>
                                    <strong className="has-text-white">Calculus 1-2 </strong>
                                    <span className="has-text-grey-light">MATH 1300, 2300</span>
                                </p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="content">
                                <h1 className="has-text-white">
                                    <span className="icon is-large">
                                        <FaSchool />
                                    </span>
                                    <span>Academics</span>
                                </h1>
                                <p><strong className="has-text-white">School: </strong>University of Colorado, Boulder</p>
                                <p><strong className="has-text-white">Major: </strong>Computer Science</p>
                                <p><strong className="has-text-white">Department: </strong>College of Engineering {'&'} Applied Science</p>
                                <p><strong className="has-text-white">Grade: </strong>Junior (71 credits)</p>
                                <p><strong className="has-text-white">Expected Graduation: </strong>Spring 2023</p>
                                <p><strong className="has-text-white">Current GPA: </strong>3.98</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Experience />

            <Footer />
        </div>

    );
}

export default Home;