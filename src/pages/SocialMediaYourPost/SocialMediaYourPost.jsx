import React from 'react';
import YourPost from '../../components/SocialPageComponent/YourPost/YourPost/YourPost';
import { useParams } from 'react-router-dom';
import socialActiveUser from '../../services/data/SocialActiveUser';
import SocialPageHeader from '../../components/SocialPageComponent/SocialPageHeader/SocialPageHeader';
const SocialMediaYourPost = () => {
    const { id } = useParams();
    const findUser = socialActiveUser.find(
        (user) => parseInt(user.id) === parseInt(id)
    );
    return (
        <div>
            <SocialPageHeader />
            <YourPost findUser={findUser} />
        </div>
    );
};

export default SocialMediaYourPost;
