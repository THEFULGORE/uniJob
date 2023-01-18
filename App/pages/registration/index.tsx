import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { registration } from "../../http/userAPI";
import { setUser } from "../../store/reducers/userSlice";

const Registration = () => {
  const [userLogin, setLogin] = useState("");
  const [userPassword, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    let data: any;
    if (userLogin && userPassword) {
      data = await registration(userLogin, userPassword);
      console.log(data)
      if (data) {
        dispatch(setUser(data));
      }
      router.replace("/");
    } else {
      alert("Поля пустые");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-80 w-72 rounded-md border border-gray-300 p-8 drop-shadow-sm flex flex-col gap-4 ">
        <h1 className=" text-2xl mx-auto">Registration</h1>
        <div className="flex gap-2 flex-col">
          <input
            className="w-full bg-gray-200 rounded-md p-2"
            type="text"
            placeholder="login"
            value={userLogin}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            className="w-full bg-gray-200 rounded-md p-2"
            type="password"
            placeholder="password"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-1 flex-col">
          <button
            className="bg-fuchsia-500 py-2 px-4 rounded-md text-white font-medium hover:bg-fuchsia-600 transition-colors"
            onClick={() => handleRegister()}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
