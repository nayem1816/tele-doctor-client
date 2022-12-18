import {
    MdOutlineSpaceDashboard,
    MdDomainVerification,
    MdOutlineFormatListNumbered,
} from 'react-icons/md';
import { GoChecklist } from 'react-icons/go';
import { BsListStars, BsPatchQuestionFill } from 'react-icons/bs';
import { FaClinicMedical } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';

const sidebarMenuData = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <MdOutlineSpaceDashboard />,
        link: '/dashboard/home',
        sidebarAdmin: true,
        sidebarDoctor: true,
    },
    {
        id: 2,
        name: 'Doctor verification',
        icon: <MdDomainVerification />,
        link: '/dashboard/verification',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 3,
        name: 'Doctors',
        icon: <MdOutlineFormatListNumbered />,
        link: '/dashboard/doctors',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 25,
        name: 'Nurses',
        icon: <MdOutlineFormatListNumbered />,
        link: '/dashboard/nurses',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 5,
        name: 'Appointments',
        icon: <GoChecklist />,
        link: '/dashboard/appointments',
        sidebarAdmin: true,
        sidebarDoctor: true,
    },
    {
        id: 6,
        name: 'Prescriptions',
        icon: <BsListStars />,
        link: '/dashboard/prescriptions',
        sidebarAdmin: true,
        sidebarDoctor: true,
    },
    {
        id: 8,
        name: 'Medical Q&A',
        icon: <BsPatchQuestionFill />,
        link: '/dashboard/medicalQA',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 10,
        name: 'Social Media',
        icon: <IoShareSocialSharp />,
        link: '/dashboard/socialMedia',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 11,
        name: 'Admin Panel',
        icon: <RiAdminFill />,
        link: '/dashboard/adminPanel',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 15,
        name: 'Categories',
        icon: <RiAdminFill />,
        link: '/dashboard/categories',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 14,
        name: 'Blog',
        icon: <RiAdminFill />,
        link: '/dashboard/blogs',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
    {
        id: 13,
        name: 'Latest Disease Page',
        icon: <FaClinicMedical />,
        link: '/dashboard/latest-disease-control',
        sidebarAdmin: true,
        sidebarDoctor: false,
    },
];

export default sidebarMenuData;
