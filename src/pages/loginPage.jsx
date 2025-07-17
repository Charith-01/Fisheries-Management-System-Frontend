import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){
        console.log("Email: ", email)
        console.log("Password: ", password)
        
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email: email,
            password: password
        }).then(
            (response)=>{
                console.log("Login successful", response.data);
                toast.success("Login successful");
                localStorage.setItem("token", response.data.token)

                const user = response.data.user;

                if(user.role === "admin"){
                    //Go to admin page
                }
                else if(user.role === "fisherman"){
                    //Go to fisherman page
                }
                else{
                    //Go to customer page
                }
            }
        ).catch(
            (err)=>{
                console.log("Login failed", err.response.data);
                toast.error(err.response.data.message||"Login failed");
            }
        )
    }

    return(
        <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center bg-no-repeat flex">
            <div className="w-[50%] h-full">

            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-2xl rounded-xl flex justify-center items-center flex-col">
                        <input onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        } className="w-[400px] h-[50px] border border-white rounded-2xl text-center m-[5px]" type="email" placeholder="Email"/>
                        <input onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        } className="w-[400px] h-[50px] border border-white rounded-2xl text-center m-[5px]" type="password" placeholder="Password"/>
                        <button onClick={handleLogin} className="w-[380px] h-[50px] bg-blue-500 rounded-xl text-white cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    )
}