import React, { useEffect, useState } from "react";

export default function EditProfile() {
  const [img, setImg] = useState();
  const [preview, setPreview] = useState();

  const handleFile = (e) => {
    setImg(e.target.files[0]);
  };
  const fileSelect = () => {
    if (img) setPreview(URL.createObjectURL(img));
  };

  useEffect(() => {
    fileSelect();
  }, [img]);

  return (
    <div className="editProfile page">
      <div className="flex-bet">
        <h2>Edit Profile</h2>
        <button className="red">Logout</button>
      </div>

      <div className="form">
        <div className="top flex">
          <div className="avatarWrap">
            <p>Avatar :</p>
            {!preview ? (
              <div className="avatar"></div>
            ) : (
              <img src={preview || ""} className="avatar" alt="" />
            )}

            <label for="avatarimg" className="blue">
              <i className="im im-cloud-upload"></i>
            </label>
            <input id="avatarimg" type="file" onChange={(e) => handleFile(e)} />
          </div>
        </div>

        <div className="bottom flex">
          <div className="left">
            <div className="title">
              <p>Name : </p>
              <input type="text" />
            </div>
            <div className="title">
              <p>Email : </p>
              <input type="email" />
            </div>
          </div>
          <div className="right">
            <div className="title">
              <p>Location (city) : </p>
              <input type="text" />
            </div>
            <div className="title">
              <p>Mobile : </p>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <button className="blue">Edit Profile</button>
      </div>
    </div>
  );
}
