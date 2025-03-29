import NotificationCard from "../Body/NotificationCard";
export default function Notifications() {
  return (
    <aside className="col-span-1 overflow-y-auto pr-4 flex md:col-span-10 py-6 flex-col gap-4 w-full">
      <h1 className="text-lg md:text-xl">Notifications</h1>
      <div className="grid grid-cols-1 gap-4 w-full">
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam libero atque unde! Sit a nemo sapiente eveniet, impedit doloribus!"
          isread={false}
        />
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus."
          isread={false}
        />
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="MTH 201 Exam results are out."
          isread={true}
        />
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="MTH 201 Exam results are out."
          isread={true}
        />
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="MTH 201 Exam results are out."
          isread={true}
        />
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="MTH 201 Exam results are out."
          isread={true}
        />
        {/* Notification */}
        <NotificationCard
          date="Today"
          time="19:28"
          content="MTH 201 Exam results are out."
          isread={true}
        />
      </div>
    </aside>
  );
}
