import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="flex place-content-center flex-col items-center align-middle bg-peach text-white mt-1 h-screen">
      <h2 className="text-3xl font-bold mt-8 mb-4 md: w-1/2 text-left ">
        Your Community Classes
      </h2>
      <p className="mt-2 mb-4 text-dkblue font-light w-1/2 text-left">
        Sign up for information on community classes by entering your email below. I don't send lots of emails, but I can keep you up to date with class times and locations.
      </p>
      <div className="flex sm:w-4/5 justify-center mt-4 flex-col lg:flex-row">
        <input
          className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 rounded py-2 px-4 text-dkblue text-center leading-tight focus:outline-none focus:border border-dkblue"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`lg:ml-2 lg:w-1/5 shadow text-dkblue bg-white font-light py-2 rounded flex justify-center hover:text-white hover:bg-dkblue ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Submit
        </button>
      </div>
        <div className="w-1/2 text-left mt-4">
        {state === "ERROR" && (
          <p className="text-white tracking-wide text-xl">{errorMessage}</p>
        )}
        {state === "SUCCESS" && (
          <p className="text-white tracking-wide text-xl">Email submitted, thanks!</p>
        )}
        </div>
    </div>
  );
};