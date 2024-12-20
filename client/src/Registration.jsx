import { useEffect, useState } from "react";

export default function Registration() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            // fetch("http://localhost:8080/registration")
            //     .then(response => response.json())
            //     .then(data => setMessage(data.message))
            //     .catch(e => `Error: ${e}`);
            document.title = "GenshinDex - Registration"
        }, []);
    
        return (
            <div>
                <h1>Registration Page</h1>
                {/* <h1>{ message }</h1> */}
            </div>
        )
}