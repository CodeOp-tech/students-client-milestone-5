export const Students = ({ students, handleStudentClick }) => {
  return (
    <div>
      <ul>
        {students.map((student) => {
          return (
            <li
              key={student.id}
              onClick={() => {
                handleStudentClick(student);
              }}
            >
              {student.firstName} {student.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
