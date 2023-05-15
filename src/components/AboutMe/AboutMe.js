import "./AboutMe.css"
import "./AboutMeQueries.css"


function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-centered">
                <div className="introduction">
                    <p>INTRODUCTION</p>
                    <h1>ABOUT ME</h1>
                </div>
                <div className="aboutme-description">
                    <span className="welcome">Hey, you're welcome!</span><br/>
                    I am Gabbo, a passionate software and web <br /> developer.<br/>
                    <span></span>
                    I program small software and websites to expand my knowledge in this field with the ability to use it to <br /> collaborate with teams or individuals.<br/>
                    <span></span>
                    In addition to programming I also have a passion for <br /> the violin for at least 8 years <br/>
                </div>
                <div className="aboutme-image"></div>
            </div>
        </div>
    )
}

export default AboutMe