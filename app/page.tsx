import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-2">
                Login
              </button>
              <button className="border p-1 px-4 rounded">Signup</button>
            </div>
          </div>
        </nav>

        <main>
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-4xl font-bold mb-2">
                Find your table for any occasion
              </h1>
              {/* Search Bar */}
              <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input
                  type="text"
                  className="rounded text-lg mr-3 p-2 w-450px"
                  placeholder="States, city or town"
                />
                <button className="bg-red-600 text-white px-9 py-2 rounded">
                  Lets Go
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Image
                src="https://resizer.otstatic.com/v2/photos/wide-huge/3/47393345.png"
                alt=""
                className="w-full h-36"
                width={400}
                height={400}
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestone Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
