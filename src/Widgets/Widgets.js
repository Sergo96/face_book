import React from "react";
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6735237408863883264"
                    height="100%"
                    width="340"
                    frameBorder="0"
                    allowFullScreen=""
                    title="Embedded post"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media">

            </iframe>
        </div>
    )
}

export default Widgets;