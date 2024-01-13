import React from "react";
import { useForm } from "react-hook-form";
import MainButton from "../../Buttons/MainButton/MainButton";
import TextInput from "../../FormElements/Textinput/TextInput";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PasswordInput from "../../FormElements/PasswordInput/PasswordInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "", //kminchelle
      password: "", // 0lelplR
    },
  });

  const backHomePage = () =>{
    navigate(-1)
  }

  const handelLogin = (data) => {
    axios.post("https://dummyjson.com/auth/login", {
        username: data.username,
        password: data.password
    })
    .then((res)=>{
         console.log(res)
         navigate("/")
    })
    .catch((error)=> console.log(error))
    toast.error('username:kminchelle , password: 0lelplR', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
    console.log(data);
  };

  return (
    <div className="w-3/4 bg-white p-4 rounded-lg flex flex-col gap-4 items-center">
      <div>
        <h2 className="text-xl font-semibold">
          <span className="text-green-500">Login</span> | <span>Register</span>
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(handelLogin)}
        className="w-full flex flex-col items-center gap-4 px-8"
      >
        <p>Enter your username and password to Login</p>
        <TextInput
          title="Username"
          type="text"
          placeholder="ulugbek..."
          errorMessage={errors?.username?.message}
          {...register("username", { required: "Username is required" })}
        />
        <PasswordInput 
            register={register}
            errorMessage={errors?.password?.message}
            className="pr-8"
        />
        <MainButton type="submit" className="w-full rounded-lg" title="Login" />
        <div className="w-full flex items-center gap-2">
          <div className="w-full h-[1px] bg-[#d3d3d3]"></div>
          <p className="text-nowrap">Or Login with</p>
          <div className="w-full h-[1px] bg-[#d3d3d3]"></div>
        </div>

        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-4 items-center justify-center text-lg font-semibold border border-green-500 p-2 rounded-lg">
                <GoogleIcon />
                <h2>Login with Google</h2>
            </div>
            <div className="w-full flex gap-4 items-center justify-center text-lg font-semibold border border-green-500 p-2 rounded-lg">
                <FacebookIcon />
                <h2>Login with Facebook</h2>
            </div>
        </div>
        <div>
        </div>
      </form>
            <button onClick={backHomePage} className="flex items-center gap-2"><ArrowBackIcon /> Back to Home Page</button>
      <ToastContainer />
    </div>
  );
}
