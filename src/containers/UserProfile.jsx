import React from "react";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import UserImg from "../assets/img/user.png";

const UserProfile = (props) => {
  const { user, username} = props;
  const hashUser = Object.keys(user).length > 0;

  return (
    <>
      <Header />
      <div className="mt-6 container">
        <div className="user-profile">
          <div className="info-user">
            <div className="header-info-user">
              <div className="img">
                {hashUser ? (
                  <img src={gravatar(user.email)} alt={user.email} />
                ) : (
                  <img src={UserImg} alt="img profile" />   
                )}
              </div>
              <div className="info">
                <div className="name-user">
                  <h3>
                    <strong>{username}</strong>
                  </h3>
                </div>
                <div className="details-user">
                  <p className="start">
                    <span>0</span>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </p>
                  <p>0 Jobs Complete</p>
                  <p>0 Recommendations</p>
                </div>
              </div>
            </div>
            <p>Country - City</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur labore velit nobis aut nulla similique voluptatum,
              veritatis officia animi voluptate delectus quia at quasi
              voluptates, consequuntur obcaecati. Officiis, perspiciatis porro.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

//export default UserProfile;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
