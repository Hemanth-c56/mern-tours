import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/button";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/card";

import "./placeForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Eiffel Tower",
    description: "one of the most beautifly place!",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_640.jpg",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    location: {
      lat: 48.8583701,
      lng: 2.2919064,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Maldives",
    description: "Best place for vacation!",
    imageUrl:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/05125410/22.jpg",
    address: "southern India , Indian ocean",
    location: {
      lat: 3.0988219,
      lng: 67.9189464,
    },
    creator: "u2",
  },
];

function UpdatePlace() {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <Card>
        <div className="center">
          <h2>Could not find palce!</h2>
        </div>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h1>...Loading</h1>
      </div>
    );
  }

  const handleEditCLick = (event)=>{
    event.preventDefault();
    console.log("clicked")
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" onClick={handleEditCLick} disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
}

export default UpdatePlace;
