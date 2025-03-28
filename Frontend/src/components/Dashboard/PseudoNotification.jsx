export default function PseudoNotifications() {
  return (
    <section className="flex py-6 flex-col gap-4 w-full">
      <div className="flex gap-4">
        <span className="w-1 rounded-full bg-red-500"></span>
        <h1 className="text-lg md:text-xl text-secondary">Unread Notifications</h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* Notification */}
        <div className="flex flex-col p-6 bg-white gap-2 rounded-md">
          <p className="text-red-800 text-sm">14:24 | Today </p>
          <p className="text-[1.1rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            consequuntur repellendus, voluptates atque ullam repudiandae!
          </p>
        </div>
        {/* Notification */}
        <div className="flex flex-col p-6 bg-white gap-2 rounded-md">
          <p className="text-red-800 text-sm">14:22 | Today </p>
          <p className="text-[1.1rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus.
          </p>
        </div>
        {/* Notification */}
        <div className="flex flex-col p-6 bg-white gap-2 rounded-md">
          <p className="text-red-800 text-sm">14:20 | Today </p>
          <p className="text-[1.1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium cumque autem voluptates, alias ducimus inventore adipisci, blanditiis aliquid sequi corporis. Numquam ea dolorem laudantium! Quisquam quo recusandae id ipsa.
          </p>
        </div>

      </div>
    </section>
  );
}
