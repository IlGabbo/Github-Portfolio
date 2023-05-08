import Earth from "./Earth"

function Social({socials}) {
    return (
        <div className="social-container">
            <div className="social-centered">
                <div className="introduction">
                    <p>GET IN TOUCH</p>
                    <h1>SOCIAL</h1>
                </div>  
                <div className="social">
                    <div className="social-box" onMouseOver={(e) => {
                        console.log("aaa")
                    }}>
                        <div className="social-icon github"></div>
                        <div className="social-name">{socials[0]}</div>
                    </div>
                    <div className="social-box">
                        <div className="social-icon discord"></div>
                        <div className="social-name">{socials[1]}</div>
                    </div>
                    <div className="social-box">
                        <div className="social-icon telegram"></div>
                        <div className="social-name">{socials[2]}</div>
                    </div>
                </div>
                <div className="where-i-am-cnt">
                    
                </div>
            </div>
        </div>
    )
}

export default Social
