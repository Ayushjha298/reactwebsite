import './contact.css'
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg"
import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image = {HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit, quod consequuntur officia illum ipsum. Error non libero quaerat dolorem.
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:ayushjha298@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/Ayush_jha" target='_blank' rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+918851301995" target='_blank' rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
