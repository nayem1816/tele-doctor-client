import {
    MdOutlineSpaceDashboard,
    MdDomainVerification,
    MdOutlineFormatListNumbered,
    MdEarbuds,
} from 'react-icons/md';
import { AiOutlineUnorderedList, AiFillSetting } from 'react-icons/ai';
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
    },
    {
        id: 2,
        name: 'Doctor verification',
        icon: <MdDomainVerification />,
        link: '/dashboard/verification',
    },
    {
        id: 3,
        name: 'Doctors',
        icon: <MdOutlineFormatListNumbered />,
        link: '/dashboard/doctors',
    },
    {
        id: 25,
        name: 'Nurses',
        icon: <MdOutlineFormatListNumbered />,
        link: '/dashboard/nurses',
    },
    {
        id: 4,
        name: 'Patients',
        icon: <AiOutlineUnorderedList />,
        link: '/dashboard/patients',
    },
    {
        id: 5,
        name: 'Appointments',
        icon: <GoChecklist />,
        link: '/dashboard/appointments',
    },
    {
        id: 6,
        name: 'Prescriptions',
        icon: <BsListStars />,
        link: '/dashboard/prescriptions',
    },
    {
        id: 7,
        name: 'Disease',
        icon: <MdEarbuds />,
        link: '/dashboard/disease',
    },
    {
        id: 8,
        name: 'Medical Q&A',
        icon: <BsPatchQuestionFill />,
        link: '/dashboard/medicalQA',
    },
    {
        id: 9,
        name: 'Covid19',
        icon: <FaClinicMedical />,
        link: '/dashboard/covid19',
    },
    {
        id: 10,
        name: 'Social Media',
        icon: <IoShareSocialSharp />,
        link: '/dashboard/socialMedia',
    },
    {
        id: 11,
        name: 'Admin Panel',
        icon: <RiAdminFill />,
        link: '/dashboard/adminPanel',
    },
    {
        id: 15,
        name: 'Categories',
        icon: <RiAdminFill />,
        link: '/dashboard/categories',
    },
    {
        id: 14,
        name: 'Blog',
        icon: <RiAdminFill />,
        link: '/dashboard/blogs',
    },
    {
        id: 13,
        name: 'Latest Disease Page',
        icon: <FaClinicMedical />,
        link: '/dashboard/latest-disease-control',
    },
    {
        id: 12,
        name: 'Settings',
        icon: <AiFillSetting />,
        link: '/dashboard/settings',
    },
];

export default sidebarMenuData;
