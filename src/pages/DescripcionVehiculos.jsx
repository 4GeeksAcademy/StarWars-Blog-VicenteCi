import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const DescripcionVehiculos = () => {
    const params = useParams();
    const fotoFija = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000";
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        callVehiculo();
    }, [params.theId]);

    const callVehiculo = () => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.theId}`)
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: `guardar_vehiculo`,
                    payload: data.result.properties
                })
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="contenedor2">
            <div className="seccion-principal d-flex mb-4">
                <img src={fotoFija} alt="" className="rounded-start-4 characterimg d-flex justify-content-start" />
                <div className="descripcion text-start p-4 rounded-end-4 bg bg-dark">
                    <h2 className="text-start text-white pt-3">{store.vehiculo?.name}</h2>
                    <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam ad officiis quos fugiat corrupti ipsam? Minus vitae, autem laborum officia, at voluptates, doloremque delectus accusantium quasi dolores quos ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ut iure corporis repellendus nisi ex fugiat ipsa in consectetur voluptatibus perspiciatis voluptate natus.</p>
                </div>
            </div>
            <div className="detalles d-flex flex-row justify-content-between">
                <div>
                    <h2>Cargo capacity</h2>
                    <p>{store.vehiculo?.cargo_capacity}</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Consumables</h2>
                    <p>{store.vehiculo?.consumables}</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Cost in credits</h2>
                    <p>{store.vehiculo?.cost_in_credits}</p>
                </div>
                <div className="linea-vertical"></div>
              <div>
                    <h2>Crew</h2>
                    <p>{store.vehiculo?.crew}</p>
                </div>
                <div className="linea-vertical"></div>
            <div>
                    <h2>Length</h2>
                    <p>{store.vehiculo?.length} ft</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Manufacturer</h2>
                    <p>{store.vehiculo?.manufacturer}</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Max speed</h2>
                    <p>{store.vehiculo?.
                        max_atmosphering_speed
                    }</p>

                </div>

            </div>
        </div>
    );
};