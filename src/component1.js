import React from 'react'

const Component1 = (props) => {
    return (
        <div className="maincard">
            <div className="card2">
                <div className="card3">
                    <img src={props.images} className="image1"></img>
                </div>
                <span className="title"><h3>{props.titles}</h3></span>
                <span><p> {props.describe}</p></span>

            </div>
        </div>

    )
}

export default Component1