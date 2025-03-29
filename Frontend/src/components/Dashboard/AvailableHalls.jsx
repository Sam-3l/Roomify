import {useState} from 'react'
import HallCard from "../Body/HallCard";

export default function AvailableHalls() {
  const [checked,setCheck] = useState(false)

  return (
    <aside className="col-span-1 md:col-span-10 overflow-y-auto pr-4">
      <form
        action=""
        className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8"
      >
        <input
          type="text"
          className="p-2 w-full md:w-fit rounded-md border text-sm border-primary outline-none"
          placeholder="Search..."
          name='search'
          
        />
        <div className="flex w-full justify-between md:justify-normal md:w-fit items-center gap-4">
          <select
            name="course"
            id="course"
            defaultValue="all"
            className={
              checked
                ? "w-[150px] p-2  rounded-md border border-primary outline-none"
                : "invisible"
            }
          >
            <option value="all">All</option>
            <option value="once">Once</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="custom">Custom</option>
          </select>

          <label
            htmlFor="availability"
            className="select-none flex items-center gap-2 text-nowrap"
          >
            Show Available Only
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setCheck((prev) => !prev)}
              name="availability"
              id="availability"
            />
          </label>
        </div>
      </form>
      <section className="grid grid-cols-1 gap-4">
        <HallCard hall="1K SLT" capacity="1000" status="Vacant" />
        <HallCard hall="1K SLT" capacity="1000" status="Vacant" />
        <HallCard hall="1K SLT" capacity="1000" status="Vacant" />
        <HallCard hall="1K SLT" capacity="1000" status="Vacant" />
        <HallCard hall="1K SLT" capacity="1000" status="Vacant" />
      </section>
    </aside>
  );
}
