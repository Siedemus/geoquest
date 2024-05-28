const App = () => {
  const tutorialSteps = [
    {
      title: "Step 1: Log In",
      description:
        "Log in to GeoQuest using your Google account to create your profile or access your saved game data and continue your adventure.",
      src: "src/assets/images/stepOne.png",
    },
    {
      title: "Step 2: Start Playing",
      description:
        'Click "Play" to start the game, recognize your location based on the clues, and predict your potential location on the map.',
      src: "src/assets/images/stepTwo.png",
    },
    {
      title: "Step 3: Pick Location on Map",
      description:
        "Select your predicted location on the map based on the clues and surroundings you've analyzed.",
      src: "src/assets/images/stepThree.png",
    },
    {
      title: "Step 4: Check Score and Leaderboard",
      description:
        "Review your score and see where you stand on the leaderboard compared to other players.",
      src: "src/assets/images/stepFour.png",
    },
  ];

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
      <section className="bg-salt w-full h-full pt-12 px-12 pb-20">
        <h2 className="font-extrabold text-4xl text-center md:text-left mb-16 md:text-6xl font-libreFranklin">
          How to play?
        </h2>
        <ul className="flex justify-evenly flex-wrap gap-8 gap-y-16">
          {tutorialSteps.map((step) => (
            <li className="bg-salt rounded-lg flex items-center flex-col text-cloudy max-w-[300px] border-2 hover:scale-105 duration-1000">
              <img
                src={step.src}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="px-5 py-5 border-t-2">
                <h3 className="font-extrabold self-start text-xl mb-3">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
