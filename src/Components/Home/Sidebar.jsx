import tv from "../../assets/tv.svg";
import home from "../../assets/Home.svg";
import movies from "../../assets/Movie Projector.svg";
import tvSeries from "../../assets/TV Shows.svg";
import calender from "../../assets/Calendar.svg";
import logout from "../../assets/logout.svg";

const sidebar = () => {
  return (
    <div className="w-fit h-screen border-2px flex item-center ">
      <div
        className="w-full flex flex-col lg:w-6"
      >
        <ul className="lg:flex lg:gap-4 px-7 py-5">
          <li>
            <img src="tv" />
            <a href="#">MovieBox</a>
          </li>
          <li>
            <img src="home" />
            <a href="#">Home</a>
          </li>
          <li>
            <img src="movies" />
            <a href="#">Movies</a>
          </li>
          <li>
            <img src="tvSeries" />
            <a href="#">TV Series</a>
          </li>
          <li>
            <img src="calender" />
            <a href="#">Upcoming</a>
          </li>
          <li>
            <img src="logout" />
            <a href="#">LogOut</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

