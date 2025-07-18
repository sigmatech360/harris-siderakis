import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import axios from "axios";
import { formatDate } from "../../../utills/dateFormatter";

const OrderHistory = () => {
  const [ordersData, setOrdersData] = useState();

  const [tableData, setTableData] = useState();
  const [currentItems, setCurrentItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setCurrentItems(tableData?.slice(0, 8));
  }, [tableData]);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
  const fetchHistory = async () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${baseUrl}/order-history`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      if (data.status) {
        console.log("records fetched successfully", data);
        setOrdersData(data?.data);
        setTableData(data?.data);
        const pages = Math.ceil(data?.data.length / 10);
        setTotalPages(pages);
      }
      document.querySelector(".loaderBox").classList.add("d-none");

      //   if (data.status) {
      //     const userResponse = await axios.get(`${baseUrl}/edit-profile`, {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     });
      //     if (userResponse.status) {
      //       const user = userResponse.data;
      //       dispatch(setLogin({ token: token, user: user.data }));
      //     }
      //     toast.success(response.data.message);
      //     document.querySelector(".loaderBox").classList.add("d-none");
      //     // navigate("/dashboard/profile");
      //   }

      // console.log("response", responseData);
      // if (responseData.status) {
      //   document.querySelector(".loaderBox").classList.add("d-none");
      //   toast.success("Profile Updated Successfully");
      //   const user = responseData.data;
      //   dispatch(setLogin({ token: token, user: user }));
      //   // navigate('/login');
      // }
    } catch (error) {
      document.querySelector(".loaderBox").classList.add("d-none");
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchHistory();
  }, []);
  const handleReport = (reportLink) =>{

  }

  return (
    <DashboardLayout>
      <div className="main-content">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h4 className=" fw-bold mb-3"> Order History</h4>
          {/* <button
            onClick={updateProfile}
            className="btn btn-primary text-white border-0"
          >
            Update
          </button> */}
        </div>
        {ordersData?.length > 0 && (
          <>
            <div className="border border-2 border-light p-3 mt-3 rounded-2">
              <div className="row">
                <div className="col-lg-1">
                  <h5>S. No.</h5>
                </div>
                <div className="col-lg-2">
                  <h5>First Name</h5>
                </div>
                <div className="col-lg-3">
                  <h5>Last Name</h5>
                </div>
                <div className="col-lg-1">
                  <h5>Total</h5>
                </div>
                <div className="col-lg-3">
                  <h5>Generated Date</h5>
                </div>
                <div className="col-lg-2">
                  <h5>Get Report</h5>
                </div>
              </div>
            </div>
            {ordersData.map((item, index) => (
              <div className="border border-2 border-light p-3 mt-3 rounded-2">
                <div className="row align-items-center">
                  <div className="col-lg-1">
                    <p>{index + 1}.</p>
                  </div>
                  <div className="col-lg-2">
                    <h5>{item.first_name}</h5>
                  </div>
                  <div className="col-lg-3">
                    <h5>{item.last_name}</h5>
                  </div>
                  <div className="col-lg-1">
                    <p>${item.total}</p>
                  </div>
                  <div className="col-lg-3">
                    <p>{formatDate(item?.created_at)}</p>
                  </div>
                  {/* <div className="col-lg-3 ">
                    <p className="person-address">
                      {item.addresses[0].fullAddress}
                    </p>
                  </div> */}
                  <div className="col-lg-2">
                    <button
                      className="get-report-button"
                        onClick={() => handleReport(item.report_links[0])}
                    >
                      Get Full Report
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* {totalPages > 1 && (
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
                    className={`${currentPage === pageNumber ? "active" : ""}`}
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
        )} */}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default OrderHistory;
