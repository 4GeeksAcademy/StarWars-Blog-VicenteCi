import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	const deleteFavorite = (e, name) => {
		e.stopPropagation(); 
		const updatedFavorites = store.favorites.filter(item => item !== name);
		dispatch({ type: 'actualizar_favoritos', payload: updatedFavorites });
	};

	return (
		<nav className="navbar navbar-light bg-black d-flex justify-content-between px-5 pb-2">
			<Link to="/">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="logo starwars" className="logo w-25 my-2 ms-5" />
			</Link>
			<div className="opciones d-flex">
				<Link to="/" className="text-decoration-none text-white"><h3>Characters</h3></Link>
				<div className="vr mx-4" style={{ height: "30px", backgroundColor: "rgb(223, 223, 223)" }}></div>
				<Link to="/vehicles" className="text-decoration-none text-white"><h3>Vehicles</h3></Link>
				<div className="vr mx-4" style={{ height: "30px", backgroundColor: "rgb(223, 223, 223)" }}></div>
				<Link to="/planetas" className="text-decoration-none text-white"><h3>Planets</h3></Link>
			</div>

			<div className="dropdown">
				<button 
					className="btn btn-lg fs-4 dropdown-toggle me-5 mb-1 text-white shadow-none" 
					type="button" 
					data-bs-toggle="dropdown" 
					aria-expanded="false" 
					data-bs-auto-close="outside"
				>
					Favorites 
					<span className="badge ms-2">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary">
					{store.favorites.length === 0 ? (
						<li><span className="dropdown-item text-white-50">Empty</span></li>
					) : (
						store.favorites.map((fav, index) => (
							<li key={index} className="d-flex justify-content-between align-items-center px-2 py-1">
								<span className="text-white ps-2">{fav}</span>
								<i 
									className="fa-solid fa-trash text-danger pe-2" 
									style={{cursor: "pointer"}}
									onClick={(e) => deleteFavorite(e, fav)}
								></i>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};