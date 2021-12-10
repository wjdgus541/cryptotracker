import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from 'react-apexcharts';

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface CharProps {
  coinId:string;
}

function Chart({coinId}:CharProps) {

  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  
  return (
    <h1>
      {isLoading ? "Loading chart..." : 
      <ApexChart 
        type="candlestick"
        series={[
          {
            data: data?.map(price => ({
              x:price.time_close,
              y:[price.open, price.high, price.low, price.close]
            }))
          }
        ]} 
        options= {{
          theme: {
            mode:"dark"
          },
          chart: {
            type: 'candlestick',
            height: 350,
            toolbar: {
              show: false,
            },
            background: "rgba(0, 0, 0, 0.5)"
          },
          title: {
            text: undefined,
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            show:false
          }
        }}
        height={350}
      />
      }
    </h1>
    );
  }
  
  export default Chart;