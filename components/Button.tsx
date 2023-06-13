interface Props {
  title: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  width?: string;
  padding?: string;
}

function Button({ title, onClick, loading, disabled, width, padding }: Props) {
  return (
    <a
      href="#_"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 font-bold"
      onClick={onClick}
    >
      {!disabled ? (
        <>
          <span className="absolute h-full w-full bg-gradient-to-br from-blue-700 via-[#800080] to-red-500 group-hover:from-[#800080] group-hover:to-red-500"></span>
          <span className="duration-400 relative rounded-lg bg-gray-900 px-6 py-3 transition-all ease-out group-hover:bg-opacity-0">
            <span className="relative text-white">
              {loading ? "Loading..." : title}
            </span>
          </span>
        </>
      ) : (
        <>
          {/* <span className="absolute h-full w-full bg-black"></span> */}
          <span className="duration-400 relative rounded-lg bg-gray-500 px-6 py-3 transition-all ease-out group-hover:bg-opacity-[0.8]">
            <span className="relative text-white">{title}</span>
          </span>
        </>
      )}
    </a>
  );
}

export default Button;
