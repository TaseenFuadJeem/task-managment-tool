import React from 'react';

const TableRaw = ({ task }) => {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox" />
                </label>
            </th>
            <td>{task?.title}</td>
            <td>{task?.details}</td>
            <td>{task?.date}</td>
        </tr>
    );
};

export default TableRaw;