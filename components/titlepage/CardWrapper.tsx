import { Separator } from "../ui/separator";
import TitleCard from "./TitleCard";

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) {
    return ""; // nebo můžete vrátit jinou výchozí hodnotu
  }
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function CardSeparator() {
  return <Separator className="my-2" />;
}

export default function CardWrapper({ data }) {
  const earningsDate = formatDate(data.earningsDate);
  const earningsStart = formatDate(data.earningsStart);
  const earningsEnd = formatDate(data.earningsEnd);
  const dividendDate = formatDate(data.dividendDate);

  return (
    <div className="grid grid-cols-2 gap-4">
      <TitleCard title={"Basic information"}>
        <div className="flex justify-between">
          <span>Exchange:</span>
          <span>{data.exchange}</span>
        </div>
        <div className="flex justify-between">
          <span>Expiration weekly options:</span>
          <span>{data.expirationDay}</span>
        </div>
        <div className="flex justify-between">
          <span>Market cap:</span>
          <span>{data.marketCap.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Last day volume:</span>
          <span>{data.volumeEOD}</span>
        </div>
      </TitleCard>

      <TitleCard title={"Dates"}>
        <div className="flex justify-between">
          <span>Earnings date</span>
          <span>{earningsDate}</span>
        </div>
        <div className="flex justify-between">
          <span>Start earnings: </span>
          <span>{earningsStart}</span>
        </div>
        <div className="flex justify-between">
          <span>End earnings: </span>
          <span>{earningsEnd}</span>
        </div>
        <div className="flex justify-between">
          <span>Dividend day:</span>
          <span>{dividendDate}</span>
        </div>
      </TitleCard>

      <TitleCard
        title={`Statistical data - ${data.calculateParams[0].duration} days`}
      >
        <div className="flex justify-between">
          <span>Highest price:</span>
          <span>
            {parseFloat(
              (
                data.calculateParams[0].lowPrice + data.calculateParams[0].range
              ).toFixed(2)
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Lowest price:</span>
          <span>{data.calculateParams[0].lowPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Price range:</span>
          <span>{data.calculateParams[0].range}</span>
        </div>
        <div className="flex justify-between">
          <span>Percentual range</span>
          <span>{data.calculateParams[0].rangePercent}</span>
        </div>
        <CardSeparator />
        <div className="flex justify-between">
          <span>Arithmetic mean of daily ranges</span>
          <span>{data.calculateParams[0].aritMeanDailyRange}</span>
        </div>
        <div className="flex justify-between">
          <span>Mean deviation of daily ranges</span>
          <span>{data.calculateParams[0].meanDevDailyRange}</span>
        </div>
        <div className="flex justify-between">
          <span>Coefficient of variation of daily ranges</span>
          <span>{data.calculateParams[0].coefVarDailyRange}</span>
        </div>
        <CardSeparator />
        <div className="flex justify-between">
          <span>Arithmetic mean of daily volumes</span>
          <span>{data.calculateParams[0].aritMeanDailyVolume}</span>
        </div>
        <div className="flex justify-between">
          <span>Mean deviation of daily volumes</span>
          <span>{data.calculateParams[0].meanDevDailyVolume}</span>
        </div>
        <div className="flex justify-between">
          <span>Coefficient of variation of daily volumes</span>
          <span>{data.calculateParams[0].coefVarDailyVolume}</span>
        </div>
      </TitleCard>

      <TitleCard
        title={`Statistical data - ${data.calculateParams[1].duration} days`}
      >
        <div className="flex justify-between">
          <span>Highest price:</span>
          <span>
            {parseFloat(
              (
                data.calculateParams[1].lowPrice + data.calculateParams[1].range
              ).toFixed(2)
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Lowest price:</span>
          <span>{data.calculateParams[1].lowPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Price range:</span>
          <span>{data.calculateParams[1].range}</span>
        </div>
        <div className="flex justify-between">
          <span>Percentual range</span>
          <span>{data.calculateParams[1].rangePercent}</span>
        </div>
        <CardSeparator />
        <div className="flex justify-between">
          <span>Arithmetic mean of daily ranges</span>
          <span>{data.calculateParams[1].aritMeanDailyRange}</span>
        </div>
        <div className="flex justify-between">
          <span>Mean deviation of daily ranges</span>
          <span>{data.calculateParams[1].meanDevDailyRange}</span>
        </div>
        <div className="flex justify-between">
          <span>Coefficient of variation of daily ranges</span>
          <span>{data.calculateParams[1].coefVarDailyRange}</span>
        </div>
        <CardSeparator />
        <div className="flex justify-between">
          <span>Arithmetic mean of daily volumes</span>
          <span>{data.calculateParams[1].aritMeanDailyVolume}</span>
        </div>
        <div className="flex justify-between">
          <span>Mean deviation of daily volumes</span>
          <span>{data.calculateParams[1].meanDevDailyVolume}</span>
        </div>
        <div className="flex justify-between">
          <span>Coefficient of variation of daily volumes</span>
          <span>{data.calculateParams[1].coefVarDailyVolume}</span>
        </div>
      </TitleCard>
    </div>
  );
}
