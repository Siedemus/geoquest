import { tutorialSteps } from "../../assets/resources/tutorialSteps";

const Tutorial = () => {
  return (
    <section className="bg-salt w-full h-full pt-12 px-12 pb-20">
      <h2 className="font-extrabold text-4xl text-center md:text-left mb-16 md:text-6xl font-libreFranklin">
        How to play?
      </h2>
      <ul className="flex justify-evenly flex-wrap gap-8 gap-y-16">
        {tutorialSteps.map((step, i) => (
          <li
            key={i + step.title}
            className="bg-salt rounded-lg flex items-center flex-col text-cloudy max-w-[300px] border-2 hover:scale-105 duration-1000"
          >
            <img
              alt={step.description}
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
