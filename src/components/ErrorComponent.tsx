import { useNavigate } from "react-router-dom";
import { ErrorComponentProps } from "../assets/resources/types";

const ErrorComponent = ({ errorMessage }: ErrorComponentProps) => {
  const navigate = useNavigate();

  return (
    <main className="my-64 flex flex-col gap-4 items-center text-center">
      <h2 className="text-5xl">⚠️</h2>
      <p className="text-3xl font-extrabold">Oops, something went wrong!</p>
      <p className="text-noise w-96">{errorMessage}</p>
      <button
        className="bg-pastelRainbowButton text-noise px-8 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] max-w-40"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </main>
  );
};

export default ErrorComponent;
