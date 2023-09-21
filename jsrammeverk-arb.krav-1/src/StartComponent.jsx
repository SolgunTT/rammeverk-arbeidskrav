import React from "react";
import StartButton from "./StartButton";
import InputField from "./InputField";

const StartComponent = () => {

    const regName = () => {

        console.log("navn")

    }

    return (

        <div>
        <InputField />
        <StartButton  />
        </div>

    )
}


export default StartComponent;