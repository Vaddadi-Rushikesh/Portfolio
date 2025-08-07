import ProjectCard from "./ProjectCard"

const works =[
    {
        imgSrc : '/images/esmg.png',
        title: 'Entertainment and Social media Guide',
        tags: [ 'Machine Learning', 'MERN','Deep Learning', 'MongoDB | SQL'],
        projectLink: 'https://github.com/Vaddadi-Rushikesh/Entertainment_and_Social_Media_Guide'
    },
    {
        imgSrc : '/images/weather-prediction.png',
        title: 'Weather Prediction',
        tags: ['HTML','CSS', 'JavaScript','Machine Learning'],
        projectLink: 'https://weather-tracking-16.netlify.app/'
    },
    {
        imgSrc : '/images/temperature-conv.png',
        title: 'Temperature converter',
        tags: ['HTML','CSS', 'JavaScript'],
        projectLink: 'https://temperature-converter-4225.netlify.app/'
    },
    {
        imgSrc : '/images/stop-watch.png',
        title: 'Stop watch app',
        tags: ['HTML','CSS', 'JavaScript'],
        projectLink: 'https://stop-watch-4225.netlify.app/'
    },
    {
        imgSrc : '/images/calculator.png',
        title: 'Calculator',
        tags: ['HTML','CSS', 'JavaScript'],
        projectLink: 'https://calculator-6595.netlify.app/'
    }
]

const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
                    My Portfolio highlights
            </h2>   

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc , title, tags, projectLink},key) =>(
                    <ProjectCard
                    key={key}
                    imgSrc = {imgSrc}
                    title = {title}
                    tags ={tags}
                    projectLink={projectLink}
                    />
                ))}   
            </div> 
        </div>    
    </section>
  )
}

export default Work
