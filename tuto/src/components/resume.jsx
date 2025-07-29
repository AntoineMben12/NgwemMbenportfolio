export default function Resume() {
  return (
    <>
      <div className=" mx-10 px-8 h-screen">
        <h1 className="text-gray-600 text-center text-4xl underline underline-offset-8 font-extrabold">
          _-Resume-_
        </h1>
        <article className="text-xl text-center text-wrap my-8">
          I'm named{" "}
          <span className="font-extrabold">NGWEM MBEN ANTOINE DE PADOUE </span>
          ,i'm a young student in the field to software engineering .
          <p>
            i'm a passionate of the tech industry and during my journey i worked
            on many projects for more than 3+ years.
          </p>
          <p>
            I'm also a student in level II at the{" "}
            <span className="font-extrabold">
              AFRICAN INSTITUTE OF COMPUTER SCIENCE{" "}
            </span>
            in the software engineering departement.
          </p>
          <p>Here is resume of my journey</p>
        </article>
        <div className="grid grid-rows-2 w-full mt-10">
          <div className=" rows-start-1 md:flex block justify-center gap-5 h-45 text-gray-600">
            {/* <img src="" alt="" /> */}
            <div className="h-full w-60 border border-black flex justify-center items-center shadow-lg shadow-gray-500">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="" className="border border-black h-3/4 w-3/4"/>
            </div>
            <article className="text-wrap flex flex-col justify-center mt-2 md:mt-0">
                <p>For my education i'm did my primary eduction and secondary study at <br /><span className="font-extrabold text-black">LA FIERTE CSBM</span>& <span className="font-extrabold text-black">ALL NATIONS SCHOOL</span></p>
                <p>Obtain my <a href="" className="underline underline-offset-6 text-blue-500 decoration-black">GCE ORDINARY LEVEL</a> in 2022 with a pass in 11 subject on 11 possible</p>
                <p>And <a href="" className="underline underline-offset-6 text-blue-500 decoration-black">ADVANCE LEVEL</a> in 2024.</p>
                <p>And presently studing at <a href="" className="underline underline-offset-6 text-blue-500 decoration-black">AICS CAMEROON</a>.</p>
            </article>
          </div>
          {/* ----------------------------- */}
          <div className="rows-start-2 md:flex block gap-5 justify-center h-40 md:mt-5 mt-35 text-gray-700">
            {/* <img src="" alt="" /> */}
             <article className="text-wrap flex flex-col justify-center">
                <p>For professional i'm freelance since<br /><span className="font-extrabold text-black">2022</span>.</p>
                <p>I did intentship at <a href="" className="underline underline-offset-6 text-blue-500 decoration-black">COMPOSt</a> in 2024.</p>
                <p><a href=""><button className="bg-black text-white py-2 px-14 mt-2 rounded-lg cursor-pointer">Github</button></a></p>
            </article>
            <div className="h-full md:w-100 w-11/12 border md:mt-0 mt-5 border-black flex justify-center items-center shadow-lg shadow-gray-500">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Company" className="border border-black h-3/4 w-4/5"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

