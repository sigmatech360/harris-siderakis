import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import searchResultimage from "../../../assets/searchResult.svg";
import { FaCalendar, FaCheck, FaClock } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { formatDate } from "../../../utills/dateFormatter";
import { saveAs } from "file-saver";
import axios from "axios";

const PdfReportList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState();
  const [reports, setReports] = useState([]);
  const [reportsLinks, setReportsLinks] = useState();

  const fetchOrder = async (id) => {
    const baseUrl = `${import.meta.env.VITE_BASE_URL}`;
    document.querySelector(".loaderBox").classList.remove("d-none");
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${baseUrl}/order-history/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      if (data.status) {
        console.log("records fetched successfully", data);
        const report = data?.data;
        setItem(report);
        setReports(report?.reports);
        setReportsLinks(report?.report_links);
      }
      document.querySelector(".loaderBox").classList.add("d-none");
    } catch (error) {
      document.querySelector(".loaderBox").classList.add("d-none");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchOrder(id);
  }, []);

  const handleDownload = async (pdflink) => {
    const url = `${import.meta.env.VITE_BASE_STORAGE_URL}/${pdflink}`;
    console.log(`pdf link : ${url}`);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "report.pdf"); // Optional: set filename
    document.body.appendChild(link);
    // link.click(); // ← Isko uncomment karna bhool gaya tha tu
    // document.body.removeChild(link);
  };
  const downloadPDF = (pdflink) => {
    console.log("url", `${import.meta.env.VITE_BASE_STORAGE_URL}/${pdflink}`);

    saveAs(
      `${import.meta.env.VITE_BASE_STORAGE_URL}/${pdflink}`,
      "downloaded.pdf"
    );
  };

  return (
    <DashboardLayout>
      <div className="main-content">
        <div className="d-flex align-items-center gap-3  mb-5">
          <button className="backButton" onClick={() => navigate(-1)}>
            <FiArrowLeft size={16} className="" />
          </button>
          <h4 className=" fw-bold ">Recent Activity</h4>
        </div>
        <div className="row">
          {reports.map((report, index) => {
            const created = new Date(item.created_at);
            const date = created.toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
              // hour12: true,
            });
            const time = created.toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              // hour12: true,
            });
            return (
              <div className="pdf-download-card col-lg-4 col-md-6 col-12 mb-3">
                <div className="pdfcard">
                  <div className="d-flex gap-2">
                    <div className="pdf-card-left ">
                      <div className="pdf-search-image">
                        <img src={searchResultimage} alt="" />
                      </div>
                      <p className="text-dark fw-bold">{report.label}</p>
                      <p className="text-muted">
                        <FaCalendar size={14} />
                        {/* 01/31/2025 */}
                        {date}
                      </p>
                      <p className="text-muted">
                        <FaClock size={14} />
                        {time}
                      </p>
                    </div>
                    <div className="pdf-card-right ">
                      <span>
                        <FaCheck size={32} className="text-light" />
                      </span>
                      <p>
                        Search Request for {item.first_name} {item.last_name}{" "}
                        has been completed
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-100 mt-3"
                    // to={`${import.meta.env.VITE_BASE_STORAGE_URL}/${
                    //   reportsLinks[0]
                    // }`}
                    onClick={() => downloadPDF(reportsLinks[0])}
                  >
                    Download Report
                  </button>
                </div>
                {/* <div className="d-flex">
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PdfReportList;
