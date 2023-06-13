import CommentBox from "./CommentBox";

export default function PlaceDetail({ details }: any) {
  return (
    <div className="flex flex-col">
      <div>
        <h1>{details.name}</h1>
      </div>
      <CommentBox />
    </div>
  );
}
