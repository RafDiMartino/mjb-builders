
const Heading = ({ heading, className }: { heading: string, className?: string }) => {
  return (
    <h2 className={`${className} pb-8 text-2xl lg:text-4xl`}>{heading}</h2>
  )
}

export default Heading