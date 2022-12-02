import React from "react";
import { MdSend } from "react-icons/md";

const YourPost = ({ findUser }) => {
  console.log(findUser);
  return (
    <div className="container mt-5">
      <div class="">
        {findUser.allPost.map((post) => (
          <div className="mt-5 card">
            <div class="card-body">
              <div className="d-flex ">
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  src={findUser.img}
                  alt=""
                  class="profile-photo-md"
                />

                <div className="">
                  <div className="d-flex">
                    <h4 class=" fw-bold ">{findUser.name}</h4> 
                  </div>

                  <p class="card-text">
                    <small class="text-muted">22 Aug 2022</small>
                  </p>
                </div>
              </div>
            </div>
            <p class="card-text p-4">{post.description}</p>
            <img
              src={post.postImg}
              style={{ height: "700px" }}
              class="img-fluid"
              alt="..."
            />
            <div class="post-react ">
              <div class="row p-4">
                <div class="col-md-7 col-sm-7">
                  <div class="form-grp d-flex ">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={findUser.img}
                      alt=""
                      class="profile-photo-md "
                    />
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
              {post.comments.map((comment) => (
                <div className="d-flex p-4">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={comment.commentUser}
                    alt=""
                    class="profile-photo-md"
                  />
                  <div className=" card ">
                    <div className="p-2">
                      <h5 class="card-title fw-bold ">{comment.name}</h5>
                      <p class="card-text">
                        <small>{comment.comment}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPost;
