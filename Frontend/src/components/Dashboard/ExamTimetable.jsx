import LectureCard from "../Body/LectureCard";
export default function ExamTimetable() {
  return (
    <aside className="col-span-10 lg:col-span-3 p-3 rounded-xl overflow-auto">
      <h1 className="text-lg md:text-xl">Exam Timetable</h1>
      <section className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
        <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
      </section>
    </aside>
  );
}
