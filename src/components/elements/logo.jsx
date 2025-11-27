import { useState } from "react";

function Logo({ children }) {
  const [setShow] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false); // close modal after click
  };

  return (
    <button className="py-2 px-4 bg-white rounded-full">
      <button
        className="font-inter font-bold sm:text-base text-sm cursor-pointer"
        onClick={() => scrollToSection("awal")}
      >
        {children}
      </button>
    </button>
  );
}

export default Logo;
