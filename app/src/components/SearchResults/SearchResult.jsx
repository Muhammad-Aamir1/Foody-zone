import styled from "styled-components";
// import { Container } from "../../App";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ image, name, text, price }) => (
            <FoodCard key={name}>
              <div className="food-image">
                <img src={BASE_URL + image} alt="food image" />
              </div>
              <div className="food-info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button className="extra">${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 200px);
  padding-top: 23px;
  @media (0 < width < 600px) {
 background: url("/bg.png") repeat-y;
  }
`;
const FoodCards = styled.div`
  /* width: 1090px;
  height: 366px; */

  margin: 0px auto;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;
const FoodCard = styled.div`
  .extra {
    width: 67px;
    height: 25px;
    padding: 4px auto;
    gap: 10px;
    border-radius: 5px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
  .food-image {
    width: 133px;
    height: 133px;
  }
  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  .info {
    width: 168px;
    height: 86px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  }
  .info h3 {
    width: 150px;
    white-space: wrap;
    height: 19px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    text-align: left;
  }
  .info p {
    white-space: wrap;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
  }
  border: 0.66px solid;
  display: flex;
  gap: 30px;

  border-image-source: radial-gradient(
        80.38% 222.5% at -13.75% -12.36%,
        #98f9ff 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        80.69% 208.78% at 108.28% 112.58%,
        #eabfff 0%,
        rgba(135, 38, 183, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  background: url(.png),
    radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  width: 350px;
  height: 167px;
  padding: 10px;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
