import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet("/teams").reply(200, {
  departmentsData: [
    { id: "1", title: "PCP" },
    { id: "2", title: "WG" },
    { id: "3", title: "Front" }
  ]
});

mock.onGet(`/users/1/upcoming`).reply(200, {
  eventsData: [
    {
      id: "1",
      title: "Platform Front-end",
      name: "@ Latte Python ",
      address: "12 Zybitskaya St., Minsk",
      date: "1570483509384",
      time: "22.04.2019 - 16:00"
    },
    {
      id: "2",
      title: "Platform Back-end",
      name: "@ Latte Python ",
      address: "12 Zybitskaya St., Minsk",
      date: "1570483509384",
      time: "22.04.2019 - 16:00"
    },
    {
      id: "3",
      title: "CG & Motion Design",
      name: "@ Latte Python ",
      address: "12 Zybitskaya St., Minsk",
      date: "1570483509384",
      time: "22.04.2019 - 16:00"
    },
    {
      id: "4",
      title: "Platform Front-end",
      name: "@ Latte Python ",
      address: "12 Zybitskaya St., Minsk",
      date: "1570483509384",
      time: "22.04.2019 - 16:00"
    },
    {
      id: "5",
      title: "Platform Front-end",
      name: "@ Latte Python ",
      address: "12 Zybitskaya St., Minsk",
      date: "1570483509384",
      time: "22.04.2019 - 16:00"
    }
  ]
});

const getDepartmentsData = async () => {
  const response = await axios
    .get("/teams")
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log(e);
    });
  return response;
};

const getUpcomingEventsData = async userId => {
  const response = await axios
    .get(`/users/${userId}/upcoming`)
    .then(res => {
      // console.log(res);
      return res.data;
    })
    .catch(e => console.log(e));
  return response;
};

export { getDepartmentsData, getUpcomingEventsData };
