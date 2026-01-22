import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Planetas = () => {
    const { store, dispatch } = useGlobalReducer();
    const fotoFija = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2000";


    useEffect(() => {
        callplanets();
    }, []);

    const callplanets = () => {
        fetch("https://www.swapi.tech/api/planets?page=1&limit=21")
            .then(res => res.json())
            .then((data) => {
                dispatch({
                    type: `guardar_planetas`,
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
                {store.planetas.map((planeta) => {
                    const isFav = store.favorites.includes(planeta.name);
                    return (
                        <div key={planeta.uid} className="card bg-transparent">
                            <Link to={"/DescripcionPlanetas/" + planeta.uid} className="">
                                <img
                                    src={fotoFija}
                                    className="cardimg rounded-4"
                                    alt="Star Wars Background"
                                />
                            </Link>
                            <div className="card-body d-flex align-items-center">
                                <div className="flex-grow-1 text-center ps-2">
                                    <Link to={"/DescripcionPlanetas/" + planeta.uid} className="btn p-0">
                                        <p className="card-text text-white fs-5 m-0">{planeta.name}</p>
                                    </Link>
                                </div>
                                <div
                                    className="corazon p-0"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => toggleFavorite(planeta.name)}
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