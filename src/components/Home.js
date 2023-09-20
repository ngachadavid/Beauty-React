import {  faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardImage from "./assets/Image.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Home() {
  return (
    

    <div className="App  mx-20">

      <div className="container ">
        {/* column 1 navbar */}
        <div className="flex flex-row items-center justify-between my-10" navbar>
          <p className="text-3xl font-poppins">Beauty Bliss</p>

          {/* Buttons */}
          <div className="flex flex-row space-x-6">
            {/*Search bar*/}
            <div className="relative">
              <input type="text" className="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer " />
              <label for="Search" className="absolute left-0 top-1 text-gray-700 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">Search</label>
            </div>
            {/*End Search bar*/}

            {/* Shopping cart */}
            <button>
              <FontAwesomeIcon icon={faCartShopping} className="ml-6" />
            </button>
            {/*End Shopping cart */}
            <div>

              {/* login part */}
              <button>
                <FontAwesomeIcon icon={faUser} className="ml-6" />
              </button>
              {/*End login part */}
            </div>
          </div>
        </div>
        {/*End column 1 navbar*/}

        {/* column 2 */}
        <div className="flex md:flex-row flex-col-reverse">
          <div className="mr-10">
            <p className=" text-3xl font-bold ">Cosmetics that</p>
            <p className="text-lg my-1 italic">Everyone loves!</p>
            {/* comment */}
            <p className="text-2xs my-6">
              Elevate your beauty game with our premium cosmetics.
              <p className="text-2xs my-0 mx-0 font-Montserrat">From skincare to makeup, we have everything you need to look and feel your best.</p>
              <p className="text-2xs my-0 mx-0 font-Montserrat">Shop now and indulge in the ultimate beauty experience!</p>
              {/* here is where the paragraph is*/}
            </p>
            {/* comment */}
            <button
              type="button"
              class="text-white bg-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  rounded md:rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-28">
              {/*you will link this button with link*/}
              Shop Now {">"}
            </button>
            {/* shopping button */}
          </div>
          <div >
            <img
              src={cardImage}
              alt="customImage"
              className="h-96  md:ml-40   justify-between"
            />
          </div>
        </div>

        {/* column 3 the lower images */}
        <div className="flex flex-row space-x-4">
          <img
            src={img1}
            alt="customImage"
            className=""
          />
          <img
            src={img2}
            alt="customImage"
            className=""
          />
        </div>
        {/* End column 3 the lower images */}
      </div>

    </div>
  );
}

export default Home;
