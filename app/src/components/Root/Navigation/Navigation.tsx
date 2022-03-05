import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e7e7e7;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: 1px 1px 1px #b8b8b8;
  margin-bottom: 48px;
`;
interface Props {
  selectedApt: string;
  brokerName: string;
}

const Navigation = ({ selectedApt, brokerName }: Props) => {
  return (
    <Wrapper>
      <strong>
        Currently selected appointment: {selectedApt} with {brokerName}
      </strong>
      <strong>Welcome to Lendi</strong>
    </Wrapper>
  );
};

export default Navigation;
