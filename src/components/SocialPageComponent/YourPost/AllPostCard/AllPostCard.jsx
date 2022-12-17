import React from 'react';
import rony from '../../../../images/social-media/rony.jpg';
import aziz from '../../../../images/social-media/aziz.jpg';
import alena from '../../../../images/social-media/alena.jpg';
import { MdSend } from 'react-icons/md';

const AllPostCard = () => {
    return (
        <div className="container mt-5">
            <div className="card mb-5 ">
                <div className="card-body">
                    <div className="d-flex pb-3">
                        <img
                            src={rony}
                            alt=""
                            className="profile-photo-md   "
                        />

                        <div className="">
                            <div className="d-flex">
                                <h4 className=" fw-bold ">Al Amin </h4> <br />
                                <h5 className="p-1">
                                    {' '}
                                    updated his profile picture.
                                </h5>
                            </div>

                            <p className="card-text">
                                <small className="text-muted">
                                    22 Aug 2022
                                </small>
                            </p>
                        </div>
                    </div>
                    <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Libero dignissimos cum maxime ab, fugiat, dolorum
                        ad autem odit quos quasi unde eaque mollitia saepe,
                        velit commodi excepturi omnis ut harum voluptas numquam
                        magni neque id animi? Harum molestias, reiciendis,
                        aperiam ex consectetur magnam ut illo veritatis alias
                        impedit animi hic magni eum provident pariatur corrupti
                        iste ad. Impedit nihil maiores, perspiciatis animi quo
                        corporis quam fugit recusandae excepturi quia vel ullam
                        sequi provident id eum eligendi, quidem iste incidunt
                        consequuntur labore nisi voluptatum. Repellat
                        repellendus quasi enim obcaecati eos architecto quo a
                        accusantium impedit quibusdam, laudantium provident quam
                        incidunt beatae ullam autem vero, nesciunt voluptas
                        temporibus accusamus, aliquam necessitatibus sed
                        placeat. Expedita itaque perspiciatis, doloribus veniam
                        iste corporis reprehenderit, sapiente cumque provident
                        aliquam non, quibusdam praesentium mollitia error velit
                        ducimus! Dolorum, cupiditate consequatur. Cumque
                        repellendus non adipisci reiciendis quisquam cupiditate
                        eligendi culpa doloremque quidem quaerat obcaecati
                        molestias illum, labore ducimus amet dignissimos alias!
                        Suscipit officia sed natus pariatur, excepturi
                        voluptatem vel eveniet autem ex nostrum repudiandae
                        error at. Distinctio excepturi sequi quaerat deleniti
                        inventore placeat, nam illo ad harum odit omnis magni ex
                        earum eum esse tenetur atque explicabo ullam.
                    </p>
                </div>
                <div>
                    <img
                        src={rony}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={rony}
                                        alt=""
                                        className="profile-photo-md "
                                    />
                                    <textarea
                                        name="texts"
                                        id="exampleTextarea"
                                        cols="30"
                                        rows="1"
                                        className="form-control"
                                        placeholder="Write a comment...."
                                    />
                                </div>
                            </div>
                            <div className="col-md-5  col-sm-5">
                                <div className="tools  ">
                                    <MdSend className="mt-2 send-btn" />
                                </div>
                            </div>
                        </div>
                        <hr className="m-3 " />
                        <div className="d-flex p-4">
                            <img
                                src={aziz}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Aziz
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            vel ipsum officiis alias,
                                            reprehenderit repellat a quo quos
                                            nulla dolorum quidem delectus
                                            voluptatem eum error, atque hic,
                                            numquam quis facere aliquam facilis
                                            tenetur. Laboriosam debitis odio
                                            quas suscipit eveniet atque pariatur
                                            ab saepe nam, necessitatibus hic
                                            consequatur nisi eos incidunt.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex p-4">
                            <img
                                src={alena}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Alena Jolly{' '}
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint
                                            veritatis odio reiciendis, alias
                                            porro ad cum minima, labore
                                            voluptate officia recusandae laborum
                                            totam beatae ut.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-5 ">
                <div className="card-body">
                    <div className="d-flex pb-3">
                        <img
                            src={rony}
                            alt=""
                            className="profile-photo-md   "
                        />

                        <div className="">
                            <div className="d-flex">
                                <h4 className=" fw-bold ">Al Amin </h4> <br />
                                <h5 className="p-1">
                                    {' '}
                                    updated his profile picture.
                                </h5>
                            </div>

                            <p className="card-text">
                                <small className="text-muted">
                                    22 Aug 2022
                                </small>
                            </p>
                        </div>
                    </div>
                    <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Libero dignissimos cum maxime ab, fugiat, dolorum
                        ad autem odit quos quasi unde eaque mollitia saepe,
                        velit commodi excepturi omnis ut harum voluptas numquam
                        magni neque id animi? Harum molestias, reiciendis,
                        aperiam ex consectetur magnam ut illo veritatis alias
                        impedit animi hic magni eum provident pariatur corrupti
                        iste ad. Impedit nihil maiores, perspiciatis animi quo
                        corporis quam fugit recusandae excepturi quia vel ullam
                        sequi provident id eum eligendi, quidem iste incidunt
                        consequuntur labore nisi voluptatum. Repellat
                        repellendus quasi enim obcaecati eos architecto quo a
                        accusantium impedit quibusdam, laudantium provident quam
                        incidunt beatae ullam autem vero, nesciunt voluptas
                        temporibus accusamus, aliquam necessitatibus sed
                        placeat. Expedita itaque perspiciatis, doloribus veniam
                        iste corporis reprehenderit, sapiente cumque provident
                        aliquam non, quibusdam praesentium mollitia error velit
                        ducimus! Dolorum, cupiditate consequatur. Cumque
                        repellendus non adipisci reiciendis quisquam cupiditate
                        eligendi culpa doloremque quidem quaerat obcaecati
                        molestias illum, labore ducimus amet dignissimos alias!
                        Suscipit officia sed natus pariatur, excepturi
                        voluptatem vel eveniet autem ex nostrum repudiandae
                        error at. Distinctio excepturi sequi quaerat deleniti
                        inventore placeat, nam illo ad harum odit omnis magni ex
                        earum eum esse tenetur atque explicabo ullam.
                    </p>
                </div>
                <div>
                    <img
                        src={rony}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={rony}
                                        alt=""
                                        className="profile-photo-md "
                                    />
                                    <textarea
                                        name="texts"
                                        id="exampleTextarea"
                                        cols="30"
                                        rows="1"
                                        className="form-control"
                                        placeholder="Write a comment...."
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-5  col-sm-5">
                                <div className="tools  ">
                                    <MdSend className="mt-2 send-btn" />
                                </div>
                            </div>
                        </div>
                        <hr className="m-3 " />
                        <div className="d-flex p-4">
                            <img
                                src={aziz}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Aziz
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            vel ipsum officiis alias,
                                            reprehenderit repellat a quo quos
                                            nulla dolorum quidem delectus
                                            voluptatem eum error, atque hic,
                                            numquam quis facere aliquam facilis
                                            tenetur. Laboriosam debitis odio
                                            quas suscipit eveniet atque pariatur
                                            ab saepe nam, necessitatibus hic
                                            consequatur nisi eos incidunt.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex p-4">
                            <img
                                src={alena}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Alena Jolly{' '}
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint
                                            veritatis odio reiciendis, alias
                                            porro ad cum minima, labore
                                            voluptate officia recusandae laborum
                                            totam beatae ut.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-5 ">
                <div className="card-body">
                    <div className="d-flex pb-3">
                        <img
                            src={rony}
                            alt=""
                            className="profile-photo-md   "
                        />

                        <div className="">
                            <div className="d-flex">
                                <h4 className=" fw-bold ">Al Amin </h4> <br />
                                <h5 className="p-1">
                                    {' '}
                                    updated his profile picture.
                                </h5>
                            </div>

                            <p className="card-text">
                                <small className="text-muted">
                                    22 Aug 2022
                                </small>
                            </p>
                        </div>
                    </div>
                    <p className="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Libero dignissimos cum maxime ab, fugiat, dolorum
                        ad autem odit quos quasi unde eaque mollitia saepe,
                        velit commodi excepturi omnis ut harum voluptas numquam
                        magni neque id animi? Harum molestias, reiciendis,
                        aperiam ex consectetur magnam ut illo veritatis alias
                        impedit animi hic magni eum provident pariatur corrupti
                        iste ad. Impedit nihil maiores, perspiciatis animi quo
                        corporis quam fugit recusandae excepturi quia vel ullam
                        sequi provident id eum eligendi, quidem iste incidunt
                        consequuntur labore nisi voluptatum. Repellat
                        repellendus quasi enim obcaecati eos architecto quo a
                        accusantium impedit quibusdam, laudantium provident quam
                        incidunt beatae ullam autem vero, nesciunt voluptas
                        temporibus accusamus, aliquam necessitatibus sed
                        placeat. Expedita itaque perspiciatis, doloribus veniam
                        iste corporis reprehenderit, sapiente cumque provident
                        aliquam non, quibusdam praesentium mollitia error velit
                        ducimus! Dolorum, cupiditate consequatur. Cumque
                        repellendus non adipisci reiciendis quisquam cupiditate
                        eligendi culpa doloremque quidem quaerat obcaecati
                        molestias illum, labore ducimus amet dignissimos alias!
                        Suscipit officia sed natus pariatur, excepturi
                        voluptatem vel eveniet autem ex nostrum repudiandae
                        error at. Distinctio excepturi sequi quaerat deleniti
                        inventore placeat, nam illo ad harum odit omnis magni ex
                        earum eum esse tenetur atque explicabo ullam.
                    </p>
                </div>
                <div>
                    <img
                        src={rony}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={rony}
                                        alt=""
                                        className="profile-photo-md "
                                    />
                                    <textarea
                                        name="texts"
                                        id="exampleTextarea"
                                        cols="30"
                                        rows="1"
                                        className="form-control"
                                        placeholder="Write a comment...."
                                    />
                                </div>
                            </div>
                            <div className="col-md-5  col-sm-5">
                                <div className="tools  ">
                                    <MdSend className="mt-2 send-btn" />
                                </div>
                            </div>
                        </div>
                        <hr className="m-3 " />
                        <div className="d-flex p-4">
                            <img
                                src={aziz}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Aziz
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            vel ipsum officiis alias,
                                            reprehenderit repellat a quo quos
                                            nulla dolorum quidem delectus
                                            voluptatem eum error, atque hic,
                                            numquam quis facere aliquam facilis
                                            tenetur. Laboriosam debitis odio
                                            quas suscipit eveniet atque pariatur
                                            ab saepe nam, necessitatibus hic
                                            consequatur nisi eos incidunt.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex p-4">
                            <img
                                src={alena}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Alena Jolly{' '}
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Sint
                                            veritatis odio reiciendis, alias
                                            porro ad cum minima, labore
                                            voluptate officia recusandae laborum
                                            totam beatae ut.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPostCard;
