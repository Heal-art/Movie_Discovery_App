import facebook from "../../assets/fa-brands_facebook-square.svg";
import instagram from "../../assets/fa-brands_instagram.svg";
import twitter from "../../assets/fa-brands_twitter.svg";
import youtube from "../../assets/fa-brands_youtube.svg";

const Footer = () => {
  return (
    <div className="h-[20rem] flex justify-center items-center">
      <div className="w-3/4 md:-1/2 h-fit flex flex-col gap-8">
        <span className="flex gap-9 justify-center">
          <img src={facebook} />
          <img src={instagram} />
          <img src={twitter} />
          <img src={youtube} />
        </span>

        <ul className="text-sm flex gap-8 justify-center text-black font-semibold">
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
        <p className="text-center text-gray-600 font-semibold">
          © 2021 MovieBox by Adriana Eka Prayudha
          <br />© 2023 Coded by Racheal Okogie
        </p>
      </div>
    </div>
  );
};
export default Footer;
