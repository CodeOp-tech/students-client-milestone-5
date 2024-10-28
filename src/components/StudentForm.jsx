import { useState } from "react";
import axios from "axios";

export const StudentForm = ({ handleAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const student = {
      firstName,
      lastName,
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/students",
      student
    );

    handleAddStudent(data.student);

    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Enter first name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            placeholder="Enter last name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
