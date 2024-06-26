
interface DateProps {
    year: string
    day: string
}

function EventCard(date: DateProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl md:text-4xl font-monteserrat font-medium text-white">{date.year}</div>
            <div className="text-xl md:text-2xl font-monteserrat font-light text-textGrey">{date.day}</div>
        </div>
    )
}

export default EventCard