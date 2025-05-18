import StudentCard from "../Body/StudentCard";
import ClassSummary from "./ClassSummary";

export default function Profile() {
  return (
    <aside className="col-span-1 overflow-y-auto pr-4 flex md:col-span-10 py-6 flex-col gap-4 w-full">
      <ClassSummary />
      <form
        action=""
        className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8"
      >
        <input
          type="text"
          className="p-2 w-full md:w-fit rounded-md border text-sm border-primary/30 outline-none"
          placeholder="Search..."
          name="search"
        />
        <select
          name="course"
          id="course"
          defaultValue="all"
          className="w-[150px] p-2  rounded-md border border-primary/30 outline-none"
        >
          <option value="all">All</option>
          <option value="once">Once</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="custom">Custom</option>
        </select>
      </form>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 w-full">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </aside>
  );
}
