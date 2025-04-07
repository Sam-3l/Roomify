import AttendanceChart from "./charts/AttendanceChart";
import EngagementChart from "./charts/EngagementChart";
export default function ClassSummary(){
    return(
        <section className="flex flex-col gap-4 w-full">
            <h1 className="text-lg ">Class Summary</h1>
            <div className="flex flex-col gap-2 p-6 custom-shadow bg-white rounded-md">
               <select name="course" className="p-2 text-secondary text-base px-4 rounded-md w-fit outline-none border border-primary/30">
                <option value="CHM 204" className="p-2">CHM 204</option>
                <option value="CHM 204" className="p-2">CHM 204</option>
               </select>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 flex flex-col border gap-2 border-primary/30 p-4 rounded-md ">
                        <p className="text-sm">Total Students</p>
                        <p className="text-4xl text-secondary">1124</p>
                        <p className="text-sm p-1 px-4 w-max font-semibold rounded-full capitalize bg-neutral-200 text-neutral-950">0 students added recently</p>
                    </div>
                    <div className="col-span-1 flex flex-col border gap-2 border-primary/30 p-6 rounded-md ">
                        <p className="text-sm">Avg. Attendance</p>
                        <div className="flex flex-col gap">
                            <p className="text-3xl text-secondary">67%</p>
                            <p className="text-sm text-green-800">+24% from last week</p>
                            </div>
                        <AttendanceChart/>
                    </div>
                    <div className="col-span-1 flex flex-col border gap-2 border-primary/30 p-6 rounded-md ">
                        <p className="text-sm">High Engagement Students</p>
                        <div className="flex flex-col gap">
                            <p className="text-3xl text-secondary">278</p>
                            <p className="text-sm text-red-950">4 students dropped below class avg.</p>
                            </div>
                        <EngagementChart/>
                    </div>
                </div>
            </div>
        </section>
    )
}