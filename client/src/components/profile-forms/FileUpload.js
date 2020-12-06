import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProfileImage, getCurrentProfile } from "../../actions/profile";

const FileUpload = ({
  profile: { profile, loading },
  getCurrentProfile,
  addProfileImage
}) => {
  const [file, setFile] = useState({});
  const [filename, setFilename] = useState("Choose Profile Image");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getCurrentProfile();
    setAvatar(
      loading || !profile || !profile.user || !profile.user.avatar
        ? null
        : profile.user.avatar
    );
  }, [loading, getCurrentProfile, profile]);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    addProfileImage(formData);
  };

  return (
    <Fragment>
      {avatar ? (
        <div className="profile-top">
          <img className="round-img my-1" src={avatar} alt="User Profile" />
        </div>
      ) : null}
      <form onSubmit={onSubmit} className="my-1">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input type="submit" value="Upload" className="btn btn-primary my-1" />
      </form>
    </Fragment>
  );
};

FileUpload.propTypes = {
  addProfileImage: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { addProfileImage, getCurrentProfile })(
  FileUpload
);
