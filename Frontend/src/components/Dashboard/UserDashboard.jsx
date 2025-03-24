import Sidebar from "./Sidebar"
import DefaultBoard from "./DefaultBoard"
import BookingForm from "./BookingForm"
import Timetable from "./Timetable"
import Notifications from "./Notifications"
import Profile from "./Profile"
import { useState } from "react";
import AvailableHalls from "./AvailableHalls";


export default function UserDashboard() {

    const [selected, setSelected] = useState("home");
    
    
    return (
        <main className="grid h-screen grid-cols-11 grid-rows-1 gap-4 p-4">
            <Sidebar selected={selected} setSelected={setSelected} />
            {selected === "home" ? (
                <DefaultBoard />
            ) : selected === "timetable" ? (
                <Timetable/>
            ) : selected === "notifications" ? (
                <Notifications />
            ) : selected === "halls" ? (
                <AvailableHalls />
            ) : selected === "profile" ? (
                <Profile />
            ) : null}
            <BookingForm />
        </main>
    )
}