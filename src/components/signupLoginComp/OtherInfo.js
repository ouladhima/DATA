import React, {useRef} from "react";

function OtherInfo({ formData, setFormData }) {

  const zipCodeRef = useRef()
  const adressRef = useRef()

  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Code Postal"
        value={formData.zipCode}
        ref = {zipCodeRef}
        onChange={(e) => {
          setFormData({ ...formData, zipCode: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Adresse"
        value={formData.adresse}
        ref = {adressRef}
        onChange={(e) => {
          setFormData({ ...formData, adresse: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;