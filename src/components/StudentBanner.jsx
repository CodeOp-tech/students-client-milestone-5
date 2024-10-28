import axios from "axios";

export const StudentBanner = ({ selectedStudent, handleDeleteStudent }) => {
  const handleClick = async () => {
    const { data } = await axios.delete(
      `http://localhost:4000/api/students/${selectedStudent.id}`
    );

    handleDeleteStudent(selectedStudent);
  };

  return (
    <div>
      <h2>
        {selectedStudent.firstName} {selectedStudent.lastName}
      </h2>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};
