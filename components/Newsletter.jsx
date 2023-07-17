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
    <div className="flex flex-col items-center bg-peach text-white mt-1">
      <h2 className="text-3xl font-bold mt-8 text-left">
        Your Community Classes
      </h2>
      <p className="mt-2 text-dkblue font-light w-1/2 text-left">
        Sign up for information on community classes by entering your email below. I don't send lots of emails, but I can keep you up to date with class times and locations.
      </p>
      <div className="flex sm:w-4/5 justify-center mt-4 mb-11 flex-col lg:flex-row">
        <input
          className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`lg:ml-2 lg:w-1/5 shadow focus:shadow-outline focus:outline-none text-dkblue bg-white font-light py-2 px-5 rounded flex hover:text-white hover:bg-dkblue ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Submit
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
  );
};