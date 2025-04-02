import ReservationCard from "../Body/ReservationCard";
export default function BookingForm() {
  return (
    <aside className="col-span-1 md:col-span-4 lg:col-span-3 flex flex-col gap-4 rounded-xl overflow-y-auto">
      <section className="flex flex-col gap-2">
      <h1 className="text-lg lg:block">Booking</h1>
      <form
        action=""
        className="bg-white rounded-md p-4 flex flex-col gap-4"
      >
        {/* Lecture Theatre */}
        <label htmlFor="lecture_theatre" className="text-sm">
          Lecture Theatre
          <select
            name="lecture_theatre"
            id="lecture_theatre"
            defaultValue=""
            className="w-full p-2 rounded-md border border-primary/30 outline-none"
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
            className="w-full p-2 rounded-md border border-primary/30 outline-none"
          />
        </label>
        <div className="flex gap-4">
          <label htmlFor="date" className="text-sm w-1/2">
            Start Time
            <input
              type="time"
              id="start_time"
              name="start_time"
              step="3600"
              className="w-full p-2 rounded-md border border-primary/30 outline-none"
            />
          </label>
          <label htmlFor="date" className="text-sm w-1/2">
            End Time
            <input
              type="time"
              id="end_time"
              step="3600"
              name="end_time"
              className="w-full p-2 rounded-md border border-primary/30 outline-none"
            />
          </label>
        </div>
        <label htmlFor="course" className="text-sm">
          Course
          <select
            name="course"
            id="course"
            defaultValue=""
            className="w-full p-2 rounded-md border border-primary/30 outline-none"
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
        <label htmlFor="reoccurence">
          Repeat
          <select
            name="reoccurence"
            id="reoccurence"
            defaultValue="once"
            className="w-full p-2 rounded-md border border-primary/30 outline-none"
          >
            <option value="once" className="p-4">
              Once
            </option>
            <option value="daily" className="p-4">
              Daily
            </option>
            <option value="weekly" className="p-4">
              Weekly
            </option>
            <option value="custom" className="p-4">
              Custom
            </option>
          </select>
        </label>
        <button type="submit" className="w-full button1">
          Book Hall
        </button>
      </form>
      </section>
      <section className="flex flex-col gap-2">
      <h1 className="text-lg lg:block">Reservations</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        Lecture
        <ReservationCard
          session="11:00-12:00"
          course="MTH 202"
          hall="ODLT II"
        />
        {/* Lecture */}
        <ReservationCard
          session="11:00-12:00"
          course="MTH 202"
          hall="ODLT II"
        />
        {/* Lecture */}
        <ReservationCard
          session="11:00-12:00"
          course="MTH 202"
          hall="ODLT II"
        />

      </div>

      </section>

    </aside>
  );
}
