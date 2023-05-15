import "./Social.css"
import "./SocialQueries.css"


function Social({socials, urls}) {
    const stretch = (e) => {

    }

    return (
        <div className="social-container">
            <div className="social-centered">
                <div className="introduction">
                    <p>GET IN TOUCH</p>
                    <h1>SOCIAL</h1>
                </div>  
                <div className="social">
                    <div className="social-box" onClick={() => {window.open(urls[0])}}>
                        <div className="social-icon github"></div>
                        <div className="social-name">{socials[0]}</div>
                    </div>
                    <div className="social-box" onClick={() => {window.open(urls[1])}}>
                        <div className="social-icon discord"></div>
                        <div className="social-name">{socials[1]}</div>
                    </div>
                    <div className="social-box" onClick={() => {window.open(urls[2])}}>
                        <div className="social-icon telegram"></div>
                        <div className="social-name">{socials[2]}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social
