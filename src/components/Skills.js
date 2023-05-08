const languages = [
    {name: "Python", description: "I use Python to develop projects on cybersecurity, such as RATs or keyloggers. I will learn how to use django to create website backends", logo: "python"},
    {name: "Java", description: "Honestly, I never used it outside of school to develop personal projects", logo: "java"},
    {name: "CSS", description: "I started learning CSS in 2021, then personal projects such as a personal cloud increased my knowledge", logo: "css"},
    {name: "JS", description: "I started learning JS in the summer 2021 to develop a personal cloud", logo: "js"},
    {name: "NodeJS", description: "I started learning NodeJs because it was required by ElectronJS to develop a personal Password Manager", logo: "nodejs"},
    {name: "ElectronJS", description: "I used ElectronJS to develop a simple local Password Manager with a good design", logo: "electronjs"},
    {name: "ReactJS", description: "After Electron, I started learning React to develop interactive websites. It was better learn React before ElectronJs", logo: "reactjs"},
    {name: "MySQL", description: "I used MySQL to store users credentials when I developed the personal cloud. Today I use it with sqlite3 when I need to store something locally", logo: "mysql"},
    {name: "Git", description: "Git is the best choice if you want to save somewhere your projects and then develop them on another device", logo: "git"}
]

function PrintBoxes() {
    const sas = languages.map((el, key) => 
        <div key={key} className="skill-box">
            <div className="skill-content">
                <div className={"skill-logo " + el.logo}></div>
                <div className="skill-title">{el.name}</div>
                <div className="skill-description">{el.description}</div>
            </div>
        </div>
        )
    return (
       <div className="carousel">{sas}</div>
    )
}



export default function Skills() {
    return (
        <div className="skills-container">
            <div className="skills-centered">
                <div className="introduction">
                    <div>
                        <p>WHAT I DO</p>
                        <h1>SKILLS</h1>
                    </div>                    
                </div>  
                <PrintBoxes />
            </div>
        </div>
    )
}