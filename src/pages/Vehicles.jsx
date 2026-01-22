import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, dispatch } = useGlobalReducer();
    const fotoFija = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000";

    useEffect(() => {
        callVehiculos();
    }, []);

    const callVehiculos = () => {
        fetch("https://www.swapi.tech/api/vehicles?page=1&limit=21")
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: `guardar_vehiculos`,
                    payload: data.results
                })
            })
            .catch(err => console.error(err));
    };

    const toggleFavorite = (name) => {
        let actualFavorites = store.favorites;

        if (actualFavorites.includes(name)) {
            const updatedFavorites = actualFavorites.filter(item => item !== name);
            dispatch({ type: 'actualizar_favoritos', payload: updatedFavorites });
        } else {
            const updatedFavorites = [...actualFavorites, name];
            dispatch({ type: 'actualizar_favoritos', payload: updatedFavorites });
        }
    };

    return (
        <div className="text-center contenedor px-5 pt-1 bg-black">
            <div className="row row-cols-6 justify-content-center gap-3">
                {store.vehiculos.map((vehiculo) => {
                    const isFav = store.favorites.includes(vehiculo.name);
                    return (
                        <div key={vehiculo.uid} className="card bg-transparent">
                            <Link to={"/DescripcionVehiculos/" + vehiculo.uid} className="">
                                <img
                                    src={fotoFija}
                                    className="cardimg rounded-4"
                                    alt="Star Wars Background"
                                />
                            </Link>
                            <div className="card-body d-flex align-items-center">
                                <div className="flex-grow-1 text-center ps-2">
                                    <Link to={"/DescripcionVehiculos/" + vehiculo.uid} className="btn p-0">
                                        <p className="card-text text-white fs-5 m-0">{vehiculo.name}</p>
                                    </Link>
                                </div>
                                <div
                                    className="corazon p-0"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => toggleFavorite(vehiculo.name)}
                                >
                                    <p className="m-0">
                                        <i className={`fa-solid fa-heart fs-4 ${isFav ? 'text-danger' : 'text-secondary'}`}></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};