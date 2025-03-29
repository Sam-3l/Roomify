import NotificationCard from "../Body/NotificationCard";

export default function PseudoNotifications() {
  return (
    <section className="flex py-6 flex-col gap-4 w-full">
      <div className="flex gap-4">
        <span className="w-1 rounded-full bg-red-500"></span>
        <h1 className="text-lg md:text-xl text-secondary">
          Unread Notifications
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
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
          isread={false}
        />
      </div>
    </section>
  );
}

