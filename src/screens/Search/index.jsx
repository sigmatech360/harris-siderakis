import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import pricingbgimage from "../../assets/pricing-bg-image.png";
import SearchModal from "../../components/SearchModal";
import axios from "axios";
import IndicatorModal from "../../components/IndicatorModal";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchByParam = queryParams.get("searchby");

  const [personsData, setPersonsData] = useState([]);
  const [selectedPersonData, setSelectedPersonData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const resultsPerPage = 10;

  const [searchBy, setSearchBy] = useState(searchByParam || "name");
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [indicatorModalShow, setIndicatorModalShow] = useState(false);
  const [step, setStep] = useState(0);
  const [modalTitle, setModalTitle] = useState("Did you know Middle name?");
  const [inputPlaceholder, setInputPlaceholder] = useState(
    "Middle name (Optional)"
  );
  const [inputName, setInputName] = useState("middleName");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "address") {
      setFormData({ Addresses: [{ AddressLine2: value }] });
    } else if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");

      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const nextSearch = () => {
    console.log("step  next", step);

    if (step < 5) {
      setStep(step + 1);
      console.log("step updated next", step + 1);
    }
  };
  const prevSearch = () => {
    console.log("step prev", step);
    if (step > 0) {
      console.log("step updated prev", step - 1);
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    setStep(0);
    setShowModal(false);
  };

  useEffect(() => {
    if (step == 0) {
      setModalTitle("Did you know Middle name?");
      setInputPlaceholder("Middle name (Optional)");
      setInputName("MiddleName");
    } else if (step == 1) {
      setModalTitle("Did you know Age?");
      setInputPlaceholder("Age (Optional)");
      setInputName("age");
    } else if (step == 2) {
      setModalTitle("Did you know Address?");
      setInputPlaceholder("Address (Optional)");
      setInputName("Address");
    } else if (step == 3) {
      setModalTitle("Did you know State?");
      setInputPlaceholder("State (Optional)");
      setInputName("State");
    } else if (step == 4) {
      setModalTitle("Did you know Date of Birth?");
      setInputPlaceholder("Date of Birth format(1/1/1980) (Optional)");
      setInputName("Dob");
    } else if (step == 5) {
      setModalTitle("Did you know City?");
      setInputPlaceholder("City (Optional)");
      setInputName("City");
    }
  }, [step]);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleSearchModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSearch = async (e) => {
    // if (searchBy !== "name") {
    //   e.preventDefault();
    // }
    document.querySelector(".loaderBox").classList.remove("d-none");
    document.querySelector(".custom-loader-text").classList.remove("d-none");
    console.log("form data : ", formData);
    setShowModal(false);
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }
    setStep(0);

    try {
      const baseURL = `${import.meta.env.VITE_BASE_URL}`;

      const response = await axios.post(
        `https://api.galaxysearchapi.com/PersonSearch`,
        formData,
        {
          headers: {
            accept: "application/json",
            "galaxy-ap-name": `${import.meta.env.VITE_GALAXY_APP_NAME}`,
            "galaxy-ap-password": `${import.meta.env.VITE_GALAXY_APP_PASSWORD}`,
            "galaxy-search-type": "Person",
            "content-type": "application/json",
          },
        }
      );
      const data = response.data;
      const persons = data.persons;
      const pages = data.pagination.totalPages;
      if (persons.length > 0) {
        setPersonsData(persons);
      } else {
        if (data.isError) {
          toast.error(data.error.inputErrors);
        } else {
          toast.error(
            data.error.warnings[0] ||
              "No results found for the given search criteria."
          );
        }
        setPersonsData([]);
      }
      if (pages > 1) {
        setTotalPages(pages);
      }
      // console.log("token:", token);
      // localStorage.setItem('token', response.data.data.token);
      document.querySelector(".loaderBox").classList.add("d-none");
      document.querySelector(".custom-loader-text").classList.add("d-none");
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data.isError && error.response.data.error.inputErrors.length > 0) {
        toast.error(error.response.data.error.inputErrors[0]);
      }
      else if (error.response.data.error.message == 'Rate Limit Exceeded') {
        toast.error('Currently, we are experiencing high traffic. Please try again later.');
      }
      document.querySelector(".loaderBox").classList.add("d-none");
      document.querySelector(".custom-loader-text").classList.add("d-none");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (
        formData.firstName ||
        formData.email ||
        formData.phone ||
        formData.address
      ) {
        try {
          document.querySelector(".loaderBox").classList.remove("d-none");
          document
            .querySelector(".custom-loader-text")
            .classList.remove("d-none");
          let formValues = { ...formData, Page: currentPage };
          const response = await axios.post(
            `https://api.galaxysearchapi.com/PersonSearch`,
            formValues,
            {
              headers: {
                accept: "application/json",
                "galaxy-ap-name": `${import.meta.env.VITE_GALAXY_APP_NAME}`,
                "galaxy-ap-password": `${
                  import.meta.env.VITE_GALAXY_APP_PASSWORD
                }`,
                "galaxy-search-type": "Person",
                "content-type": "application/json",
              },
            }
          );
          const data = response.data;
          const persons = data.persons;
          if (persons.length > 0) {
            setPersonsData(persons);
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
          document.querySelector(".loaderBox").classList.add("d-none");
          document.querySelector(".custom-loader-text").classList.add("d-none");
        } catch (error) {
          console.error("Error fetching users:", error);
          document.querySelector(".loaderBox").classList.add("d-none");
          document.querySelector(".custom-loader-text").classList.add("d-none");
        }
      }
    };

    fetchUsers();
  }, [currentPage]);

  const [indicatorLabels, setIndicatorLabels] = useState({});
  const [comprehensivePrice, setComprehensivePrice] = useState(0);
  const [socialMediaReportPrice, setSocialMediaReportPrice] = useState(0);
  useEffect(() => {
    const fetchIndicators = async () => {
      const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
      const token = localStorage.getItem("token");
      try {
        document.querySelector(".loaderBox").classList.remove("d-none");

        const response = await axios.get(`${baseUrl}/pricing`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        let updatedIndicators = {};
        data.data.types.forEach((item, index) => {
          updatedIndicators = {
            ...updatedIndicators,
            [item.key]: {
              label: item.label,
              price: item.price,
            },
          };
          if (item.key == "haComprehensiveReport") {
            setComprehensivePrice(item.price);
          }
          if (item.key == "haSocialMediaReport") {
            setSocialMediaReportPrice(item.price);
          }
        });

        setIndicatorLabels(updatedIndicators);

        document.querySelector(".loaderBox").classList.add("d-none");
      } catch (error) {
        console.error("Error fetching users:", error);
        document.querySelector(".loaderBox").classList.add("d-none");
      }
    };
    fetchIndicators();
  }, []);

  const indicatorKeysToCheck = Object.keys(indicatorLabels);
  const [personIndicators, setPersonIndicators] = useState([]);

  const handleGenerateModal = (id) => {
    // personsData.find(person=>person.tahoeId == id).indicators.
    const matchedPerson = personsData.find((person) => person.tahoeId === id);
    console.log("matchedPerson", matchedPerson);

    if (matchedPerson && matchedPerson.indicators) {
      const activeIndicators = indicatorKeysToCheck
        .filter(
          (key) =>
            matchedPerson.indicators[key] && matchedPerson.indicators[key] > 0
        )
        .map((key) => ({
          label: indicatorLabels[key].label,
          price: indicatorLabels[key].price,
          count: matchedPerson.indicators[key],
          key: key,
        }));
      setPersonIndicators(activeIndicators);
      setIndicatorModalShow(true);
      setSelectedPersonData({
        email: matchedPerson.emailAddresses[0]?.emailAddress,
        first_name: matchedPerson.name.firstName,
        last_name: matchedPerson.name.lastName,
        age: `${matchedPerson.age}`,
        tahoe_id: matchedPerson.tahoeId,
      });
      console.log("Available indicators with count > 0:", activeIndicators);
    } else {
      console.log("Person not found or indicators missing.");
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages > 3) {
      // Only show 3 pages: [prev, 1, 2, 3, next]
      if (currentPage === 1) {
        pageNumbers.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
      }
    } else {
      // If there are 3 or fewer pages, show all of them
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <DefaultLayout>
      {!personsData.length > 0 && (
        <section
          className="innerBanner"
          style={{ backgroundImage: `url(${pricingbgimage})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="innerBanner-content">
                  <h1
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    Search <span className="fw-bold">Billions</span> of Public
                    Records!
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-offset="0"
                  >
                    Explore millions of public records instantly. Uncover
                    detailed information on individuals, properties, businesses,
                    and more with just a few clicks.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="d-flex searchby align-items-center justify-content-start gap-3 px-3 mb-3">
                  <span
                    className={`fw-bold c-pointer ${
                      searchBy == "name" ? "active" : ""
                    }`}
                    onClick={() => {
                      setSearchBy("name");
                      setFormData({});
                    }}
                  >
                    Name
                  </span>
                  <span
                    className={`fw-bold c-pointer ${
                      searchBy == "email" ? "active" : ""
                    }`}
                    onClick={() => {
                      setSearchBy("email");
                      setFormData({});
                    }}
                  >
                    Email
                  </span>
                  <span
                    className={`fw-bold c-pointer ${
                      searchBy == "phone" ? "active" : ""
                    }`}
                    onClick={() => {
                      setSearchBy("phone");
                      setFormData({});
                    }}
                  >
                    Phone
                  </span>
                  <span
                    className={`fw-bold c-pointer ${
                      searchBy == "address" ? "active" : ""
                    }`}
                    onClick={() => {
                      setSearchBy("address");
                      setFormData({});
                    }}
                  >
                    Address
                  </span>
                </div>
                {searchBy == "name" && (
                  <form onSubmit={handleSearchModal}>
                    <div className="search-form row px-3">
                      <div className=" col-6  gap-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-6  gap-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="d-flex mt-3 ">
                        <button
                          type="submit"
                          className="btn bg-light"
                          // onClick={handleSearchModal}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                )}
                {searchBy == "email" && (
                  // <form onSubmit={handleSearchModal}>
                  // </form>
                    <div className="search-form row px-3">
                      <form onSubmit={handleSearchModal}>
                        <div className="d-flex   gap-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="d-flex mt-3 ">
                          <button className="btn bg-light" type="submit">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                )}
                {searchBy == "phone" && (
                  // <form onSubmit={handleSearchModal}>
                  // </form>
                    <div className="search-form row px-3">
                      <form onSubmit={handleSearchModal}>
                        <div className="d-flex  gap-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="d-flex mt-3 ">
                          <button className="btn bg-light" type="submit">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                )}
                {searchBy == "address" && (
                    <div className="search-form row px-3">
                      <form onSubmit={handleSearchModal}>
                        <div className="d-flex  gap-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            name="address"
                            value={formData?.Addresses?.[0]?.AddressLine2 || ""}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="d-flex mt-3 ">
                          <button className="btn bg-light" type="submit">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  // <form onSubmit={handleSearchModal}>
                  // </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {personsData.length > 0 && (
        <div className="person-results">
          <div className="container">
            <h2 className="mb-4">
              Search Results for{" "}
              <strong className="text-capitalize">
                {formData.firstName} {formData.lastName}
              </strong>
            </h2>
            <div className="border border-2 border-light p-3 mt-3 rounded-2">
              <div className="row">
                <div className="col-lg-1">
                  <h5>S. No.</h5>
                </div>
                <div className="col-lg-2">
                  <h5>Name</h5>
                </div>
                <div className="col-lg-3">
                  <h5>Email</h5>
                </div>
                <div className="col-lg-1">
                  <h5>Age</h5>
                </div>
                <div className="col-lg-3">
                  <h5>Address</h5>
                </div>
                <div className="col-lg-2">
                  <h5>Get Report</h5>
                </div>
              </div>
            </div>
            {personsData.map((person, index) => (
              <div className="border border-2 border-light p-3 mt-3 rounded-2">
                <div className="row align-items-center">
                  <div className="col-lg-1">
                    <p>{index + 1}.</p>
                  </div>
                  <div className="col-lg-2">
                    <h5>{person.fullName}</h5>
                  </div>
                  <div className="col-lg-3">
                    <p>{person.emailAddresses[0]?.emailAddress}</p>
                  </div>
                  <div className="col-lg-1">
                    <p>{person.age}</p>
                  </div>
                  <div className="col-lg-3 ">
                    <p className="person-address">
                      {person.addresses[0].fullAddress}
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <button
                      className="get-report-button"
                      onClick={() => handleGenerateModal(person.tahoeId)}
                    >
                      Get Full Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {totalPages > 1 && (
              <div className="pagination-box">
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <ul className="pagination-list">
                  <li>
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {getPageNumbers().map((pageNumber, ind) => (
                    <li key={ind}>
                      <button
                        className={`${
                          currentPage === pageNumber ? "active" : ""
                        }`}
                        onClick={() => goToPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  ))}

                  <li>
                    <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <IndicatorModal
        showModal={indicatorModalShow}
        handleClose={() => setIndicatorModalShow(false)}
        personIndicators={personIndicators}
        comprehensivePrice={comprehensivePrice}
        socialMediaReportPrice={socialMediaReportPrice}
        selectedPersonData={selectedPersonData}
      />

      <SearchModal
        showModal={showModal}
        title={modalTitle}
        inputPlaceholder={inputPlaceholder}
        inputName={inputName}
        formData={formData}
        handleChange={handleChange}
        handleClose={handleClose}
        handleSearch={handleSearch}
        nextSearch={nextSearch}
        prevSearch={prevSearch}
        step={step}
      />
    </DefaultLayout>
  );
};

export default Search;
