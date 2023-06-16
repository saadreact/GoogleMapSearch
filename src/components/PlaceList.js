import React from "react";
import { List, Typography } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PlaceList = ({ places, handlePlaceSelect }) => {

  return (
    <Container>
      <List
        style={{ width: "500px", marginTop: "10px", cursor: "pointer", overflow: 'auto', height: 200,}}
        bordered
        dataSource={places}
        renderItem={(place) => (
          <List.Item onClick={() => handlePlaceSelect(place.name)}>
            <Typography.Text mark>{place.name}</Typography.Text>
          </List.Item>
        )}
      />
    </Container>
  );
};

export default PlaceList;
