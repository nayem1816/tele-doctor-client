import React from 'react';
import rony from '../../../images/social-media/rony.jpg';
import nayem from '../../../images/social-media/nayem.jpg';
import aziz from '../../../images/social-media/aziz.jpg';
import alena from '../../../images/social-media/alena.jpg';
import maleDoctorOne from '../../../images/social-media/male-doctor-1.jpg';
import maleDoctorTwo from '../../../images/social-media/male-doctor-2.jpg';
import femaleDoctorOne from '../../../images/social-media/women-doctor-1.jpg';
import femaleDoctorTwo from '../../../images/social-media/women-doctor-2.jpg';
import ronyDisease from '../../../images/social-media/malaria pic.jpg';
import tinaDisease from '../../../images/social-media/fever.jpg';
import azizDisease from '../../../images/social-media/diabetes.jpeg';
import alenaDisease from '../../../images/social-media/healthy food.jpg';
import './AllPostMain.css';
import { MdSend } from 'react-icons/md';

const AllPostMain = () => {
    return (
        <div className="container ms-5">
            <div className="card mb-5 ">
                <div className="card-body">
                    <div className="d-flex pb-3">
                        <img
                            src={rony}
                            alt=""
                            className="profile-photo-md   "
                        />
                        <div className="">
                            <h3 className="card-title text-bold ">Al Amin</h3>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last actived 3 mins ago
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
                        src={ronyDisease}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={nayem}
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
                                src={maleDoctorOne}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Dr. Bryn
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Vero,
                                            explicabo sed? Quo repellendus
                                            necessitatibus accusamus ipsum
                                            dignissimos optio, enim quisquam
                                            atque error temporibus? Consequuntur
                                            eveniet perspiciatis perferendis
                                            dolores ipsum ullam.
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
                            src={alena}
                            alt=""
                            className="profile-photo-md   "
                        />
                        <div className="">
                            <h3 className="card-title text-bold ">
                                Alena Jolly
                            </h3>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last actived 10 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate dicta, quam non sed quaerat unde facilis.
                        Inventore delectus sequi accusantium facere neque
                        dolores magni saepe adipisci aspernatur ipsa deserunt
                        quas, deleniti esse incidunt voluptatum molestiae fugiat
                        maiores atque dolorem. Quisquam vero inventore delectus,
                        ducimus odit eius quis? Iure, repudiandae cumque
                        accusantium quo maiores dolores commodi voluptatum optio
                        obcaecati rerum excepturi.
                    </p>
                </div>
                <div>
                    <img
                        src={alenaDisease}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={nayem}
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
                                src={rony}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Al Amin
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Vero,
                                            explicabo sed? Quo repellendus
                                            necessitatibus accusamus ipsum
                                            dignissimos optio, enim quisquam
                                            atque error temporibus? Consequuntur
                                            eveniet perspiciatis perferendis
                                            dolores ipsum ullam.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex p-4">
                            <img
                                src={femaleDoctorOne}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Dr. Tina
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
                            src={femaleDoctorOne}
                            alt=""
                            className="profile-photo-md   "
                        />
                        <div className="">
                            <h3 className="card-title text-bold ">Dr. Tina</h3>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last actived 1 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi quia cumque eaque adipisci explicabo. Maiores
                        possimus excepturi, accusamus dolorum distinctio, ex
                        porro inventore facilis cumque minus minima. Asperiores
                        iste nostrum voluptatum reprehenderit dolorem a ullam
                        dignissimos repudiandae impedit quae deserunt nesciunt
                        tenetur alias, nihil tempora totam ut omnis corrupti qui
                        beatae culpa minus! Architecto esse eius tempora quod
                        aperiam ad, recusandae provident labore pariatur
                        nostrum. Non, id officiis! Tempore nesciunt natus ut
                        aspernatur adipisci, rem at deserunt ex repellat!
                        Quisquam excepturi, quibusdam sequi laboriosam
                        doloremque commodi hic quia tenetur totam asperiores
                        autem et? Nihil, cupiditate impedit ad cumque rerum cum
                        ab minus voluptate obcaecati, pariatur eum quis. Dolore
                        vel modi voluptatem odit eveniet ipsa adipisci impedit
                        hic porro praesentium? Sed nemo repellat ducimus unde
                        amet quo laborum aliquid numquam sapiente!
                    </p>
                </div>
                <div>
                    <img
                        src={tinaDisease}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={nayem}
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
                                src={maleDoctorTwo}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Dr. John
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
                                            consectetur, adipisicing elit. Vero,
                                            explicabo sed? Quo repellendus
                                            necessitatibus accusamus ipsum
                                            dignissimos optio, enim quisquam
                                            atque error temporibus? Consequuntur
                                            eveniet perspiciatis perferendis
                                            dolores ipsum ullam.
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
                                        Alena Jolly
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
                            src={aziz}
                            alt=""
                            className="profile-photo-md   "
                        />
                        <div className="">
                            <h3 className="card-title text-bold ">Aziz</h3>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last actived 30 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo, sapiente quod! Id itaque nesciunt eius eos nihil,
                        maxime vero ad quae corporis facilis fugiat atque ut
                        aliquam eum adipisci voluptates veritatis eligendi
                        veniam obcaecati aspernatur commodi quia totam?
                        Quibusdam officia dolores voluptas vel incidunt dolore
                        consequuntur nemo ex magni ipsum dolorem ea error,
                        voluptate nobis debitis magnam, aliquid blanditiis
                        corporis! Laudantium voluptates aliquam quis odio
                        tenetur! Repellat reiciendis optio blanditiis, id quae
                        in amet, aliquam soluta doloremque, placeat deleniti
                        voluptatum?
                    </p>
                </div>
                <div>
                    <img
                        src={azizDisease}
                        className="card-img-bottom postImage "
                        alt="..."
                    />
                    <div className="post-react ">
                        <div className="row p-4">
                            <div className="col-md-7 col-sm-7">
                                <div className="form-grp d-flex ">
                                    <img
                                        src={nayem}
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
                                src={alena}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Alena Jolly
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
                                src={femaleDoctorTwo}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Dr. Elisa
                                    </h5>
                                    <p className="card-text">
                                        <small>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Vero,
                                            explicabo sed? Quo repellendus
                                            necessitatibus accusamus ipsum
                                            dignissimos optio, enim quisquam
                                            atque error temporibus? Consequuntur
                                            eveniet perspiciatis perferendis
                                            dolores ipsum ullam.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex p-4">
                            <img
                                src={rony}
                                alt=""
                                className="profile-photo-md   "
                            />
                            <div className=" card ">
                                <div className="p-2">
                                    <h5 className="card-title fw-bold ">
                                        Al Amin
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

export default AllPostMain;
