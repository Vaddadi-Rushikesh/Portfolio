import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySql',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  // {
  //   imgSrc: '/images/c.svg',
  //   label: 'C',
  //   desc: 'Programming language'
  // },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming language'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming language'
  },
  {
    imgSrc: '/images/tableau.svg',
    label: 'Tableau',
    desc: 'Data Visualization'
  },
  {
    imgSrc: '/images/machine-learning.svg',
    label: 'Machine Learning',
    desc: 'Machine Learning'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/jupyter.svg',
    label: 'Jupyter Notebook',
    desc: 'Interactive programming'
  },
];

const Skill = () => {
  return (
   <section className="section">
        <div className="container">

            <h2 className="headline-2">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc },key) =>(
                        <SkillCard 
                          key = {key}
                          imgSrc={imgSrc}
                          label = {label}
                          desc = {desc}
                        />
                    ))
                }
            </div>

        </div>
   </section>
  )
}

export default Skill;