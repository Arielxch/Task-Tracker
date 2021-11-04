const NotFound = ({ someId }) => {
  const notFoundMsg = `${someId}: Not found!`;
  const noTasksMsg = 'No tasks';
  return (
    <>
      <h2>{someId === undefined || someId === null ? noTasksMsg : notFoundMsg}</h2>
    </>
  );
};
export default NotFound;