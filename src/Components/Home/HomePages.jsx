import { Link } from "react-router-dom";
import tv from "../../assets/tv.svg";
import { useState } from "react";
import search from "../../assets/icon.svg";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className=" w-full">
      <div className=" w-full h-[300px] bg-black">
        <nav className="">
          <div className="flex flex-row w-full item-center">
            <img src={tv} className="w-7" />
            <h1 className="text-white font-semibold justify-between">
              MovieBox
            </h1>
            <form className="flex gap-12 justify-center">
              <input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="What movie do you want?"
              />
            </form>
            <p className="text-white">Sign in</p>
            <img src={search} />
          </div>
        </nav>
      </div>
    </div>
   
  );

}
export default Home;
