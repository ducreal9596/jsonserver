import React, { useState, useEffect } from 'react';

const ProvinceDistrictComponent = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch('https://thongtindoanhnghiep.co/api/city')
      .then(response => response.json())
      .then(data => {
        setProvinces(data);
      });
  }, []);

  useEffect(() => {
    if (selectedProvince === null) {
      setDistricts([]);
      return;
    }

    fetch(`https://thongtindoanhnghiep.co/api/city/${selectedProvince.code}/district`)
      .then(response => response.json())
      .then(data => {
        setDistricts(data);
      });
  }, [selectedProvince]);

  return (
    <div>
      <h2>Chọn tỉnh thành</h2>
      <select
        value={selectedProvince === null ? '' : selectedProvince.code}
        onChange={event => {
          setSelectedProvince(
            provinces.find(province => province.code === event.target.value)
          );
        }}
      >
        <option value="">Chọn tỉnh thành</option>
        {provinces.map(province => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>
      {selectedProvince !== null && (
        <>
          <h2>Chọn quận huyện</h2>
          <select>
            <option value="">Chọn quận huyện</option>
            {districts.map(district => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default ProvinceDistrictComponent;
