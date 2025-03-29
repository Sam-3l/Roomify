import PseudoProfile from "./PseudoProfile"
import PseudoTimetable from "./PseudoTimetable"
import PseudoNotification from "./PseudoNotification"
import PseudoAvailableHalls from "./PseudoAvailableHalls"
export default function DefaultBoard() {
    return(
        <div className="col-span-1 bg-bg md:pr-4 md:col-span-7 overflow-auto md:overflow-y-scroll  flex flex-col gap-4 rounded-xl">
            <PseudoProfile/>
            <PseudoTimetable/>
            <PseudoNotification/>
            <PseudoAvailableHalls/>
        </div>
    )
}