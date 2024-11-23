import TextField from "@mui/material/TextField";
import SectionContainer from "./SectionContainer";
import Heading from "./Heading";

const ContactSection = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <SectionContainer className="flex flex-col">
      <div id="contact" className="w-full pt-20">
        <Heading heading="Contact Us" />
        <p>You can get in touch with us by sending a message through the contact form or using the links below.</p>
        <form className="flex flex-col justify-center items-center w-full py-12 sm:py-20 sm:px-10" onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex gap-5 w-full">
              <TextField id="outlined-static" label="Full Name" name="name" type="text" fullWidth />
              <TextField id="outlined-static" label="Email Address" name="email" type="email" fullWidth />
            </div>
            <TextField id="outlined-multiline-static" label="Message" name="message" multiline minRows={10} fullWidth />
            <button type="submit" className="bg-green w-full my-4 text-black text-sm lg:text-base font-bold shadow-primary rounded-full py-4 px-6 hover:bg-lightgreen transition-colors">SUBMIT</button>
          </div>
        </form>
      </div>

    </SectionContainer>
  );
};

export default ContactSection;