import { useEffect, useState } from "react";

function App() {

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  const [editingId, setEditingId] = useState(null);

  const loadEmployees = () => {

  fetch("/api/employees")
    .then(response => response.json())
    .then(data => {
      setEmployees(data);
    })
    .catch(error => {
      console.error(error);
    });

};

useEffect(() => {
  loadEmployees();
}, []);

const addEmployee = () => {
if (!name || !department || !location) {
    alert("Please fill all fields.");
    return;
  }
  const newEmployee = {
    name,
    department,
    location
  };

  fetch("/api/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEmployee)
  })
    .then(response => response.json())
    .then(data => {

      console.log(data);

      loadEmployees();

      setName("");
      setDepartment("");
      setLocation("");

    })
    .catch(error => {

      console.error(error);

    });

};

const deleteEmployee = async (id) => {

  try {

    await fetch(`/api/employees/${id}`, {
      method: "DELETE"
    });

    loadEmployees();

  } catch (error) {

    console.error(error);

  }

};

const updateEmployee = async () => {

  if (!name || !department || !location) {
    alert("Please fill all fields.");
    return;
  }

  const updatedEmployee = {
    name,
    department,
    location
  };

  try {

    await fetch(`/api/employees/${editingId}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(updatedEmployee)

    });

    loadEmployees();

    setEditingId(null);

    setName("");
    setDepartment("");
    setLocation("");

  } catch (error) {

    console.error(error);

  }

};

const editEmployee = (employee) => {

  setEditingId(employee.id);

  setName(employee.name);

  setDepartment(employee.department);

  setLocation(employee.location);

};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management System</h1>
    <div style={{ marginBottom: "20px" }}>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button
        onClick={editingId ? updateEmployee : addEmployee}
        style={{ marginLeft: "10px" }}
      >
        {editingId ? "Update Employee" : "Add Employee"}
      </button>

    </div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.location}</td>

              <td>

                <button
                  onClick={() => editEmployee(employee)}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );

}

export default App;