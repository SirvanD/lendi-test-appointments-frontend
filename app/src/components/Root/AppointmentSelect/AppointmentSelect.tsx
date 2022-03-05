import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Broker from "./Broker";

const Wrapper = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 250px;
`;

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 20px;
`;

const Li = styled.div`
  background-color: #eedf5a;
  font-size: 1.4rem;
`;

type BrokerAppointments = {
  id: number;
  name: string;
  appointments: { id: number; brokerId: number; date: string }[];
}[];

interface Props {
  setSelectedApt: React.Dispatch<React.SetStateAction<string>>;
  selectedApt: string;
  setBrokerName: React.Dispatch<React.SetStateAction<string>>;
  brokerName: string;
}

const AppointmentSelect = ({
  setSelectedApt,
  selectedApt,
  setBrokerName,
  brokerName,
}: Props) => {
  const [brokerAppointments, setBrokerAppointments] =
    useState<BrokerAppointments>([]);

  useEffect(() => {
    let brokers: any;
    let appointments: any;
    const getData = async () => {
      await axios.get("http://localhost:8080/brokers").then(({ data }) => {
        brokers = data;
      });
      await axios.get("http://localhost:8080/appointments").then(({ data }) => {
        appointments = data;
      });
      brokers?.forEach((b: any) => {
        b.appointments = [];
      });
      brokers?.forEach((broker: any) => {
        appointments?.forEach((apt: any) => {
          if (broker.id === apt.brokerId) {
            broker.appointments.push(apt);
          }
        });
      });
      setBrokerAppointments(brokers);
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <SideBar>
        <Heading>Amazing site</Heading>
        TODO: populate brokers
        <ul>
          {brokerAppointments.map((broker) => (
            <Broker
              key={broker.id}
              broker={broker}
              setSelectedApt={setSelectedApt}
            />
          ))}
        </ul>
      </SideBar>
      <div>
        <Heading>Appointment details</Heading>
        TODO: get appointment details when clicking on one from the left side
        <ul>
          {brokerAppointments.map((app, id) => (
            <Li key={id}>
              {app.appointments?.map((apt: any) => {
                if (apt.date == selectedApt) {
                  setBrokerName(app.name);
                  return ` Broker ID: ${apt.brokerId} Appointment Date: ${apt.date} `;
                }
              })}
            </Li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default AppointmentSelect;
