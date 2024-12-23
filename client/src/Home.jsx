import { useEffect, useState } from "react";

import Navbar from './components/navbar';

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // fetch("http://localhost:8080/")
        //     .then(response => response.json())
        //     .then(data => setMessage(data.message))
        //     .catch(e => `Error: ${e}`);
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            {/* <h1>{ message }</h1> */}
        </div>
    )
}