import HallCard from "../Body/HallCard";

export default function PseudoAvailableHalls() {
  return (
    <section className="flex py-6 flex-col gap-4 w-full">
      <div className="flex gap-4 ">
        <h1 className="text-lg md:text-xl text-secondary">Vacant Halls</h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/* Hall */}
        <HallCard hall="AUD II" capacity="200" status="Vacant" />
        {/* Hall */}
        <HallCard hall="1K SLT" capacity="1000" status="Vacant" />
        {/* Hall */}
        <HallCard hall="BOO C" capacity="300" status="Vacant" />
        {/* Hall */}
        <HallCard hall="FBLT" capacity="300" status="Vacant" />
        {/* Hall */}
        <HallCard hall="LAW 209" capacity="400" status="Vacant" />
        {/* Hall */}
        <HallCard hall="PHY 291" capacity="70" status="Vacant" />
      </div>
    </section>
  );
}
