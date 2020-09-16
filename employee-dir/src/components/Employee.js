import React from 'react';

function Employee(props) {

    return (
        <tr>
            <td>
                <img 
                    src={props.image} 
                    alt={props.name}
                />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>
                <a 
                    href={props.newEmail}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                {props.email}
                </a>
            </td>
            <td>{props.stateName}</td>
        </tr>
    );
}

export default Employee;