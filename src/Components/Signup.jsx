import React from "react";

export default function Signup() {
  return (
    <div className="bg-[#f0f2f5]">
      <div className=" h-[50vh] px-2 w-[45vh] border-[#8d949e] border-2 bg-[#fff]">
        <p className="pt-4 text-[30px] font-bold text-center  text-black">Create a new account </p>
        <p className= "text-center">It's quick and easy</p>
          <hr className="w-full"/>

          <form htmlFor="input" className="flex gap-4 pt-4">
          <input type="text" placeholder="First Name" name="firstname" id="" className="border-[1px] border-[#8d949e] w-[50%] rounded-[4px] h-10 px-4" /> 
           <input type="text" placeholder="Last Name" name="lastname" id="" className="border-[1px] border-[#8d949e] w-[50%] rounded-[4px] h-10 px-4"/>
          </form>   <br />
          


            <form action="" className="flex flex-col gap-4">
            <input type="email" placeholder="email" name="email" id="" className="border-[1px] border-[#8d949e] w-[100%] px-4 rounded-[4px] h-10"/>
          <input type="password" placeholder="password" name="password" id="" className="border-[1px] border-[#8d949e] px-4 w-[100%] rounded-[4px] h-10" />
            </form>
          <p>Sign up ?</p>

           <label>
              <span><select name="" id="res1">
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
              </select></span>

              <span>
              <select name="" id="res2">
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

              </span>

              <span>
              <select name="" id="res3">
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
              </span>
           </label>

           <div class="flex">
              <div >
                Female <input type="radio" name="Female" id="nm" />
              </div>

              <div >
                Male <input type="radio" name="Female" id="nm" />
              </div>

              <div id="nm">
                Custom <input type="radio" name="Female" id="nm" />
              </div>
            </div>
        
          
      </div>
    </div>
  );
}
