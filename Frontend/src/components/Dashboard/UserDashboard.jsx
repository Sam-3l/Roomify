import Sidebar from "./Sidebar";
import DefaultBoard from "./DefaultBoard";
import BookingForm from "./BookingForm";
import Timetable from "./Timetable";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { useState } from "react";
import AvailableHalls from "./AvailableHalls";

export default function UserDashboard() {
  const [selected, setSelected] = useState("home");

  return (
    <main className="grid w-screen bg-bg row-auto md:h-screen grid-cols-1 overflow-y-auto md:grid-cols-11 gap-4 p-4 md:overflow-y-hidden">
      {/* Left Column */}
      <Sidebar selected={selected} setSelected={setSelected} />
    {/* Middle Column */}
      {selected === "home" ? (
        <DefaultBoard />
      ) : selected === "timetable" ? (
        <Timetable />
      ) : selected === "notifications" ? (
        <Notifications />
      ) : selected === "halls" ? (
        <AvailableHalls />
      ) : selected === "profile" ? (
        <Profile />
      ) : null}
      {/* Right Column */}
      {selected === "home" ? <BookingForm /> : null}
    </main>
  );
}
