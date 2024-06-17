import { LogIn, LogOut, useAuthContext } from "../context/AuthProvider";

const Navigation = () => {
  const auth = useAuthContext();

  return !auth?.pending ? (
    <header className="z-10 flex justify-between p-3 md:p-4 bg-salt fixed top-0 w-full bg-opacity-80 items-center">
      <h1 className="bg-pastelRainbow text-transparent bg-clip-text font-extrabold text-4xl animate-pastel">
        <a href="/">geoQuest</a>
      </h1>
      <nav>
        <ul className="flex gap-5 items-center">
          {auth?.user ? (
            <>
              <li>
                <button
                  className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
                  onClick={LogOut}
                >
                  Log Out
                </button>
              </li>
              <li className="border-2 rounded-full">
                <a href="/dashboard">
                  <img
                    className="rounded-full w-10 p-0.5"
                    src={auth.user.photoURL!}
                    alt={`${
                      auth.user.photoURL ? auth.user.photoURL : "Anonymous"
                    } profile picture.`}
                  />
                </a>
              </li>
            </>
          ) : (
            <li>
              <button
                className="bg-pastelRainbowButton text-noise px-4 py-2 rounded-md text-lg font-bold bg-left bg-buttonZoom hover:bg-right duration-[1.5s] flex gap-2 items-center"
                onClick={LogIn}
              >
                Log In
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  ) : null;
};

export default Navigation;
