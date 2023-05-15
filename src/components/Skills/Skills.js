import "./Skills.css"
import "./SkillsQueries.css"


const languages = [
    {name: "Python", description: "RATS or keyloggers", logo: "python"},
    {name: "Java", description: "...", logo: "java"},
    {name: "CSS", description: "Stylizing webpages", logo: "css"},
    {name: "JS", description: "null >= 0 -> true", logo: "js"},
    {name: "NodeJS", description: "JavaScript without browser", logo: "nodejs"},
    {name: "ElectronJS", description: "Desktop apps without C++ or Java", logo: "electronjs"},
    {name: "ReactJS", description: "Dynamic webpages", logo: "reactjs"},
    {name: "MySQL", description: "Storing data without protect the db from sql injections", logo: "mysql"},
    {name: "Git", description: "git push -> failed", logo: "git"}
]

function PrintBoxes() {
    const boxes = languages.map((el, key) =>        
        <div key={key} className="skill-box">
            <div className="skill-content">
                <div className={"skill-logo " + el.logo}></div>
                <div className="skill-title">{el.name}</div>
                <div className="skill-description">{el.description}</div>
            </div>
        </div>
        )

    return (
        <div className="skills-centered">
            <div className="introduction">
                <div>
                    <p>WHAT I DO</p>
                    <h1>SKILLS</h1>
                </div>                    
            </div>  
            <div className="row">
                {boxes}
            </div>
        </div>
    )
}



export default function Skills() {
    return (
        <div className="skills-container">
            <PrintBoxes></PrintBoxes>
        </div>
    )
}