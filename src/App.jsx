import { useState, useEffect } from 'react'
import './App.css'

function App(){
    const [time, setTime]= useState(new Date());

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const date = time.getDate();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = time.getFullYear();

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return(() => {
            clearInterval(id);
        })
    }, []);

    return(
        <>
        <div className="mainFrame">
            <h2>{hours.toString().padStart(2, "0")} : {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}</h2>
            <h4>{day[time.getDay()-1]}, {date} {month[time.getMonth()]} {year}</h4>
        </div>
        </>
    );
}

export default App
