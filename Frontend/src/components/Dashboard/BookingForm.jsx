export default function BookingForm() {
  return (
    <aside className="lg:col-span-3 fixed lg:right-0 lg:bottom-0 right-6 bottom-6 lg:block lg:relative rounded-xl">
      <h1 className="text-red text-lg hidden lg:block">Booking</h1>
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
      <form action="" className="hidden bg-white rounded-md p-4 md:flex flex-col gap-4">
        <label htmlFor="lecture_theatre" className="text-sm">
          Lecture Theatre
          <select
            name="lecture_theatre"
            id="lecture_theatre"
            defaultValue=""
            className="w-full p-2 rounded-md border border-primary outline-none"
          >
            <option value="" disabled>
              -- Hall --
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="FBLT" className="p-4">
              FBLT
            </option>
            <option value="AUD II" className="p-4">
              AUD II
            </option>
            <option value="AUD I" className="p-4">
              AUD I
            </option>
            <option value="ODLT I" className="p-4">
              ODLT I
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
          </select>
        </label>
        <label htmlFor="date" className="text-sm">
          Date
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="w-full p-2 rounded-md border border-primary outline-none"
          />
        </label>
        <div className="flex gap-4">
          <label htmlFor="date" className="text-sm w-1/2">
            Start Time
            <input
              type="time"
              id="time"
              name="time"
              step="3600"
              className="w-full p-2 rounded-md border border-primary outline-none"
            />
          </label>
          <label htmlFor="date" className="text-sm w-1/2">
            End Time
            <input
              type="time"
              id="time"
              step="3600"
              name="time"
              className="w-full p-2 rounded-md border border-primary outline-none"
            />
          </label>
        </div>
        <label htmlFor="course" className="text-sm">
          Course
          <select
            name="course"
            id="course"
            defaultValue=""
            className="w-full p-2 rounded-md border border-primary outline-none"
          >
            <option value="" disabled>
              -- Course --
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="FBLT" className="p-4">
              FBLT
            </option>
            <option value="AUD II" className="p-4">
              AUD II
            </option>
            <option value="AUD I" className="p-4">
              AUD I
            </option>
            <option value="ODLT I" className="p-4">
              ODLT I
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
            <option value="ODLT II" className="p-4">
              ODLT II
            </option>
          </select>
        </label>


      </form>
    </aside>
  );
}
