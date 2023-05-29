import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// FOLLOWING IS FOR ZOD
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 Chars long" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

function FormZod() {
  // FOLLOWING IS FOR ZOD FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("Zod Form", data);
  };

  return (
    <>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input input-bordered input-primary mb-2"
          placeholder="Your Name"
          {...register("name")}
        />
        {errors.name && (
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
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && (
          <p className="alert alert-warning">{errors.age.message}</p>
        )}
        <button className="btn mt-3">Submit</button>
      </form>
    </>
  );
}

export default FormZod;
