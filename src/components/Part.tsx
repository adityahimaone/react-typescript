import React from "react";
import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

export default function Part({ part }: { part: CoursePart }) {
  switch (part.type) {
    case "normal":
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>{part.description}</p>
        </div>
      );
    case "groupProject":
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>project exercise {part.groupProjectCount}</p>
        </div>
      );
    case "submission":
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>{part.description}</p>
          <p>{part.exerciseSubmissionLink}</p>
        </div>
      );
    case "special": {
      return (
        <div>
          <h4>
            {part.name} {part.exerciseCount}
          </h4>
          <p>{part.description}</p>
          <p>required skills: {part.requirements.join(", ")}</p>
        </div>
      );
    }
    default:
      return assertNever(part);
  }
}
