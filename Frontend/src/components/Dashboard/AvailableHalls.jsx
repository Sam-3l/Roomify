import HallCard from "../Body/HallCard";
export default function AvailableHalls() {
  return (
    <aside className="col-span-1 md:col-span-10 overflow-y-auto pr-4">
        <form action="" className="flex justify-between items-center mb-8">
            <input type="text" className="bg-white p-3 rounded-md outline-none" placeholder="Search..." />
            <div className="flex items-center gap-4">
                <label htmlFor="availability" className="select-none">Show Available Only</label>
                <input type="checkbox" name="availability" id="availability"  />
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