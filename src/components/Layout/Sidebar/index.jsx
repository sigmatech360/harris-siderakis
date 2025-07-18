import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { FiAirplay, FiMenu, FiUser } from "react-icons/fi";
import "./style.css";
import { useSelector } from "../../../store";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCamera, FaHamburger } from "react-icons/fa";
import { RiFileHistoryLine } from "react-icons/ri";

const sideBarNavlinks = [
  { title: "Profile", link: "/profile", icon: <FiUser size={16} /> },
  { title: 'Order History', link: '/order-history', icon: <RiFileHistoryLine size={16} /> },
  // { title: 'Management', link: '/volunteer-management', icon: '' },
  // { title: 'Event Assign Management', link: '/interested-volunteer-management', icon: VolunteersManagement },
  // { title: 'Create Notification', link: '/create-notification', icon: VolunteersManagement },
  // { title: 'CMS Stats', link: '/stats', icon: EventManagement },
  // { title: 'Programs Management', link: '/programs-management', icon: ProgramsManagement },
  // { title: 'Event Management', link: '/event-management', icon: EventManagement },
  // { title: 'Podcast Management', link: '/podcast-management', icon: PodcastManagement },
  // { title: 'Sponsor Program', link: '/sponsor-program', icon: SponsorshipManagement },
  // { title: 'Top Volunteer Management', link: '/top-volunteer-management', icon: VolunteersManagement },
  // { title: 'Announcement Management', link: '/announcement-management', icon: AnnouncementManagement },
  // { title: 'Sponsorship Management', link: '/sponsorship-management', icon: SponsorshipManagement },
  // { title: 'Our Works Management', link: '/project-management', icon: Dashbord },
  // { title: 'Brand Management', link: '/brand-management', icon: BrandManagement },
  // { title: 'Member Management', link: '/member-management', icon: MemberManagement }
];

export const Sidebar = (props) => {
  const location = useLocation();
  const { user } = useSelector(({ user }) => user);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      // setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={`sidebar  ${props.sideClass}`} id="sidebar">
      {/* <div className="w-100 p-3">

        {user?.image || previewImage ? (
          <img
            src={
              previewImage ||
              `${import.meta.env.VITE_BASE_IMAGE_URL}/${user?.image}`
            }
            className="img-fluid mt-2 w-100 rounded-circle"
            alt="User Image"
          />
        ) : (
          <FiUser
            size={16}
            className="rounded-circle  h-100 w-100"
          />
        )}
      </div>
      <label htmlFor="profileImage" className="profileImage w-100">
        <input
          type="file"
          accept="img/*"
          className="d-none"
          id="profileImage"
          // onChange={handleImageChange}
          onChange={(e) => handleImageChange(e)}
        />
        <div className="position-absolute d-flex align-items-center justify-content-center c-pointer upload-button">
          <i aria-hidden="true" className="camera-icon bg-primary">
            <FaCamera size={16} className="text-light" />
          </i>
        </div>
      </label> */}
      <div className="d-flex d-lg-none justify-content-center">
      {props.sideClass == 'collapsed' ? (

        <FiMenu className="mob-menu-icon mb-3" onClick={()=>props.sidebarToggle()} size={16}/>
      ): (
        <FaArrowLeft className="mob-menu-icon mb-3" onClick={()=>props.sidebarToggle()} size={16}/>

      )}

      </div>
      <ul className="list-unstyled">
        {sideBarNavlinks.map((linkItem) => (
          <li className="sidebar-li" key={linkItem.link}>
            <Link
              className={`sideLink ${
                location.pathname.includes(linkItem.link) ? "active" : ""
              }`}
              to={linkItem.link}
            >
              <span className="sideIcon">
                {linkItem.icon}
              </span>
              <span className="sideLinkText">{linkItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
