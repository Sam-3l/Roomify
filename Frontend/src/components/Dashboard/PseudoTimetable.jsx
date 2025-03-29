import LectureCard from "../Body/LectureCard"
export default function PseudoTimetable(){
    return(
        <section className="flex py-6 flex-col gap-4 w-full">
            <h1 className="text-lg md:text-xl">Today's Schedule</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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