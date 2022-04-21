import { CoursePart } from "../types";
import Part from "./Part";

export default function Content({ parts }: { parts: CoursePart[] }) {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
}
