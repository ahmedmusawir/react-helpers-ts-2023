import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

// FOLLOWING IS FOR ZOD
const schemaExpense = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 Chars long" })
    .max(50, { message: "Description must be at max 50 Chars long" }),
  amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .min(0.01, { message: "Amount must be at least 0.01" })
    .max(100_000, { message: "Amount must be at max 100k" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

export type ExpenseFormData = z.infer<typeof schemaExpense>;

function ExpenseForm({ onSubmit }: Props) {
  // FOLLOWING IS FOR HOOK FORM ZOD
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schemaExpense) });

  return (
    <>
      <form
        noValidate
        className="form-control"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <label className="label" htmlFor="name">
          Description
        </label>
        <input
          type="text"
          id="description"
          className="input input-bordered input-primary mb-2"
          placeholder="Description"
          {...register("description")}
        />
        {errors.description && (
          <p className="alert alert-warning">{errors.description.message}</p>
        )}

        <label className="label" htmlFor="age">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          className="input input-bordered input-primary mb-2"
          placeholder="Amount"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="alert alert-warning">{errors.amount.message}</p>
        )}
        <label className="label" htmlFor="age">
          Category
        </label>
        <select
          className="select select-primary select-bordered"
          {...register("category")}
          // onChange={(e) => onSelectCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="alert alert-warning">{errors.category.message}</p>
        )}
        <button className="btn mt-3">Submit</button>
      </form>
    </>
  );
}

export default ExpenseForm;
