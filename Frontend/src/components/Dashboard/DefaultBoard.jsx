import PseudoProfile from "./PseudoProfile"
import PseudoTimetable from "./PseudoTimetable"
import PseudoNotification from "./PseudoNotification"
import PseudoAvailableHalls from "./PseudoAvailableHalls"
import ClassSummary from "./ClassSummary"
export default function DefaultBoard() {
    return(
        <aside className="col-span-1 bg-bg md:pr-4 md:col-span-6 lg:col-span-7 overflow-y-auto flex flex-col gap-4 rounded-xl">
            <PseudoProfile/>
            <PseudoTimetable/>
            <PseudoNotification/>
            <PseudoAvailableHalls/>
            <ClassSummary/>
        </aside>
    )
}