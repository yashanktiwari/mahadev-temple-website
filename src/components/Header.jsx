import header_img from "../assets/header_img/header-img.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#fffff0]">
      <div className="flex m-1 items-center mx-4">
      <img src={header_img} className="w-16" alt="logo" />
      <h1 className="ml-2 text-2xl font-semibold">Bheedbanjan Mahadev</h1>
      </div>
      <div className="flex items-center">

        <ul>
          <li>
            <select name="languages" className="px-3 py-1 my-2 mx-4 border border-gray-500 rounded-md">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="guj">Gujarati</option>
            </select>
          </li>
        </ul>

        <ul>
          <li className="font-bold"><div className="h-8 bg-black w-[0.1rem]"></div></li>
        </ul>

        <ul>
          <select name="theme" className="px-3 py-1 my-2 mx-4 border border-gray-500 rounded-md">
            <option value="light">Light</option>
            {/* Work on Dark Theme */}
            {/* <option value="dark" className="bg-black text-white">Dark</option> */}
          </select>
        </ul>

        <ul>
          <li className="font-bold"><div className="h-8 bg-black w-[0.1rem]"></div></li>
        </ul>

        <button className="px-3 py-1 mx-4 border border-gray-500 rounded-md">Admin Login</button>
      </div>
    </div>
  );
};

export default Header;
