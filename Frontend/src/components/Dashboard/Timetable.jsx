import LectureCard from "../Body/LectureCard";
import ExamTimetable from "./ExamTimetable";
export default function Timetable() {
  return (
    <aside className="col-span-1 bg-bg md:col-span-10 overflow-y-auto  ">
      <section className="col-span-10 lg:col-span-7 flex flex-col gap-4 rounded-xl p-3">
        {/* Monday */}
        <section className="flex py-6 flex-col gap-4 w-full">
          <h1 className="text-lg md:text-xl ">Monday</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
          </div>
        </section>
        {/* Tuesday */}
        <section className="flex py-6 flex-col gap-4 w-full">
          <h1 className="text-lg md:text-xl ">Tuesday</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
          </div>
        </section>
        {/* Wednesday */}
        <section className="flex py-6 flex-col gap-4 w-full">
          <h1 className="text-lg md:text-xl ">Wednesday</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
          </div>
        </section>
        {/* Thursday */}
        <section className="flex py-6 flex-col gap-4 w-full">
          <h1 className="text-lg md:text-xl ">Thursday</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
          </div>
        </section>
        {/* Fridat */}
        <section className="flex py-6 flex-col gap-4 w-full">
          <h1 className="text-lg md:text-xl ">Friday</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
            {/* Lecture */}
            <LectureCard
              session="11:00-12:00"
              course="MTH 202"
              hall="ODLT II"
            />
          </div>
        </section>
      </section>
      <ExamTimetable />
    </aside>
  );
}
