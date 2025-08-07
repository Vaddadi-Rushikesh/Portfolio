


const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Interships',
    number: 2
  }
];


const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-3 md:mb-3 md:text-xl md:max-w-[70ch]">
                    Welcome! I’m V Rushikesh, a dedicated Web Developer and Data Analyst who enjoys turning ideas into smart, user-friendly applications. I'm currently pursuing my Bachelor's degree in Data Analytics and Machine Learning, where I’m building a strong foundation in both software development and data science.
                </p>
                <p className="text-zinc-300 mb-3 md:mb-3 md:text-xl md:max-w-[70ch]">
                    I love working on real-world projects that blend machine learning, data visualization, and modern web technologies like React, Flask, and MongoDB.
                </p>
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]">
                    Let’s build something meaningful together!
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label,number},key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img 
                    src="/images/logo.svg" 
                    alt="Logo"
                    width={30}
                    height={30} 
                    className="ml-auto md:w-[40px] md:h-[40px]" 
                    />

                </div>
            </div>

        </div>
        
    </section>
  )
}

export default About
