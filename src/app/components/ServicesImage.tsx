
interface Props {
  src: string
  alt: string
  title: string
}

const ServicesImage = ({ src, alt, title } : Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-green rounded-full w-[288px] h-[288px] shadow-primary flex justify-center items-center mb-8">
        <img className="w-[260px] h-[260px] shadow-primary rounded-full object-cover" src={src} alt={alt} />
      </div>
      <p className="font-bold text-xl">{title}</p>
    </div>
  )
}

export default ServicesImage