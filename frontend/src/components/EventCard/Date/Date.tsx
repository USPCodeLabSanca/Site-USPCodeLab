import { DateProps } from "src/types"

function EventCard(date: DateProps) {
  const monthNum = date.date.getUTCMonth();
  const month = monthNum === 0 ? "Janeiro" :
    monthNum === 1 ? "Fevereiro" :
      monthNum === 2 ? "Março" :
        monthNum === 3 ? "Abril" :
          monthNum === 4 ? "Maio" :
            monthNum === 5 ? "Junho" :
              monthNum === 6 ? "Julho" :
                monthNum === 7 ? "Agosto" :
                  monthNum === 8 ? "Setembro" :
                    monthNum === 9 ? "Outubro" :
                      monthNum === 10 ? "Novembro" :
                        monthNum === 11 ? "Dezembro" : "";
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl md:text-4xl font-monteserrat font-medium text-white text-center">{date.date.getFullYear()}</div>
      <div className="text-xl md:text-2xl font-monteserrat font-light text-textGrey text-center">{`${date.date.getDate()} de ${month}`}</div>
    </div>
  )
}

export default EventCard