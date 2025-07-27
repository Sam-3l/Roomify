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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col border gap-2 border-primary/30 p-6 rounded-md ">
                        <p className="text-sm p-1 px-3 rounded-md bg-neutral-200 w-fit">Avg. Attendance</p>
                        <div className="flex flex-col gap-2">
                            <p className="text-3xl text-secondary">67%</p> 
                            <p className="text-sm text-green-800 p-0.5 px-3 rounded-md bg-green-100 w-fit">+24% from last week</p>
                            </div>
                        <AttendanceChart/>
                    </div>
                    <div className="col-span-1 flex flex-col border gap-2 border-primary/30 p-6 rounded-md ">
                        <p className="text-sm p-1 px-3 rounded-md bg-neutral-200 w-fit" title="Students with attendance above the class average">High Engagement Students</p>
                        <div className="flex flex-col gap-2">
                            <p className="text-3xl text-secondary">278</p>
                            <p className="text-sm text-red-950 p-0.5 px-3 rounded-md bg-red-100 w-fit">4 students dropped below class avg</p>
                            </div>
                        <EngagementChart/>
                    </div>
                </div>
            </div>
        </section>
    )
}