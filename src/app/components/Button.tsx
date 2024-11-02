import Link from 'next/link'

interface Props {
    href: string
    text: string
};

const Button = ({href, text} : Props) => {
  return (
    <Link className="bg-green w-fit text-black text-sm lg:text-base font-bold shadow-primary rounded-full py-4 px-6 hover:bg-lightgreen transition-colors" href={href}>{text}</Link>
  )
}

export default Button