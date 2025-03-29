export default function HallCard(props) {
  return (
    <div className="flex flex-col md:items-center md:flex-row p-6 md:py-3 gap-4 bg-white md:justify-between rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-lg text-secondary"> {props.hall} </p>
        <button className="flex items-center  md:hidden justify-center w-8 h-8 rounded-full cursor-pointer ">
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
      <div className="flex md:overflow-y md:hidden items-center justify-between">
        <p className="">{props.capacity} Seater</p>
        <p className="">{props.status}</p>
      </div>
      <p className="hidden md:inline-block">{props.capacity} Seater</p>
      <p className="hidden md:inline-block">{props.status}</p>
      <div className="space-x-4">
        <button className="button2 hidden md:inline-block h-fit px-6 py-3">View Hall</button>
        <button className="button1 w-full md:w-fit h-fit px-6 py-3">Book Hall</button>
      </div>
    </div>
  );
}
