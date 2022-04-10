import React , {useRef} from "react";

function PersonalInfo({ formData, setFormData }) {

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneNumberRef = useRef()
  

  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Prénom..."
        value={formData.firstName}
        ref = {firstNameRef}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Nom de famille..."
        value={formData.lastName}
        ref = {lastNameRef}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Téléphone..."
        value={formData.username}
        ref = {phoneNumberRef}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;