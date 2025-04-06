import ClassSummary from "./ClassSummary";

export default function Profile() {
    return(
        <aside className="col-span-1 overflow-y-auto pr-4 flex md:col-span-10 py-6 flex-col gap-4 w-full">
            <ClassSummary/>
        </aside>
    )
}