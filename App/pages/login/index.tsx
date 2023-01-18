import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { login } from "../../http/userAPI";
import { setUser } from "../../store/reducers/userSlice";

const Login = () => {
  const [userLogin, setLogin] = useState("");
  const [userPassword, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogin = async () => {
    let data: any;
    if (userLogin && userPassword) {
      data = await login(userLogin, userPassword);
      console.log(data);
      if (data) {
        dispatch(setUser(data));
      }
      router.replace("/");
    } else {
      alert("Неправильный логин или пароль");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-80 w-72 rounded-md border border-gray-300 p-4 drop-shadow-sm flex flex-col gap-4 justify-between">
        <h1 className=" text-2xl mx-auto">Log in</h1>
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
        <div className="flex gap-1 flex-col items-start">
          <div>
            <button
              className="bg-fuchsia-500 py-2 px-4 rounded-md text-white font-medium hover:bg-fuchsia-600 transition-colors"
              onClick={() => handleLogin()}
            >
              Войти
            </button>
          </div>
          <div>
            <Link href="/registration">
              <button className="bg-fuchsia-500 py-2 px-4 rounded-md text-white font-medium hover:bg-fuchsia-600 transition-colors">
                Зарегистрироваться
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
