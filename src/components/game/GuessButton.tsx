import { IGuessButtonProps } from "../../assets/resources/types";

const GuessButton = ({ handleAGuess }: IGuessButtonProps) => {
  return (
    <button
      onClick={handleAGuess}
      className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center absolute bottom-2 left-2 md:left-5 md:bottom-5 border border-noise"
    >
      Make a guess
    </button>
  );
};

export default GuessButton;
