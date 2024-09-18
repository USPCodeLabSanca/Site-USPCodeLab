import { DateProps } from "src/types"

function DateCard(date: DateProps) {
  function getMonth(monthNum: number) {
    switch (monthNum) {
      case 0:
        return "Janeiro";
      case 1:
        return "Fevereiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outubro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro";
    }
  }

  const monthNum = date.date.getUTCMonth();
  const month = getMonth(monthNum);

  return (
    <>
      <div className="lg:block hidden">
        <div className="flex flex-col items-center w-24">
          <div className="text-2xl md:text-4xl font-monteserrat font-medium text-white text-center">{date.date.getFullYear()}</div>
          <div className="text-xl md:text-2xl font-monteserrat font-light text-white text-center">{`${date.date.getDate()} de ${month}`}</div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="">
          <div className="text-xs font-semibold text-textGrey">{`${date.date.getDate()} de ${month}, ${date.date.getFullYear()}`}</div>
        </div>
      </div>
    </>
  )
}

export default DateCard