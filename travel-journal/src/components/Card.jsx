import React from "react"

function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                <img src={props.item.imageUrl} className="card--image"/>
                <div className="card--details">
                    <div className="card--links">
                        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="map-icon"/>
                        <span className="card--location"> {props.item.location.toUpperCase()}  </span>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card--title">{props.item.title}</h1>
                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Card