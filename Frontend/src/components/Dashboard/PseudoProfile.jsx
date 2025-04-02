export default function PseudoProfile() {
  return (
    <section className="relative w-full bg-white p-6 py-8 gap-8 rounded-xl flex flex-col lg:flex-row items-center">
      {/* Profile Pic */}
      <div className="relative w-60 rounded-full aspect-square bg-[url(../src/assets/avatar.png)] bg-contain ">
        {/* Edit Profile */}
        <button className="cursor-pointer bg-bg w-12 rounded-full bottom-0 aspect-square flex items-center justify-center absolute right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-lg md:text-3xl text-center md:text-left">
          Welcome back, Elijah!
        </h1>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
          <span className="text-base col-span-1 flex flex-col items-baseline">
            <p className="text-sm opacity-60">Name</p>
            <p className="text-secondary">Oloyede Elijah </p>
          </span>
          <span className="text-base col-span-1 flex flex-col items-baseline">
            <p className="text-sm opacity-60">Reg No:</p>
            <p className="text-secondary">EEG/2022/###</p>
          </span>
          <span className="text-base col-span-1 flex flex-col items-baseline">
            <p className="text-sm opacity-60">Level</p>
            <p className="text-secondary">200</p>
          </span>
          <span className="text-base col-span-1 flex flex-col items-baseline">
            <p className="text-sm opacity-60">Programme</p>
            <p className="text-secondary">B.Sc </p>
          </span>
          <span className="text-base col-span-1 flex flex-col items-baseline">
            <p className="text-sm opacity-60">Faculty</p>
            <p className="text-secondary">Technology</p>
          </span>
          <span className="text-base col-span-1 flex flex-col items-baseline">
            <p className="text-sm opacity-60">Degree</p>
            <abbr className="text-secondary" title="Electronic and Electrical Engineering">EEE</abbr>
          </span>
        </div>
      </div>
    </section>
  );
}
