import React from "react";
import rony from "../../../images/social-media/rony.jpg";
import aziz from "../../../images/social-media/aziz.jpg";
import alena from "../../../images/social-media/alena.jpg";
import ronyimg from "../../../images/social-media/timeline/rony-2.jpg";
import { MdSend } from "react-icons/md";
import "./YourProfile.css";

const YourProfile = () => {
  return (
    <div className={"container mt-3"}>
      <div>
      <div class="timeline-cover">

<div class="timeline-nav-bar">
  <div class="row">
    <div class="col-md-6">
      <div class="profile-info">
      <img src={rony} alt=" " class="cover-photo"/>
        <h3 class=" fw-bold ms-3">Al Amin </h3>
      </div>
    </div>
    <div class="col-md-6 text-end pe-4">
      <button class="btn-primary">Edit Profile</button> 
    </div>
  </div>
</div>
</div>
      </div>








      <div className="card mb-5 ">
        <div class="card-body">
          <div className="d-flex pb-3">
            <img src={rony} alt="" class="profile-photo-md" />

            <div className="">
              <div className="d-flex">
                <h4 class=" fw-bold ">Al Amin </h4>
              </div>

              <p class="card-text">
                <small class="text-muted">22 Aug 2022</small>
              </p>
            </div>
          </div>
          <p class="card-text">
            Harum molestias, reiciendis, aperiam ex consectetur magnam ut illo
            veritatis alias impedit animi hic magni eum provident pariatur
            corrupti iste ad. Impedit nihil maiores, perspiciatis animi quo
            corporis quam fugit recusandae excepturi quia vel ullam sequi
            provident id eum eligendi, quidem iste incidunt consequuntur labore
            nisi voluptatum. Repellat repellendus quasi enim obcaecati eos
            architecto quo a accusantium impedit quibusdam, laudantium provident
            quam incidunt beatae ullam autem vero, nesciunt voluptas temporibus
            accusamus, aliquam necessitatibus sed placeat. Expedita itaque
            perspiciatis, doloribus veniam iste corporis reprehenderit, sapiente
            cumque provident aliquam non, quibusdam praesentium mollitia error
            velit ducimus!{" "}
          </p>
        </div>
        <div>
          <img src={ronyimg} class="card-img-bottom postImage " alt="..." />
          <div class="post-react ">
            <div class="row p-4">
              <div class="col-md-7 col-sm-7">
                <div class="form-grp d-flex ">
                  <img src={rony} alt="" class="profile-photo-md" />
                  <textarea
                    name="texts"
                    id="exampleTextarea"
                    cols="30"
                    rows="1"
                    class="form-control"
                    placeholder="Write a comment...."
                  >
                    {" "}
                  </textarea>
                </div>
              </div>
              <div class="col-md-5  col-sm-5">
                <div class="tools  ">
                  <MdSend className="mt-2 send-btn" />
                </div>
              </div>
            </div>
            <hr className="m-3 " />
            <div className="d-flex p-4">
              <img src={aziz} alt="" class="profile-photo-md   " />
              <div className=" card ">
                <div className="p-2">
                  <h5 class="card-title fw-bold ">Aziz</h5>
                  <p class="card-text">
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut vel ipsum officiis alias, reprehenderit repellat a quo
                      quos nulla dolorum quidem delectus voluptatem eum error,
                      atque hic, numquam quis facere aliquam facilis tenetur.
                      Laboriosam debitis odio quas suscipit eveniet atque
                      pariatur ab saepe nam, necessitatibus hic consequatur nisi
                      eos incidunt.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex p-4">
              <img src={alena} alt="" class="profile-photo-md   " />
              <div className=" card ">
                <div className="p-2">
                  <h5 class="card-title fw-bold ">Alena Jolly </h5>
                  <p class="card-text">
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint veritatis odio reiciendis, alias porro ad cum minima,
                      labore voluptate officia recusandae laborum totam beatae
                      ut.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-5 ">
        <div class="card-body">
          <div className="d-flex pb-3">
            <img src={rony} alt="" class="profile-photo-md   " />

            <div className="">
              <div className="d-flex">
                <h4 class=" fw-bold ">Al Amin </h4> <br />
                <h5 className="p-1"> updated his profile picture.</h5>
              </div>

              <p class="card-text">
                <small class="text-muted">22 Aug 2022</small>
              </p>
            </div>
          </div>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            dignissimos cum maxime ab, fugiat, dolorum ad autem odit quos quasi
            unde eaque mollitia saepe, velit commodi excepturi omnis ut harum
            voluptas numquam magni neque id animi? Harum molestias, reiciendis,
            aperiam ex consectetur magnam ut illo veritatis alias impedit animi
            hic magni eum provident pariatur corrupti iste ad. Impedit nihil
            maiores, perspiciatis animi quo corporis quam fugit recusandae
            excepturi quia vel ullam sequi provident id eum eligendi, quidem
            iste incidunt consequuntur labore nisi voluptatum. Repellat
            repellendus quasi enim obcaecati eos architecto quo a accusantium
            impedit quibusdam, laudantium provident quam incidunt beatae ullam
            autem vero, nesciunt voluptas temporibus accusamus, aliquam
            necessitatibus sed placeat. Expedita itaque perspiciatis, doloribus
            veniam iste corporis reprehenderit, sapiente cumque provident
            aliquam non, quibusdam praesentium mollitia error velit ducimus!
            Dolorum, cupiditate consequatur. Cumque repellendus non adipisci
            reiciendis quisquam cupiditate eligendi culpa doloremque quidem
            quaerat obcaecati molestias illum, labore ducimus amet dignissimos
            alias! Suscipit officia sed natus pariatur, excepturi voluptatem vel
            eveniet autem ex nostrum repudiandae error at. Distinctio excepturi
            sequi quaerat deleniti inventore placeat, nam illo ad harum odit
            omnis magni ex earum eum esse tenetur atque explicabo ullam.
          </p>
        </div>
        <div>
          <img src={rony} class="card-img-bottom postImage " alt="..." />
          <div class="post-react ">
            <div class="row p-4">
              <div class="col-md-7 col-sm-7">
                <div class="form-grp d-flex ">
                  <img src={rony} alt="" class="profile-photo-md " />
                  <textarea
                    name="texts"
                    id="exampleTextarea"
                    cols="30"
                    rows="1"
                    class="form-control"
                    placeholder="Write a comment...."
                  >
                    {" "}
                  </textarea>
                </div>
              </div>
              <div class="col-md-5  col-sm-5">
                <div class="tools  ">
                  <MdSend className="mt-2 send-btn" />
                </div>
              </div>
            </div>
            <hr className="m-3 " />
            <div className="d-flex p-4">
              <img src={aziz} alt="" class="profile-photo-md   " />
              <div className=" card ">
                <div className="p-2">
                  <h5 class="card-title fw-bold ">Aziz</h5>
                  <p class="card-text">
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut vel ipsum officiis alias, reprehenderit repellat a quo
                      quos nulla dolorum quidem delectus voluptatem eum error,
                      atque hic, numquam quis facere aliquam facilis tenetur.
                      Laboriosam debitis odio quas suscipit eveniet atque
                      pariatur ab saepe nam, necessitatibus hic consequatur nisi
                      eos incidunt.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex p-4">
              <img src={alena} alt="" class="profile-photo-md   " />
              <div className=" card ">
                <div className="p-2">
                  <h5 class="card-title fw-bold ">Alena Jolly </h5>
                  <p class="card-text">
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint veritatis odio reiciendis, alias porro ad cum minima,
                      labore voluptate officia recusandae laborum totam beatae
                      ut.
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

export default YourProfile;
