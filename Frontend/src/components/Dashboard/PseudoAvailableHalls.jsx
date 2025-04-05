import PseudoHallCard from "../Body/PseudoHallCard";

export default function PseudoAvailableHalls() {
  return (
    <section className="flex py-6 flex-col gap-4 w-full">
      <div className="flex gap-4 ">
        <h1 className="text-lg">Vacant Halls</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-1 gap-4">
        {/* Hall */}
        <PseudoHallCard hall="AUD II" capacity="200" status="vacant" />
        {/* Hall */}
        <PseudoHallCard hall="1K SLT" capacity="1000" status="in use" />
        {/* Hall */}
        <PseudoHallCard hall="BOO C" capacity="300" status="vacant" />
        {/* Hall */}
        <PseudoHallCard hall="FBLT" capacity="300" status="pending" />
        {/* Hall */}
        <PseudoHallCard hall="LAW 209" capacity="400" status="in use" />
        {/* Hall */}
        <PseudoHallCard hall="PHY 291" capacity="70" status="pending" />
      </div>
    </section>
  );
}
