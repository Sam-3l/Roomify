export default function NotificationCard(props){
  return (
    <div className="col-span-1 flex flex-col p-6 bg-white gap-2 rounded-md">
      <p className={props.isread ? "text-sm" : "text-red-800 text-sm"}>
        {props.time} | {props.date}{" "}
      </p>
      <p className={props.isread ? "text-[1.1rem]" : "text-[1.1rem] text-secondary"}>{props.content}</p>
    </div>
  );

}
