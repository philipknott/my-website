const { experience } = require('../public/json/experience.json')

const Experience = () => {
    return (
        <section className="section lightblue">
            <div className="container">
                <h1 className="title has-text-white">Experience</h1>
                {experience.map((data, key) => {
                    return (
                        <div className="media" key={key}>
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={data.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h2 className="has-text-white mb-1">{data.company}</h2>
                                    <p className="has-text-grey-light">{data.location}</p>
                                    {data.roles.map((data, key) => {
                                        return (
                                            <div className="pb-5" key={key}>
                                                <h5 className="has-text-grey-light mb-1"><strong>{data.title}</strong> | {data.startdate} - {data.enddate}</h5>
                                                <ul className="has-text-white mt-0">
                                                    {data.description.map((data, key) => {
                                                        return (
                                                            <li key={key}>
                                                                {data}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Experience;