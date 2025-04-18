export default function PseudoHallCard(props) {
  
  let classname;

  if (props.status === "vacant") {
    classname =
      "p-1 px-4 w-max font-semibold rounded-full capitalize bg-green-100 text-green-950";
  } else if (props.status === "pending") {
    classname =
      "p-1 px-4 w-max font-semibold rounded-full capitalize bg-neutral-200 text-neutral-950";
  } else if (props.status === "in use") {
    classname =
      "p-1 px-4 w-max font-semibold rounded-full capitalize bg-red-100 text-red-950";
  }


  return (
    <div className="flex custom-shadow flex-col lg:items-center lg:grid lg:grid-cols-4 p-6 lg:py-3 gap-4 bg-white lg:justify-between rounded-md">
      <div className="flex justify-between lg:justify-normal items-center">
        <p className="text-lg text-secondary"> {props.hall} </p>
        <button className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ">
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
      <div className="flex lg:overflow-y lg:hidden items-center justify-between">
        <p className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#333333"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>
          {props.capacity}

        </p>
        <p className={classname}>{props.status}</p>
      </div>
      <p className="hidden lg:flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
        </svg>
        {props.capacity}

      </p>
      <p className={`hidden lg:inline-block ${classname}`}>{props.status}</p>
      <button className="button1 w-full lg:w-fit h-fit px-6 py-3 place-self-end">
        Book Hall
      </button>
    </div>
  );
}
