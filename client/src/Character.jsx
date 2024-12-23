import { useEffect, useState } from "react";

import Navbar from './components/navbar';

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
                <Navbar />
                <h1>Character Page</h1>
                {/* <h1>{ message }</h1> */}
            </div>
        )
}