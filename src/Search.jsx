import { useState } from "react";
import Icon from "./assets/images/icon-arrow.svg";

function Search({ setIpAddress, fetchData }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIpAddress(input);
    fetchData(input);
    setInput("");
  }
  return (
    <>
      <form
        className="mt-5 flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search for any IP address"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="placeholder:text-muted-foreground w-full max-w-72 rounded-l-2xl py-3.5 pl-4 outline-none md:max-w-md md:py-3"
        />
        <button className="hover:bg-veryDarkGray rounded-r-2xl bg-black p-1.5">
          <img src={Icon} alt="icon" className="p-3.5 md:p-3" />
        </button>
      </form>
    </>
  );
}

export default Search;
