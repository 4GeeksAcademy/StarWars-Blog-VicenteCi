import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const DescripcionPersonaje = () => {
    const params = useParams();
    const fotoFija = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000";
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        callPersonaje();
    }, [params.theId]);

    const callPersonaje = () => {
        fetch(`https://www.swapi.tech/api/people/${params.theId}`)
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: `guardar_personaje`,
                    payload: data.result.properties
                })
            })
            .catch(err => console.error(err));
    };
    console.log(store.personaje)
    return (
        <div className="contenedor2">
            <div className="seccion-principal d-flex mb-4">
                <img src={fotoFija} alt="" className="characterimg rounded-start-4 d-flex justify-content-start" />
                <div className="descripcion text-start p-4 rounded-end-4 bg bg-dark">
                    <h2 className="text-start text-white pt-3">{store.personaje?.name}</h2>
                    <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam ad officiis quos fugiat corrupti ipsam? Minus vitae, autem laborum officia, at voluptates, doloremque delectus accusantium quasi dolores quos ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ut iure corporis repellendus nisi ex fugiat ipsa in consectetur voluptatibus perspiciatis voluptate natus.</p>
                </div>
            </div>
            <div className="detalles d-flex flex-row justify-content-between">

                <div className="">
                    <h2>Birth Year</h2>
                    <p>{store.personaje?.birth_year}</p>
                </div>
                <div className="linea-vertical"></div>
                <div className="">
                    <h2>Eye Color</h2>
                    <p>{store.personaje?.eye_color}</p>
                </div>
                <div className="linea-vertical"></div>
                <div className="">
                    <h2>Gender</h2>
                    <p>{store.personaje?.gender}</p>
                </div>
                <div className="linea-vertical"></div>
                <div className="">
                    <h2>Height</h2>
                    <p>{store.personaje?.height}cm</p>
                </div>
                <div className="linea-vertical"></div>
                <div className="">
                    <h2>Mass</h2>
                    <p>{store.personaje?.mass}kg</p>
                </div>
                <div className="linea-vertical"></div>
                <div className="">
                    <h2>Skin color</h2>
                    <p>{store.personaje?.skin_color}</p>

                </div>
            </div>
        </div>
    );
};