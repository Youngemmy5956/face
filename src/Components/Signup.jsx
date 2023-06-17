import { useState } from "react";
// import React {useState} from "react";
import logo from "../Assets/dF5SId3UHWd.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios
        .post("http://localhost:5000/api/auth/register", input)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
          setLoading(false);
          alert("Sign up successful");
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f0f2f5] pb-14">
      <span>
        <img src={logo} alt="" className="w-[15%] ml-[43%]" />
      </span>
      <div className=" h-[65vh] px-2 w-[48vh] ml-[40%] rounded-[[10px] w-[50%]px] mt-6 shadow-md mb-10 border-2 bg-[#fff]">
        <p className="pt-2 text-[30px] font-bold text-center  text-black">
          Create a new account{" "}
        </p>
        <p className="text-center">It's quick and easy</p>
        <hr className="w-full" />
        <form htmlFor="input" className="flex gap-4 pt-4">
          <input
            type="text"
            placeholder="First Name"
            onChange={onChangeHandler}
            name="firstname"
            id="firstname"
            className="border-[1px] border-[#8d949e] w-[50%] rounded-[4px] h-10 px-4"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={onChangeHandler}
            name="lastname"
            id="lastname"
            className="border-[1px] border-[#8d949e] w-[50%] rounded-[4px] h-10 px-4"
          />
        </form>{" "}
        <br />
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={input.email}
            onChange={onChangeHandler}
            placeholder="email"
            id="email"
            name="email"
            className="border-[1px] border-[#8d949e] w-[100%] px-4 rounded-[4px] h-10"
          />
          <input
            type="password"
            value={input.password}
            onChange={onChangeHandler}
            placeholder="password"
            name="password"
            id="password"
            className="border-[1px] border-[#8d949e] px-4 w-[100%] rounded-[4px] h-10"
          />
        </form>
        <p className="pt-2">Sign up ?</p>
        <label className="">
          <div className="gap-4 flex pt-2">
            <div className="">
              <select
                name=""
                id=""
                className="border-2 border-[#8d949e] px-[38px] py-2 rounded-[4px]"
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="" selected>
                  3
                </option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
            </div>

            <div className="">
              <select
                name=""
                id=""
                className="border-2 border-[#8d949e] px-[38px] py-2 rounded-[4px]"
              >
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="" selected>
                  Mar
                </option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">jun</option>
                <option value="">July</option>
                <option value="">Aug</option>
                <option value="">Sept</option>
                <option value="">Oct</option>
              </select>
            </div>

            <div className="">
              <select
                name=""
                id=""
                className="border-2 border-[#8d949e] px-[38px] py-2 rounded-[4px]"
              >
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="" selected>
                  2023
                </option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
                <option value="">2027</option>
                <option value="">2028</option>
                <option value="">2029</option>
                <option value="">2030</option>
              </select>
            </div>
          </div>
        </label>
        <p className="pt-2">Gender?</p>
        <div class="flex gap-4 pt-2">
          <div className="border-2 rounded-[4px] border-[#8d949e] px-[10px] w-[50%] py-2 ">
            Female <input type="radio" name="Female" id="nm" />
          </div>

          <div className="border-2 rounded-[4px] border-[#8d949e] px-[10px] w-[50%] py-2 ">
            Male <input type="radio" name="Female" id="nm" />
          </div>

          <div className="border-2 rounded-[4px] border-[#8d949e] px-[10px] w-[50%] py-2 ">
            Custom <input type="radio" name="Female" id="nm" />
          </div>
        </div>
        <span>
          <p className="text-xs font-medium text-[#8d949e] pt-2">
            People who use our service may have uploaded your contact
            information to Facebook. <b className="text-[blue]">Learn more.</b>
          </p>
          <p className="text-xs font-medium text-[#8d949e] pt-2">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time
          </p>
        </span>
        <button
          type="submit"
          className="text-[20px] px-[60px] mt-4 py-[4px] ml-[30%] bg-[green] text-white font-bold rounded-lg"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
