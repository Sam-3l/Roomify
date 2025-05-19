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

        <div className="flex gap-4">
          <select
            name="department"
            id="department"
            defaultValue="All"
            className="w-[150px] p-2  rounded-md border border-primary/30 outline-none"
          >
            <option value="All">All</option>
            <option value="EEE">EEE</option>
            <option value="MEE">MEE</option>
            <option value="CSC">CSC</option>
            <option value="AGE">AGE</option>
          </select>
          <select
            name="engagement"
            id="engagement"
            defaultValue="all"
            className="w-[150px] p-2  rounded-md border border-primary/30 outline-none"
          >
            <option value="all">All</option>
            <option value="&lt;30%">&lt;30%</option>
            <option value="30-50%">30-50%</option>
            <option value="50-70%">50-70%</option>
            <option value="80-90%">80-90%</option>
            <option value="&gt;90%">&gt;90%</option>
          </select>

        </div>
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
