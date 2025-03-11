import { useState } from "react";

const DynamicForm = ({ schema, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderFields = (fields) => {
    return fields.map((field) => {
      if (field.type === "section") {
        return (
          <div key={field.name} className="p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="text-lg font-semibold mb-2">{field.label}</h3>
            {renderFields(field.fields)}
          </div>
        );
      } else {
        return (
          <div key={field.name} className="mb-4">
            <label className="block text-sm font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
        );
      }
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md"
    >
      <h2 className="text-xl font-bold text-center mb-4">{schema.title}</h2>
      {renderFields(schema.fields)}
      <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
