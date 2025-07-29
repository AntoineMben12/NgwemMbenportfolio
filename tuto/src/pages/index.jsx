export default function Index() {
  return (
    <>
      <div className="container max-[1300px] w-full h-screen flex justify-center items-center">
        <div className=" absolute w-full top-5 text-center text-4xl">{"</Mben>"}</div>
        <div className="flex flex-col before:relative before:w-25 before:h-1 before:bg-gray-950 before:left-1">
          <p className="text-gray-950 font-extrabold text-7xl text-center font-dancing-script">
            Hi, dear user
          </p>
          <p className="text-4xl text-center mt-2.5">
            You are welcome to Mben's portfolio
          </p>
          <p className="text-gray-700 mt-2.5 text-center">
            Welcome once more and thanks for visiting i'm{" "}
            <span className="font-semibold">MBEN ANTOINE</span> software
            developer <span className="font-semibold">&</span> Designer.
          </p>

          <a href="/home">
            <button className="bg-gray-950 text-white py-2 px-4 rounded-lg w-full mt-10 mb-3 font-extrabold hover:bg-gray-400">
            Start
          </button>
          </a>
          <a href="/contact">
            <button className="bg-white text-gray-950 py-2 px-4 rounded-lg w-full border-gray-950 border font-extrabold hover:bg-gray-950 hover:text-white">
            Contact
          </button>
          </a>
        </div>
      </div>
              <div className=" fixed bottom-0 flex justify-between w-full pl-5 pr-5">
            <div className="w-1/10 flex justify-around text-xl sm:text-2xl font-extrabold">
              <a href=""><i>f</i></a>
              <a href=""><i>in</i></a>
              <a href=""><i>i</i></a>
              <a href=""><i>e</i></a>
            </div>
            <div className="text-xl sm:text-2xl font-extralight text-gray-600 ">
              All right has been <span className="font-extrabold text-2xl text-gray-950">reserved</span>!
            </div>
        </div>
    </>
  );
}

