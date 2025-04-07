import LectureCard from "../Body/LectureCard"
export default function PseudoTimetable(){
    return(
        <section className="flex py-6 flex-col gap-4 w-full">
            <h1 className="text-lg">Today's Schedule</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {/* Lecture */}
                <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
                {/* Lecture */}
                <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
                {/* Lecture */}
                <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
                {/* Lecture */}
                <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
                {/* Lecture */}
                <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />
                {/* Lecture */}
                <LectureCard session="11:00-12:00" course="MTH 202" hall="ODLT II" />

            </div>
        </section>
    )
}