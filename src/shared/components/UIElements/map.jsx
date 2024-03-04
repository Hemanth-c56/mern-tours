import React from "react"
import './map.css'

function Map(props){
    return <div className="map">
        <iframe className="map-con" src={`https://maps.google.com/maps?q=${props.title}&t=&z=10&ie=UTF8&iwloc=&output=embed`}></iframe>
    </div>
}

export default Map

// new code : <iframe src="https://maps.google.com/maps?q=India&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>

// old code : https://maps.google.com/maps?q=India&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed