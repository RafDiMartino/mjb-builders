import SectionContainer from "./SectionContainer"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <SectionContainer>
        <div className="w-full flex flex-col justify-center items-center py-12">
          <div className="flex justify-center items-center mb-4">
            <a href="https://www.checkatrade.com/trades/mjbbuildersltd1100898" target="_blank"><img className="w-12 h-12 mr-4" src="/assets/icons/checktade-icon.svg" alt="Checktrade icon" aria-label="Checktrade link" /></a>
            <a href="https://www.facebook.com/share/15FNmKLiwd/" target="_blank"><img className="w-9 h-9 mr-6" src="/assets/icons/facebook-icon.svg" alt="Facebook icon" aria-label="Facebook link" /></a>
            <a href="https://api.whatsapp.com/send?phone=447495282510" target="_blank"><img className="w-10 h-10 mr-5" src="/assets/icons/whatsapp-icon.svg" alt="WhatsApp icon" aria-label="WhatsApp link" /></a>
            <a href="mailto:MJBBuildersLTD@outlook.com"><img className="w-10 h-10" src="/assets/icons/email-icon.svg" alt="Email icon" /></a>
          </div>
          <p>© {currentYear} - MJB BUILDERS LTD</p>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer