import React, { useState } from "react";
import styled from "styled-components";

export interface BrokerProps {
  broker: {
    name: string;
    id: number;
    appointments: { id: number; brokerId: number; date: string }[];
  };
  setSelectedApt: React.Dispatch<React.SetStateAction<string>>;
}
const Li = styled.div`
  background-color: #f3d62f;
  font-size: 1.4rem;
  margin: 1rem;
  cursor: pointer;
  display: inline-block;
`;
const Broker = ({ broker, setSelectedApt }: BrokerProps) => {
  const [showAppointments, setShowAppointments] = useState(true);

  const handleShowAppointments = () => {
    setShowAppointments(!showAppointments);
  };

  return (
    <li>
      {broker.name}
      <br />
      appointments:
      <button onClick={handleShowAppointments}>Show/Hide appointments</button>
      <ul>
        <ul>
          {showAppointments &&
            broker.appointments.map((apt, id) => (
              <Li
                key={id}
                value={apt.date}
                onClick={(event) =>
                  setSelectedApt(event.target.getAttribute("value"))
                }
              >
                {apt.date}
              </Li>
            ))}
        </ul>
      </ul>
    </li>
  );
};

export default Broker;
