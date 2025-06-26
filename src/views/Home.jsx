import React, { useState, useEffect } from "react";
import '../css/Home.css';
import Card from "../components/Card";

const Home = () => {
  const [peoples, setPeoples]   = useState([]);
  const [planets, setPlanets]   = useState([]);
  const [vehicles, setVehicles] = useState([]);

 const fetchResource = async (resource, setter) => {
  const url = `/api/${resource}`;      // no trailing slash
  console.log(`[fetchResource] Fetching →`, url);

  try {
    const res = await fetch(url);
    console.log(`[fetchResource] ${resource} status:`, res.status, res.statusText);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = await res.json();
    console.log(`[fetchResource] ${resource} JSON:`, json);

    // if `json.results` is missing, fall back to the raw JSON
    const payload = Array.isArray(json.results) 
      ? json.results 
      : (Array.isArray(json) ? json : []);
    setter(payload);
  } 
  catch (err) {
    console.error(`[fetchResource] Error loading ${resource}:`, err);
    setter([]);
  }
};

  useEffect(() => { fetchResource("people", setPeoples); }, []);
  useEffect(() => { fetchResource("planets", setPlanets); }, []);
  useEffect(() => { fetchResource("vehicles", setVehicles); }, []);

  return (
    <>
      <section>
        <h1>Characters</h1>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
          {peoples.map((p, i) =>
            <div key={i} className="col-md-3">
              <Card data={p} image="https://via.placeholder.com/400x200" />
            </div>
          )}
        </div>
      </section>

      <section>
        <h1>Planets</h1>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
          {planets.map((p, i) =>
            <div key={i} className="col-md-3">
              <Card data={p} image="https://via.placeholder.com/400x200" />
            </div>
          )}
        </div>
      </section>

      <section>
        <h1>Vehicles</h1>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
          {vehicles.map((v, i) =>
            <div key={i} className="col-md-3">
              <Card data={v} image="https://via.placeholder.com/400x200" />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
