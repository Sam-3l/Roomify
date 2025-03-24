export default function PseudoTimetable(){
    return(
        <section className="flex p-6 flex-col gap-4 w-full">
            <h1 className="text-lg md:text-xl">Today's Schedule</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Lecture */}
                <div className="flex flex-col py-3 px-6 border border-bg gap-2 rounded-md">
                    <p className="text-primary text-sm">11:00-12:00</p>
                    <p className="text-[1.3rem]">MTH 202 - ODLT II</p>
                </div>

                {/* Lecture */}
                <div className="flex flex-col py-3 px-6 border border-bg gap-2 rounded-md">
                    <p className="text-primary text-sm">11:00-12:00</p>
                    <p className="text-[1.3rem]">MTH 202 - ODLT II</p>
                </div>

                {/* Lecture */}
                <div className="flex flex-col py-3 px-6 border border-bg gap-2 rounded-md">
                    <p className="text-primary text-sm">11:00-12:00</p>
                    <p className="text-[1.3rem]">MTH 202 - ODLT II</p>
                </div>

                {/* Lecture */}
                <div className="flex flex-col py-3 px-6 border border-bg gap-2 rounded-md">
                    <p className="text-primary text-sm">11:00-12:00</p>
                    <p className="text-[1.3rem]">MTH 202 - ODLT II</p>
                </div>

                {/* Lecture */}
                <div className="flex flex-col py-3 px-6 border border-bg gap-2 rounded-md">
                    <p className="text-primary text-sm">11:00-12:00</p>
                    <p className="text-[1.3rem]">MTH 202 - ODLT II</p>
                </div>

            </div>
        </section>
    )
}