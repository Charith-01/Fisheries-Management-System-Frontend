import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function handleLogin(){

        setLoading(true)
        
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email: email,
            password: password
        }).then(
            (response)=>{
                console.log("Login successful", response.data);
                toast.success("Login successful");
                localStorage.setItem("token", response.data.token)

                const user = response.data.user;

                if(user.role == "admin"){
                    navigate("/admin")
                }
                else if(user.role == "fisherman"){
                    //Go to fisherman dashboard
                }
                else{
                    navigate("/")
                }
                      setLoading(false)
            }
        ).catch(
            (err)=>{
                console.log("Login failed", err.response.data);
                toast.error(err.response.data.message||"Login failed");
                setLoading(false)
            }
        )
    }

    return(
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full bg-white flex justify-center items-center"> 
                <div className="w-[450px] h-[700px] flex justify-center items-center flex-col">
                    <div className="w-[140px] h-[90px] bg-[url(/logo.jpg)] bg-cover bg-center bg-no-repeat mb-10"></div>
                    <h1 className="font-semibold text-gray-700 text-xl">Welcome Back!</h1>
                    <label className="text-gray-700">Log in with your Email</label>
                    <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                    } className="w-[400px] h-[50px] border border-blue-500 focus:ring-1 focus:ring-blue-700 outline-none transition-all text-center m-[10px]" type="email" placeholder="Email address*"/>
                    <input onChange={
                        (e)=>{
                            setPassword(e.target.value)
                        }
                    } className="w-[400px] h-[50px] border border-blue-500 focus:ring-1 focus:ring-blue-700 outline-none transition-all text-center m-[10px]" type="password" placeholder="Password*"/>
                    <button onClick={handleLogin} className="w-[400px] h-[50px] bg-blue-500 rounded-lg text-white cursor-pointer m-[15px] hover:bg-blue-600">
                        {
                            loading?"Loading...":"Login"
                        }
                    </button>
                    <p className="text-gray-700 m-[5px]">
                        Don't have an account?
                        &nbsp;
                        <span className="text-blue-500 cursor-pointer hover:text-blue-700 font-medium">
                            <Link to={"/register"}>Register Now</Link>
                        </span>
                    </p>
                </div>

            </div>
            <div className="w-[60%] h-full bg-[url(/login-bg.jpg)] bg-cover bg-center bg-no-repeat">

            </div>
        </div>
    )
}