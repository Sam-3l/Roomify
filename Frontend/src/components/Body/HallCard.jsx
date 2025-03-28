export default function HallCard(props) {
  return (
    <div className="flex flex-col p-6 gap-4 bg-white rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-lg text-secondary"> {props.hall} </p>
        <button className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
      <div className="flex  items-center justify-between">
        <p className="">{props.capacity} Seater</p>
        <p className="">{props.status}</p>
      </div>
      <button className="button2">Book Hall</button>
    </div>
  );
}
