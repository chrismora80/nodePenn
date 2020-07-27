import React from 'react';
import Moment from 'react-moment';

export default class TableData extends React.Component {

    render() {
        return (
            <div>
                <table className="table">
                    <tbody>

                        {this.props.employees.map((employee) => (
                            
                            < tr key={employee.id.value}>
                                <th scope="row"></th>

                                <td>
                                    <img
                                        src={employee.picture.medium}
                                        alt='employee'
                                    />
                                </td>


                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>

                                <td>

                                <Moment format="MM/DD/YYYY">
                                    <td>{employee.dob.date}</td>
                                </Moment>
                                </td>
                                
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        )
    }
}