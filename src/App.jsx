import DynamicForm from "./Component/DynamicForm";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}>
      <DynamicForm />
    </div>
  );
};

export default App;
