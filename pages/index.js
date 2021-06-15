import Head from 'next/head'
import { FaCode, FaBook, FaSchool } from 'react-icons/fa'
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const { skills } = require('../public/json/skills.json')
const { courses } = require('../public/json/courses.json')
const { academics } = require('../public/json/academics.json')

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
                                {skills.map((data, key) => {
                                    return (
                                        <p key={key}>
                                            <strong className="has-text-white">{data.title}: </strong>
                                            {data.content}
                                        </p>
                                    )
                                })}
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
                                {courses.map((data, key) => {
                                    return (
                                        <p key={key}>
                                            <strong className="has-text-white">{data.title} </strong>
                                            <span className="has-text-grey-light">{data.code}</span>
                                        </p>
                                    )
                                })}
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
                                {academics.map((data, key) => {
                                    return (
                                        <p key={key}>
                                            <strong className="has-text-white">{data.title}: </strong>
                                            {data.content}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Experience />

            <Projects />

            <Footer />
        </div>

    );
}

export default Home;