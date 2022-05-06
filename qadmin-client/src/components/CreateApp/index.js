import React, { useState } from "react";

const CreateApp = props => {
  const [app, setApp] = useState({
    serviceName: "",
    publicKey: "",
    privateKey: "",
    callbackUrl: "",
    isActive: false,
  });

	const [toggle, setToggle] = useState(app.isActive);

	const onInputChange = event => {

		const { name, value } = event.target;
		if (name === "isActive") {
			setApp({ ...app, [name]: !toggle});
			setToggle(!toggle)
		} else {
			setApp({ ...app, [name]: value });
		}
	};

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!app.serviceName || !app.publicKey || !app.privateKey) return;
        props.createApp(app);
      }}
    >
      <div className="form-group">
        <label>Service name</label>
        <input
          type="text"
          name="serviceName"
          value={app.serviceName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Public key</label>
        <input
          type="text"
          name="publicKey"
          value={app.publicKey}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Private key</label>
        <input
          type="text"
          name="privateKey"
          value={app.privateKey}
          onChange={onInputChange}
        />
      </div>
			<div className="form-group">
        <label>Callback url</label>
        <input
          type="text"
          name="callbackUrl"
          value={app.callbackUrl}
          onChange={onInputChange}
        />
      </div>
			<div className="form-group">
        <label>Is active</label>
        <input
          type="checkbox"
          name="isActive"
					defaultChecked={toggle}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateApp;
