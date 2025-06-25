import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// ${(/people/g).test(props.data.url) === true ? props.data.url : ((/planets/g).test(props.data.url) === true ? props.data.url : props.data.url)}
const Card = (props) => {
    const { actions } = useContext(Context);


    const addToList = () => {
        let nameFav = props.data.name;
        console.log(nameFav);
        actions.addFavorite(nameFav);
    }

    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text mb-1">{(/people/g).test(props.data.url) === true ? <span>Gender: {props.data.gender}</span> : ((/planets/g).test(props.data.url) === true ? <span>Population: {props.data.population}</span> : "")}</p>
                <p className="card-text mb-1">{(/people/g).test(props.data.url) === true ? <span>Hair-color: {props.data.hair_color}</span> : ((/planets/g).test(props.data.url) === true ? <span>Terrain: {props.data.terrain}</span> : <span>Model: {props.data.model}</span>)}</p>
                <p className="card-text mb-1">{(/people/g).test(props.data.url) === true ? <span>Eyes-color: {props.data.eye_color}</span> : ""}</p>
            </div>
            <div className="card-footer text-center ">
                <div className="row">
                    <div className="col-md-8">
                        <Link className="btn btn-primary" to={`${(/people/g).test(props.data.url) === true ? `/detailchar/${props.data.url.match(/\d+/g)}` : ((/planets/g).test(props.data.url) === true ? `/detailplanet/${props.data.url.match(/\d+/g)}` : `/detailvehic/${props.data.url.match(/\d+/g)}`)}`}>Learn more!</Link>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-warning" onClick={() => addToList()}><i className="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;