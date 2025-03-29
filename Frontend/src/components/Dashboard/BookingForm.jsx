export default function BookingForm() {
  return (
    <div className="lg:col-span-3 fixed lg:right-0 lg:bottom-0 right-6 bottom-6 lg:block lg:relative lg:bg-neutral-200 p-6 rounded-xl">
      <h1 className="text-white text-3xl hidden lg:inline-block">Booking</h1>
      <button className="bg-secondary flex items-center justify-center p-4 rounded-full lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />
        </svg>
      </button>
    </div>
  );
}
