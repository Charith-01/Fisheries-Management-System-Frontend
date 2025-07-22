import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleRegister() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, {
                firstName,
                lastName,
                email,
                password,
                phone,
            });

            toast.success("Registration successful");
            navigate("/login");
        } catch (err) {
            console.log("Registration failed", err.response?.data);
            toast.error(err.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center bg-no-repeat flex">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] min-h-[650px] backdrop-blur-xl shadow-2xl rounded-xl flex justify-center items-center flex-col p-5 space-y-3">
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-[400px] h-[45px] border border-white rounded-2xl text-center"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-[400px] h-[45px] border border-white rounded-2xl text-center"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] h-[45px] border border-white rounded-2xl text-center"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-[400px] h-[45px] border border-white rounded-2xl text-center"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[400px] h-[45px] border border-white rounded-2xl text-center"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-[400px] h-[45px] border border-white rounded-2xl text-center"
                    />
                    <button
                        onClick={handleRegister}
                        className="w-[400px] h-[50px] bg-blue-500 rounded-xl text-white cursor-pointer"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                    <p className="text-gray-300">
                        Already have an account?&nbsp;
                        <span className="text-blue-700 cursor-pointer hover:text-blue-900">
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
