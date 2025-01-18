function Chip({ children, classNames, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 m-1 rounded-full border border-white/20 text-white
       hover:border-white/80 transition-colors  
      ${classNames}`}
    >
      <span className="text-sm lg:text-base">{children}</span>
    </div>
  );
}

export default Chip;
