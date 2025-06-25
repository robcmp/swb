import React from "react";
import '../css/Home.css';
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
    // STATES
    const [planets, setPlanets] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    // GET PEOPLE
    useEffect(() => {
        fetch("https://swapi.info/api/people/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPeoples(data.results))
    }, [])

    // GET PLANETS
    useEffect(() => {
        fetch("https://swapi.info/api/planets/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPlanets(data.results))
    }, [])

    // GET VEHICLES
    useEffect(() => {
        fetch("https://swapi.info/api/vehicles/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setVehicles(data.results))
    }, [])

    return (
        <>
            <div className="row">
                <h1>Characters</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {peoples.map((people, i) => <div className="col-md-3"><Card data={people} image="https://via.placeholder.com/400x200" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Planets</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {planets.map((planet, i) => <div className="col-md-3"><Card data={planet} image="https://via.placeholder.com/400x200" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1>Vehicles</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {vehicles.map((vehicle, i) => <div className="col-md-3"><Card data={vehicle} image="https://via.placeholder.com/400x200" /></div>)}
                </div>
            </div>
        </>
    );
}
export default Home;