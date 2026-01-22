import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const DescripcionPlanetas = () => {
    const params = useParams();
    const fotoFija = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000";
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        callPlaneta();
    }, [params.theId]);

    const callPlaneta = () => {
        fetch(`https://www.swapi.tech/api/planets/${params.theId}`)
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: `guardar_planeta`,
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
                    <h2 className="text-start text-white pt-3">{store.planeta?.name}</h2>
                    <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam ad officiis quos fugiat corrupti ipsam? Minus vitae, autem laborum officia, at voluptates, doloremque delectus accusantium quasi dolores quos ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ut iure corporis repellendus nisi ex fugiat ipsa in consectetur voluptatibus perspiciatis voluptate natus.</p>
                </div>
            </div>
            <div className="detalles d-flex flex-row justify-content-between">
                <div>
                    <h2>Climate</h2>
                    <p>{store.planeta?.climate}</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Diameter</h2>
                    <p>{store.planeta?.diameter} km2</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Gravity</h2>
                    <p>{store.planeta?.gravity}</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Orbital period</h2>
                    <p>{store.planeta?.orbital_period}</p>

                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Population</h2>
                    <p>{store.planeta?.population}</p>
                </div>
                <div className="linea-vertical"></div>
                <div className="surface">
                    <h2>Surface water</h2>
                    <p>{store.planeta?.surface_water}</p>
                </div>
                <div className="linea-vertical"></div>
                <div>
                    <h2>Terrain</h2>
                    <p>{store.planeta?.terrain}</p>

                </div>

            </div>
        </div>
    );
};