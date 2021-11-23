import { Content, Row, Col, Box, Button } from 'adminlte-2-react';
import { Modal, Collapse } from 'antd';
import { useEffect, useState } from 'react';

const { Panel } = Collapse;

export function Employees() {

    const springBackendUrl = "http://localhost:8080/api/employees";

    const [activeKey, setActiveKey] = useState('0');

    const [employees, setEmployees] = useState([]);

    const [update, setUpdate] = useState("");


    useEffect(() => {
        console.log("running useEffect")
        getAllEmployees();
    }, []);


    const getAllEmployees = () => {
        fetch(springBackendUrl)
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                console.log("All employees")
            })
            .catch(err => {
                console.log(err)
            });

        setUpdate("1");
        console.log(employees);
    }


    function callback(key) {

        if (activeKey === '0') {
            setActiveKey('1');
        }
        else {
            setActiveKey('0');
        }

        console.log(activeKey);
    }


    //handles new employee submissions
    const handleSubmit = (event) => {

        event.preventDefault();
        const firstName = event.target.firstName;
        const lastName = event.target.lastName;
        const email = event.target.email;
        const photoLink = event.target.photoLink;

        const data = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            photoLink: photoLink.value,
        }


        //Send Data to Spring Boot Backend

        let fetchData = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(springBackendUrl, fetchData)
            .then(response => response.json()
                .then(response => {

                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })


            );

        getAllEmployees();
        console.log(data)

    }



    const handleRemove = (empId) => {

        let fetchData = {
            method: 'DELETE',
        }

        fetch(springBackendUrl + "/" + empId, fetchData)
            .then(response => response.text())
            .then(response => {

                alert(response)
                console.log("removal response")
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })

        getAllEmployees();
        //console.log(data)
    };







    return (
        <div>
            {/* Main */}

<br/>
            <form className="theForm" onSubmit={handleSubmit}>

                <label>
                    First Name  <br />
                    <input type="text" name="firstName" id="firstName" />
                </label>


                <label>
                    Last Name  <br />
                    <input type="text" name="lastName" id="lastName" />
                </label>


                <label>
                    Email  <br />
                    <input type="text" name="email" id="email" />
                </label>

                <label>
                    Photo Link  <br />
                    <input type="text" name="photoLink" id="photoLink" />
                </label>

                <input type="submit" />
            </form>

            <br />
            <br />

            <h1>Employees 💼</h1>
            <br />
            <br />
            <table className="container">
                <thead>
                    <tr>
                        <th><h1 className="photo">📸</h1></th>
                        <th><h1>First Name</h1></th>
                        <th><h1>Last Name</h1></th>
                        <th><h1>Email</h1></th>
                        <th><h1>Remove</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) =>
                        <tr key={employee.id}>
                            <td><img src={employee.photoLink} width="100" height="100" /></td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td className="remove" onClick={() => handleRemove(employee.id)}>❌</td>
                        </tr>)}
                </tbody>
            </table>
        </div>

    );
}