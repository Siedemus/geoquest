function App() {
  return (
    <>
      <main className="flex flex-col items-center mt-24 md:mt-48 text-center p-2 pb-0 gap-6">
        <h2 className="bg-pastelRainbow text-transparent bg-clip-text font-extrabold text-5xl md:text-7xl max-w-7xl animate-pastel">
          Challenge Your World Knowledge and Discover New Places!
        </h2>
        <p className="text-noise text-xl max-w-[520px]">
          GeoQuest is an interactive geography-based game where players are
          challenged to identify locations around the world based on visual
          clues from images.
        </p>
        {true ? (
          <button className="bg-pastelRainbowButton text-cosmic px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center">
            Log In with{" "}
            <img src="src/assets/images/google.png" className="w-6" />
          </button>
        ) : (
          <div className="flex gap-5">
            <button className="bg-pastelRainbowButton text-cosmic px-8 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s]">
              Play
            </button>
            <button className="bg-pastelRainbowButton text-cosmic px-8 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s]">
              Log Out
            </button>
          </div>
        )}
        <img src="src/assets/images/planet.png" />
      </main>
    </>
  );
}

export default App;
