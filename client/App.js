import React, { useState } from "react";

function App() {

    const API = "http://www.boredapi.com/api/activity/";
    const [activities, setActiv] = useState();

    async function handleClick() {
        await fetch(API)
            .then(res => res.json())
            .then(data => setActiv(data));
    };

    return (
        <main>
            <h2>Bored ?</h2>
            <button onClick={handleClick}>Push me !</button>
            {activities
                ? <h3>{activities.activity}</h3>
                : <h3>Click to show one activity to do ;)</h3>
            }
        </main>
    )
}

export default App;