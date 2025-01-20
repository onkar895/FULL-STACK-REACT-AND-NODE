/* eslint-disable react/prop-types */

const TodoList = ({ todos, toggleMarkCompleted }) => {

  const thStyles = { border: '1px solid gray', padding: '15px', textAlign: 'center', backgroundColor: '#0066B2', color: 'white' };

  const tdStyles = { border: '1px solid gray', padding: '15px', textAlign: 'center', backgroundColor: 'white', color: 'black', fontWeight: 'bold' }

  const markCompletedHandler = () => {
    toggleMarkCompleted(todos.id)
  }

  return (
    <div style={{ display: "block", margin: 'auto', width: '500px', height: 'auto', marginTop: '50px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyles}>Name</th>
            <th style={thStyles}>Email</th>
            <th style={thStyles}>Password</th>
            <th style={thStyles}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo) => (
              <tr key={todo.id}>
                <td style={tdStyles}>{todo.name}</td>
                <td style={tdStyles}>{todo.email}</td>
                <td style={tdStyles}>{todo.password}</td>
                <td style={tdStyles}>
                  <input type="checkbox" defaultChecked={todo.completed} onChange={markCompletedHandler} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
