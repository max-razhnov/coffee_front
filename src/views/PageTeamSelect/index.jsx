import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import SectionInfo from "../../modules/SectionInfo";
import PageTitle from "../../modules/PageTitle";
import Header from "../../components/Header";
import { departmentsData } from "../../testData";

const getAccountOptions = (departments) => departments.map((department) => ({ label: department.title, value: department._id }));

const PageTeamSelect = (props) => (
  <>
    <Header
      isActive
      isAdmin="0"
      hasDepartment
      location={props}
    />
    <main className="select-main_section">
      <PageTitle title="Hello, Max Razhnov" />
      <SectionInfo
        infoText="Select your team to start knowledge sharing and
                having some coffee:"
      />
      <div className="select-dropdown_container">
        <Dropdown
          options={departmentsData}
        />
      </div>

      <Button
          // onClick={async () => {
          //   await setUserDepartment(selectedDepartmentId);
          //   props.history.push("/subscriptions");
          // }}
          // disabled={!selectedDepartmentId}
        text="Accept"
        type="primary"
      />
    </main>
  </>
);

export default PageTeamSelect;
