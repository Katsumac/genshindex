import { useEffect, useState } from "react";

export default function Character() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            // fetch("http://localhost:8080/character")
            //     .then(response => response.json())
            //     .then(data => setMessage(data.message))
            //     .catch(e => `Error: ${e}`);
            document.title = "GenshinDex - Character";
        }, []);
    
        return (
            <div>
                <h1>Character Page</h1>
                {/* <h1>{ message }</h1> */}
            </div>
        )
}