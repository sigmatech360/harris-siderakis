import { State, City } from "country-state-city";
import { useEffect, useState } from "react";
const StateCityDropdown = ({
  countryCode = "US",
  formData,
  setFormData,
  step,
  selectedStateId,
  setSelectedStateId,
  selectedStateValue,
  setSelectedStateValue,
  selectedCityValue,
  setSelectedCityValue,
  searchBy
}) => {
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const states = State.getStatesOfCountry(countryCode).map((state) => ({
      value: `${state.name} - ${state.isoCode}`,
      displayValue: `${state.name} - ${state.isoCode}`,
    }));
    setStateList(states);
  }, []);

  useEffect(() => {
    const city = City.getCitiesOfState(countryCode, selectedStateId).map(
      (city) => ({
        value: city.name,
        displayValue: city.name,
        city,
      })
    );
    // console.log('city list', city);

    setCityList(city);
  }, [selectedStateId]);

  const handleStateChange = (e) => {
    const { value } = e.target;
    const [name, id] = value.split(" - ");
    setSelectedStateId(id);
    setSelectedStateValue(value);
    // setFormData((prev)=>{})
  };

  const handleCityChange = (e) => {
    const { value } = e.target;
    // console.log('selected city', value);
    const addressLine2 = `${value}, ${selectedStateId}`;
    console.log("AddressLine2:", addressLine2);
    // setFormData((prev) => ({ ...prev, ["AddressLine2"]: addressLine2 }));
    setFormData({ Addresses: [{ AddressLine2: addressLine2 }] });
    setSelectedCityValue(value);
  };
  return (
    <>
      {searchBy == 'address' && (
        <>
           {/* <p>
            State <span className="text-muted">( Optional )</span>
          </p> */}
          <select
            className="form-select form-control"
            name="state"
            onChange={handleStateChange}
            value={selectedStateValue}
            required
          >
            <option value="" disabled>
              Select State
            </option>
            {stateList.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.displayValue}
                </option>
              );
            })}
          </select>
          {/* <p>
            City <span className="text-muted">( Optional )</span>
          </p> */}
          <select
            className="form-select"
            name="city"
            onChange={handleCityChange}
            value={selectedCityValue}
            required
          >
            <option value="" disabled>
              Select City
            </option>
            {cityList.length > 0 && cityList.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.displayValue}
                </option>
              );
            })}
          </select>
        </>
      )}
         
      {step == 2 && (
        <>
          <p>
            State <span className="text-muted">( Optional )</span>
          </p>
          <select
            className="form-select mb-3"
            name="state"
            onChange={handleStateChange}
            value={selectedStateValue}
          >
            <option value="" disabled>
              Select
            </option>
            {stateList.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.displayValue}
                </option>
              );
            })}
          </select>
        </>
      )}
          
      {step == 3 && (
        <>
          <p>
            City <span className="text-muted">( Optional )</span>
          </p>
          <select
            className="form-select"
            name="city"
            onChange={handleCityChange}
            value={selectedCityValue}
          >
            <option value="" disabled>
              Select
            </option>
            {cityList.length > 0 && cityList.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.displayValue}
                </option>
              );
            })}
          </select>
        </>
      )}
    </>
  );
};

export default StateCityDropdown;
