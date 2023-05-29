import { FormEvent, useRef, useState } from "react";

function FormState() {
  // FOLLOWING IS FOR FORM STATE
  const [personObj, setPersonObj] = useState({
    name: "",
    age: 0,
  });

  // FUNCTION FOR USE STATE
  const handleSubmitState = (e: FormEvent) => {
    e.preventDefault();

    console.log({ personObj });
  };
  return (
    <>
      <form className="form-control" onSubmit={handleSubmitState}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered input-primary mb-2"
          placeholder="Your Name"
          onChange={(e) => setPersonObj({ ...personObj, name: e.target.value })}
          value={personObj.name}
        />
        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          type="text"
          id="age"
          className="input input-bordered input-primary mb-2"
          placeholder="Your Age"
          onChange={(e) =>
            setPersonObj({ ...personObj, age: parseInt(e.target.value) })
          }
          value={personObj.age}
        />
        <button className="btn mt-3">Submit</button>
      </form>
    </>
  );
}

export default FormState;
