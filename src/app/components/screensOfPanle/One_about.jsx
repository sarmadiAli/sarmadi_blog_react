import React from 'react'

export default function One_about() {
    return (
        <div className="content_about">
            <div className="card_about ">
                <div className="firstinfo">
                    <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
                    <div className="profileinfo">
                        {/* <h1>Francesco Moustache</h1> */}
                        <h3>Js & React Developer</h3>
                        <div className="bio">

                            An ambitious problem solver .
                            I have  experience of creating logical and innovative solutions to complex problems.
                            I am thorough and precise in everything I do, and have a keen interest in technology and web applications.
                            As someone who takes responsibility for his own personal development,
                            I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development..<br /><br />
                            <div className='contectMe'>
                                <p>Contect Me : </p>
                                <span className='devicon-google-plain colored'></span>
                                <span className="devicon-github-original-wordmark colored "></span>
                                <span className="devicon-linkedin-plain colored"></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badgescard">
                <span className="devicon-javascript-plain "></span>
                <span className="devicon-typescript-plain colored "></span>
                <span className="devicon-react-original " ></span>
                <span className="devicon-nextjs-original colored "></span>
                <span className="devicon-redux-original colored"></span>
                <span className="devicon-css3-plain-wordmark colored"></span>
                <span className="devicon-tailwindcss-original-wordmark "></span>
                <span className="devicon-sass-original colored "></span>
                <span className="devicon-materialui-plain colored "></span>
                <span className="devicon-bootstrap-plain colored "></span>

            </div>
        </div>
    )
}
