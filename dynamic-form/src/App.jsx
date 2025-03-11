import DynamicForm from"../src/componant/DynamicForm";

const schema = {
  title: "User Registration",
  fields: [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    {
      label: "Address",
      name: "address",
      type: "section",
      fields: [
        { label: "Street", name: "street", type: "text" },
        { label: "City", name: "city", type: "text" }
      ]
    }
  ]
};

const App = () => {
  const handleSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <DynamicForm schema={schema} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
