import { useState } from "react";
import { Container, Row, Box } from "../components/layouts";
import ExpenseFilter from "../expense-tracker/components/ExpenseFilter";
import ExpenseForm from "../expense-tracker/components/ExpenseForm";
import ExpenseList from "../expense-tracker/components/ExpenseList";
import "./Home.scss";
import { ExpenseFormData } from "../expense-tracker/components/ExpenseForm";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Product #1", amount: 2, category: "Grocery" },
    { id: 2, description: "Product #2", amount: 5, category: "Utilities" },
    { id: 3, description: "Product #3", amount: 1, category: "Grocery" },
    { id: 4, description: "Product #4", amount: 3, category: "Entertainment" },
  ]);

  const handleDelete = (id: Number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const handleSubmit = (expense: ExpenseFormData) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  console.log("Selelcted Cat", selectedCategory);

  const handleSelect = (selectedCat: string) => {
    setSelectedCategory(selectedCat);
  };

  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h1 className="h1">Expense Form</h1>
          <ExpenseForm onSubmit={handleSubmit} />

          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Expense List</h1>
          <ExpenseFilter onSelectCategory={handleSelect} />

          <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
