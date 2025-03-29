import LectureCard from "../Body/LectureCard";
export default function ExamTimetable() {
  return (
    <aside className="col-span-10 lg:col-span-3 p-3 rounded-xl overflow-auto">
      <h1 className="text-lg md:text-xl text-secondary">Exam Timetable</h1>
      <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
