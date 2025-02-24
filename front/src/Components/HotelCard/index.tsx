import { Card } from "antd";
import { HotelType } from "../../type";
import styled from "styled-components";

const HotelCard = ({ hotel }: { hotel: HotelType }) => {
  return (
    <Card hoverable cover={<img alt={hotel.name} src={hotel.pictureId} />}>
      <Card.Meta
        title={
          <StyledTitle>
            <div>
              {hotel.name}{" "}
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <span key={i}>*</span>
              ))}
            </div>
            <div className="review">
              {`${hotel.averageScore?.toFixed(1)}  (${hotel.reviews})`}
            </div>
          </StyledTitle>
        }
        description={
          <Description
            description={hotel.preview}
            oldPrice={hotel.highestPrice}
            price={hotel.lowestPrice}
          />
        }
      />
    </Card>
  );
};

const Description = ({
  description,
  oldPrice,
  price,
}: {
  description: string;
  oldPrice: number;
  price: number;
}) => {
  const discount = Math.floor(((oldPrice - price) / oldPrice) * 100);

  return (
    <StyledDescription>
      <p className="description">{description}</p>
      <p className="price">
        <span className="currentPrice">{price}</span>
        <span className="maxPrice">{oldPrice}</span>
        <span className="discount">-{discount}%</span>
      </p>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  .price {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 4px;
  }

  .description {
    color: grey;
    font-size: 14px;
  }
  .currentPrice {
    font-size: 14px;
    font-weight: bold;
  }
  .maxPrice {
    font-size: 14px;
    text-decoration: line-through;
  }
  .discount {
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: red;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  .review {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }
`;

export default HotelCard;
