const { projects } = require('../public/json/projects.json')

const Projects = () => {
    return (
        <section className="section darkblue">
            <div className="container">
                <h1 className="title has-text-white">A Few Projects</h1>
                <div className="columns">
                    {projects.map((data, key) => {
                        return (
                            <div className="column is-one-third" key={key}>
                                <div className="card lightblue">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={data.image} alt="" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                            <h1><a href={data.link}>{data.title}</a></h1>
                                            <p>{data.description}</p>
                                            <p className="has-text-grey-light">{data.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            <p className="has-text-grey-light">More cards to be added to this page in the future... Meanwhile, check out my <a href="https://github.com/philipknott" target="_blank">GitHub</a> for more!</p>
            </div>
        </section>
    );
}
 
export default Projects;