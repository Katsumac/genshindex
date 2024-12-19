import { useEffect, useState } from "react";

export default function EditProfile() {
        const [message, setMessage] = useState("");
    
        useEffect(() => {
            fetch("http://localhost:8080/editprofile")
                .then(response => response.json())
                .then(data => setMessage(data.message))
                .catch(e => `Error: ${e}`);
        }, []);
    
        return (
            <div>
                <h1>{ message }</h1>
            </div>
        )
}