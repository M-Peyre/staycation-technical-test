import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Header from "../Header";
import axios from "axios";
import styled from "styled-components";
import { HotelsType } from "../../type";
import HotelCard from "../HotelCard";

const Hotels = () => {
  const [hotels, setHotels] = useState<HotelsType>();

  useEffect(() => {
    axios.get<HotelsType>("http://localhost:3000/hotels").then((response) => {
      setHotels(response.data);
    });
  }, []);

  return (
    <StyledConytainer>
      <Header />
      <Row gutter={[16, 16]}>
        {hotels?.map((hotel) => (
          <Col key={hotel.id} span={12}>
            <HotelCard hotel={hotel} />
          </Col>
        ))}
      </Row>
    </StyledConytainer>
  );
};

const StyledConytainer = styled.div`
  padding: 0px;
`;

export default Hotels;
