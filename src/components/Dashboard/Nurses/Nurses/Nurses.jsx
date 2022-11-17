import React from 'react';
import NurseList from '../NurseList/NurseList';
import AddNurses from './../AddNurses/AddNurses';

const Nurses = () => {
    return (
        <div>
            <AddNurses />
            <NurseList />
        </div>
    );
};

export default Nurses;
