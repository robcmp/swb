import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailsPlanet = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailPlanet(params.id);
    })

    return (
        <div className="p-5 mb-4 bg-light rounded-3 bg-dark mt-5">
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://via.placeholder.com/800x600" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold text-light">{store.details.name}</h1>
                        <p className="col-md-8 fs-4 text-light">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    </div>
                </div>
                <div className='row text-light mt-3'>
                    <div className="col-md-3">
                        <h3>Diameter:</h3>
                        {store.details.diameter}
                    </div>
                    <div className="col-md-3">
                        <h3>Climate:</h3>
                        {store.details.climate}
                    </div>
                    <div className="col-md-3">
                        <h3>Terrain:</h3>
                        {store.details.terrain}
                    </div>
                    <div className="col-md-3">
                        <h3>Population:</h3>
                        {store.details.population}
                    </div>
                </div>


            </div>
        </div>
    )
}
export default DetailsPlanet;