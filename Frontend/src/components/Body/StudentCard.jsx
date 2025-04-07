export default function StudentCard() {
  return (
    <div className="flex flex-col p-4 gap-4 custom-shadow rounded-md bg-white">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-2 items-center">
          <img
            src="../src/assets/avatar.png"
            alt="student"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm text-secondary">John Doe</p>
            <p className="text-xs text-primary">EEG/2022/###</p>
          </div>
        </div>
        <p className="text-sm p-1 px-4 w-max font-semibold rounded-full capitalize bg-neutral-200 text-neutral-950">85%</p>
      </div>
      <button className="button2">View Profile</button>
    </div>
  );
}
