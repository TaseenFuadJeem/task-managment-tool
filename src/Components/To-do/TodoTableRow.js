import React from 'react';

const TodoTableRow = ({ task, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{task?.title}</td>
            <td>{task?.details}</td>
            <td>{task?.date}</td>
            <th>
                <button class="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default TodoTableRow;