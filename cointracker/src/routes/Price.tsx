import styled from "styled-components";

interface PriceData {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

interface PriceProps {
  priceData?:PriceData;
}

const Taps = styled.div`
  display:flex;
  flex-direction:column;

`;

const Tap = styled.div`
  background-color: ${props => props.theme.boxColor};
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:40px;
  margin-bottom:10px;
  border-radius:10px;
  padding: 0 20px;
`;

const Percent = styled.span<{percent?:number}>`
  color:${props => props.percent&&props.percent>0 ? "#2ecc71":"#e74c3c" }
`;


function Price({priceData}:PriceProps) {
  console.log(priceData)
  return (
    <Taps>
      <Tap>
        <span>Price :</span>
        <span>$ {priceData?.price}</span>
      </Tap>
      <Tap>
        <span>Max Change rate in last 24h :</span>
        <Percent percent={priceData?.market_cap_change_24h}>{priceData?.market_cap_change_24h}%</Percent>
      </Tap>
      <Tap>
        <span>Change rate (last 30 Minutes) :</span>
        <Percent percent={priceData?.percent_change_30m}>{priceData?.percent_change_30m}%</Percent>
      </Tap>
      <Tap>
        <span>Change rate (last 1 hours) :</span>
        <Percent percent={priceData?.percent_change_1h}>{priceData?.percent_change_1h}%</Percent>
      </Tap>
      <Tap>
        <span>Change rate (last 12 hours) :</span>
        <Percent percent={priceData?.percent_change_12h}>{priceData?.percent_change_12h}%</Percent>
      </Tap>
      <Tap>
        <span>Change rate (last 24 hours) :</span>
        <Percent percent={priceData?.percent_change_24h}>{priceData?.percent_change_24h}%</Percent>
      </Tap>
    </Taps>
  );
}
  
export default Price;