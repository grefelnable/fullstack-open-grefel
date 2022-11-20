const Header = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  );
};

const Content = ({ course }) => {
  const allParts = course.parts;
  return (
    <div>
      {allParts.map((part) => {
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
    </div>
  );
};

const TotalExercises = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <h4>total of {total} exercises.</h4>
    </div>
  );
};

const Course = ({ courses }) => {
  const course1 = courses[0];
  const course2 = courses[1];

  return (
    <div>
      hello
      {/* course 1 */}
      <Header course={course1} />
      <Content course={course1} />
      <TotalExercises course={course1} />
      {/* course 2 */}
      <Header course={course2} />
      <Content course={course2} />
      <TotalExercises course={course2} />
    </div>
  );
};

export default Course;
