import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full h-[70px] bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg sticky top-0 z-50 flex justify-center items-center">
            <div className="w-[500px] h-full flex justify-evenly items-center text-white">
                <Link className="hover:text-black" to="/">Home</Link>
                <Link className="hover:text-black" to="/products">Products</Link>
                <Link className="hover:text-black" to="/contact">Contact</Link>
                <Link className="hover:text-black" to="/reviews">Reviews</Link>
            </div>
        </header>
    )
}