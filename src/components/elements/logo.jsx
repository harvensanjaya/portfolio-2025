function Logo({ children, onClick }) {
  return (
    <div className="py-2 px-4 bg-white rounded-full">
      <button
        className="font-inter font-bold sm:text-base text-sm cursor-pointer flex items-center"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Logo;
