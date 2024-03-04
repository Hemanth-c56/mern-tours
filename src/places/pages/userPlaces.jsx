import React from "react";

import PlaceList from "../components/placeList";
import { useParams } from "react-router-dom";

function UserPlaces(){
    const DUMMY_PLACES = [
        {
            id : 'p1',
            title : 'Eiffel Tower',
            description : "one of the most beautifyl place!",
            imageUrl : 'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_640.jpg',
            address : 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
            location : {
                lat : 48.8583701,
                lng : 2.2919064,
            },     
            creator : 'u1'       
        },
        {
            id : 'p2',
            title : 'Maldives',
            description : "Best place for vacation!",
            imageUrl : 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg',
            address : 'southern India , Indian ocean',
            location : {
                lat : 3.0988219,
                lng : 67.9189464,
            },     
            creator : 'u2'     
        }
    ]

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items = {loadedPlaces}/>
}

export default UserPlaces