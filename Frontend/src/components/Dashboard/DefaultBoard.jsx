import PseudoProfile from "./PseudoProfile"
export default function DefaultBoard() {
    return(
        <div className="col-span-7 flex flex-col gap-4 rounded-xl">
            <PseudoProfile/>
            {/* <PseudoTimetable/>
            <PseudoNotifications/>
            <PseudoAvailableHalls/> */}
        </div>
    )
}