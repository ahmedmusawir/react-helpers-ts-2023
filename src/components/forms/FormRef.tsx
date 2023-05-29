import { FormEvent, useRef, useState } from "react";

function FormRef() {
  // FOLLOING IS FOR FORM REF
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  // FUNCTION FOR USE REF
  const handleRefSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current !== null) person.name = nameRef.current.value;

    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log({ person });
  };

  return (
    <form className="form-control" onSubmit={handleRefSubmit}>
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="input input-bordered input-primary mb-2"
        placeholder="Your Name"
        ref={nameRef}
      />
      <label className="label" htmlFor="age">
        Age
      </label>
      <input
        type="text"
        id="age"
        className="input input-bordered input-primary mb-2"
        placeholder="Your Age"
        ref={ageRef}
      />
      <button className="btn mt-3">Submit</button>
    </form>
  );
}

export default FormRef;
