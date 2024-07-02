import styles from "./process.module.css"

import {useState, useEffect } from 'react'
import TableRow from "./tableRow"

let flightData = [
    {
        departing: "16:00",
        destination: "Halifax, CAN",
        flightNumber: "Y9521",
        gate: "D35",
        status: "Delayed",
    },
    {
        departing: "16:24",
        destination: "Jamaica",
        flightNumber: "TD403",
        gate: "A45",
        status: "On time",
    },
    {
        departing: "20:45",
        destination: "Krakow, Poland",
        flightNumber: "FR532",
        gate: "K48",
        status: "On time",
    },
    {
        departing: "17:40",
        destination: "Oman",
        flightNumber: "T5563",
        gate: "T10",
        status: "Cancelled",
    },
    {
        departing: "16:10",
        destination: "St Louis, USA",
        flightNumber: "AC8795",
        gate: "F64",
        status: "Delayed",
    },
    {
        departing: "20:50",
        destination: "New York, USA",
        flightNumber: "CR882",
        gate: "S77",
        status: "On Time",
    },
    {
        departing: "11:40",
        destination: "Toronto, CA",
        flightNumber: "BD5211",
        gate: "G40",
        status: "On time",
    },
    {
        departing: "12:05",
        destination: "Vancouver, BC",
        flightNumber: "LV324",
        gate: "V12",
        status: "Cancelled",
    },
]

export default function TableBody() {
    const [flights, setFlights] = useState([])
    const getFlights = () => {
        // simulating api call
        setFlights(flightData);
    }

    useEffect(() => getFlights(), [])
    console.log(flights)

    return (
        <tbody>
            {flights?.map((flight, _index) => (
                <TableRow key={_index} flight={flight}/>
            ))}
            
        </tbody>
    )
};