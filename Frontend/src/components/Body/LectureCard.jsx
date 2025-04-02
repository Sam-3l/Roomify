export default function LectureCard(props) {
  return (
    <div className="flex flex-col p-6 bg-white gap-2 rounded-md">
      <p className="text-sm">{props.session}</p>
      <p className="text-[1.3rem] text-secondary">
        {props.course} - {props.hall}{" "}
      </p>
    </div>
  );
}
