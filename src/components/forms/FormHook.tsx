import {
  FieldValues,
  PathValue,
  RegisterOptions,
  useForm,
} from "react-hook-form";

// FOLLOWING IS FOR HOOK FORM
interface IFormInputs {
  name: string;
  age: number;
}

function FormHook() {
  // FOLLOWING IS FOR HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  // FUNCTION FOR REACT HOOK FORM
  //   const onHookSubmit = (data: FieldValues) => {
  const onHookSubmit = (data: IFormInputs) => {
    console.log("Form Hook Output:", data);
  };

  return (
    <>
      {/* <form
            className="form-control"
            onSubmit={handleSubmit((data) => console.log(data))}
          > */}
      <form
        noValidate
        className="form-control"
        onSubmit={handleSubmit(onHookSubmit)}
      >
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered input-primary mb-2"
          placeholder="Your Name"
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name?.type === "required" && (
          <p className="alert alert-warning">{errors.name.message}</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="alert alert-warning">{errors.name.message}</p>
        )}

        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          type="text"
          id="age"
          className="input input-bordered input-primary mb-2"
          placeholder="Your Age"
          {...register("age", {
            required: "This field is required",
            min: { value: 18, message: "You must be at least 18" },
            // PATTERN DID NOT WORK HERE
            // pattern: {
            //   value: /^[0-9]+$/,
            //   message: "Age must be a number",
            // } as any,
            validate: (value) =>
              /^[0-9]+$/.test(value.toString()) || "Age must be a number",
            valueAsNumber: true,
          })}
        />
        {errors.age?.type === "required" && (
          <p className="alert alert-warning">{errors.age.message}</p>
        )}
        {errors.age?.type === "min" && (
          <p className="alert alert-warning">{errors.age.message}</p>
        )}
        {errors.age?.type === "validate" && (
          <p className="alert alert-warning">{errors.age.message}</p>
        )}
        <button className="btn mt-3">Submit</button>
      </form>
    </>
  );
}

export default FormHook;
