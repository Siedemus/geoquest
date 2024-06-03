const Tutorial = () => {
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
    <section className="bg-salt w-full h-full pt-12 px-12 pb-20">
      <h2 className="font-extrabold text-4xl text-center md:text-left mb-16 md:text-6xl font-libreFranklin">
        How to play?
      </h2>
      <ul className="flex justify-evenly flex-wrap gap-8 gap-y-16">
        {tutorialSteps.map((step, i) => (
          <li
            key={i}
            className="bg-salt rounded-lg flex items-center flex-col text-cloudy max-w-[300px] border-2 hover:scale-105 duration-1000"
          >
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
  );
};

export default Tutorial;
