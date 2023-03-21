const InfoTable = (props) => {
    return (
      <table className="table table-primary">
        <thead className="table table-info">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.getData.length > 0 ? (
            props.getData.map((e) => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.course}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      props.setData(e);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      props.del(e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>No Data</tr>
          )}
        </tbody>
      </table>
    );
  };
  
  export default InfoTable;
  