/* eslint-disable react/prop-types */

const TodoList = ({ todos, toggleMarkCompleted, deleteTodo }) => {

  const thStyles = { border: '1px solid gray', padding: '15px', textAlign: 'center', backgroundColor: '#0066B2', color: 'white' };

  const tdStyles = { border: '1px solid gray', padding: '15px', textAlign: 'center', backgroundColor: 'white', color: 'black', fontWeight: 'bold' }

  const handleToggle = (e, id) => {
    e.preventDefault();
    toggleMarkCompleted(id);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteTodo(id);
  };

  return (
    <div style={{ display: "block", margin: 'auto', width: '500px', height: 'auto', marginTop: '30px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyles}>Name</th>
            <th style={thStyles}>Email</th>
            <th style={thStyles}>Password</th>
            <th style={thStyles}>Completed</th>
            <th style={thStyles}>Delete</th>
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
                  <input type="checkbox" defaultChecked={todo.completed} onChange={(e) => handleToggle(e, todo.id)} />
                </td>
                <td style={tdStyles} onClick={(e) => handleDelete(e, todo.id)}>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    ❌
                  </button>
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
