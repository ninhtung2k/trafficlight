import React from "react";
import Light from "../Light/Light";
import "./TrafficLight.css";


export default function TrafficLight() {
    const [lightOn, setLightOn] = React.useState("red");

    const turnOnNextLight = () => {
       if(lightOn === "red"){
        setLightOn("yellow")
        return;
       }

       if(lightOn === "yellow"){
        setLightOn("green")
        return;
       }

       if(lightOn === "green"){
        setLightOn("red")
        return;
       }
    };

    return(
     <div>
        <div className="trafficlight">
        <Light color={"red"} isOn={lightOn === "red"} />
        <Light color={"yellow"} isOn={lightOn === "yellow"} />
        <Light color={"green"} isOn={lightOn === "green"} />
     </div>
     <button onClick={turnOnNextLight}>Next</button>
     </div>
    );
}