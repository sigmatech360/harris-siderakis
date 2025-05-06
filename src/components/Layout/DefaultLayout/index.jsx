import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const DefaultLayout = (props) => {
  const registerLogin = props.registerLogin ?? true;
  const headerClass = props.headerClass ?? '';
  return (
    <>
      <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
        <Header registerLogin={registerLogin} className={headerClass} />
          <div className="flex-grow-1">
              {props.children}
          </div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
