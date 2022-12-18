import React from 'react';
import AddAdmin from './AddAdmin';
import ReadAdmins from './ReadAdmins';

const AdminPanel = () => {
    return (
        <div>
            <h2>Admin Panel</h2>
            <AddAdmin />
            <ReadAdmins />
        </div>
    );
};

export default AdminPanel;
