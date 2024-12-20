import { useEffect, useState } from "react";

export default function Profile() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            // fetch("http://localhost:8080/profile")
            //     .then(response => response.json())
            //     .then(data => setMessage(data.message))
            //     .catch(e => `Error: ${e}`);
            document.title = "GenshinDex - Profile";
        }, []);
    
        return (
            <div>
                <h1>Profile Page</h1>
                {/* <h1>{ message }</h1> */}
            </div>
        )
}