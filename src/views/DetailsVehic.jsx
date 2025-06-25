import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetailsVehic = (props) => {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getDetailVehic(params.id);
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
                        <h3>Model:</h3>
                        {store.details.model}
                    </div>
                    <div className="col-md-3">
                        <h3>Manufacturer:</h3>
                        {store.details.manufacturer}
                    </div>
                    <div className="col-md-3">
                        <h3>Passengers:</h3>
                        {store.details.passengers}
                    </div>
                    <div className="col-md-3">
                        <h3>Vehicle Class:</h3>
                        {store.details.vehicle_class}
                    </div>
                </div>


            </div>
        </div>
    )
}
export default DetailsVehic;