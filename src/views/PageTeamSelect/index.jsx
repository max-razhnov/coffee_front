import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import SectionInfo from "../../modules/SectionInfo";
import PageTitle from "../../modules/PageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getDepartmentsData } from "../../testData";

const PageTeamSelect = props => {
  // const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [departmentList, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const { departmentsData } = await getDepartmentsData();
      setDepartments(departmentsData);
    };
    fetchDepartments();
  }, []);

  return (
    <>
      <Header
        isActive
        isAdmin="0"
        hasDepartment
        fullName={"Max Razhnov"}
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
            options={departmentList}
            // selectedValue={selectedDepartmentId}
            // onSelect={setSelectedDepartmentId}
          />
        </div>

        <Button
          onClick={async () => {
            // const { eventsData } = await getUpcomingEventsData("1");
            // console.log(eventsData);
          }}
          // onClick={async () => {
          //   await setUserDepartment(selectedDepartmentId);
          //   props.history.push("/subscriptions");
          // }}
          // disabled={!selectedDepartmentId}
          text="Accept"
          type="primary"
        />
      </main>
      <Footer />
    </>
  );
};

export default PageTeamSelect;
