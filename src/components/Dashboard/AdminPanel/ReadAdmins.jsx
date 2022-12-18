import React, { useEffect } from 'react';

const ReadAdmins = () => {
    const [admins, setAdmins] = React.useState([]);
    let count = 1;

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/ReadAdmin')
            .then((res) => res.json())
            .then((data) => {
                setAdmins(data.data);
            });
    }, [admins]);

    return (
        <div>
            <h4>Admins</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin._id}>
                            <th scope="row">{count++}</th>
                            <td>{admin.EmailAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReadAdmins;
