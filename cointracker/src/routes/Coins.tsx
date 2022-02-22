import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { useRecoilState } from "recoil";
import { scrollYValue } from "../atoms";
import Toggle from "../Toggle";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const ToggleBox = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 15px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins); // ICoin으로 받아오는 data의 타입 설정. [] : 배열로 설정

  // useQuety를 사용하지 않고 데이터를 그냥 받아오는 방법
  //const [coins, setCoins] = useState<ICoin[]>([]);
  //const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);

  const [YValue, setYValue] = useRecoilState(scrollYValue);

  // scrollY값이 0이상인 경우에만 atom에 저장
  function handleFollow() {
    if (window.pageYOffset > 0) {
      setYValue(window.pageYOffset);
    }
  }

  useEffect(() => {
    function watch() {
      window.addEventListener("scroll", handleFollow); //스크롤 변경시 YValue에 Y값 저장
    }
    watch();
    // 여러번 addEventListener를 사용할 때에는 꼭 removeEventListener를 해주어야 메모리 낭비가 없다.
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  // 페이지에 돌아왔을 때 scrollY의 값이 있는 경우 뷰포트를 그 위치로 이동시킨다,
  useEffect(() => {
    if (YValue > 0) {
      window.scrollTo({
        top: YValue,
      });
    }
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <ToggleBox>
        <Toggle />
      </ToggleBox>
      <Header>
        <Title>Coin</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>{" "}
              {/* &rarr; : 화살표 */}
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
