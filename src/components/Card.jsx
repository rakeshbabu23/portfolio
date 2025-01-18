const Card = ({ data, isOpen, index, onClick }) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`cursor-pointer mb-4 p-6 rounded-xl border border-white/20
      hover:border-white/40 transition-all duration-200
      ${isOpen === index + 1 ? "border-white/40" : ""}`}
    >
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-white/20">
          <img
            src={data.logo}
            alt={`${data.company} logo`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">{data.company}</h3>
          <p className="text-gray-400 font-medium">{data.role}</p>
          {isOpen === index + 1 && (
            <div className="mt-4 text-gray-300 whitespace-pre-line leading-relaxed">
              {data.description}
            </div>
          )}
        </div>

        <div className="lg:text-right text-sm text-gray-400">
          <span className="font-medium">{data.duration}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
