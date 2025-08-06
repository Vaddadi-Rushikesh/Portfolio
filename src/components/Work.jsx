import ProjectCard from "./ProjectCard"

const works =[
    {
        imgSrc : '/images/project-1.jpg',
        title: 'Full Stack music app',
        tags: ['API','MVC', 'Development'],
        projectLink: 'www.google.com'
    },
    {
        imgSrc : '/images/project-2.jpg',
        title: 'Free stock photo app',
        tags: ['API','MVC', 'Development'],
        projectLink: 'www.google.com'
    },
    {
        imgSrc : '/images/project-1.jpg',
        title: 'Full Stack music app',
        tags: ['API','MVC', 'Development'],
        projectLink: 'www.google.com'
    },
    {
        imgSrc : '/images/project-2.jpg',
        title: 'Free stock photo app',
        tags: ['API','MVC', 'Development'],
        projectLink: 'www.google.com'
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
