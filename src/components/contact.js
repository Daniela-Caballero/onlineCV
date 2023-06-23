import { AiOutlineMail } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import './contact.css'


export default function Contact() {
return (
    <ul className="contact-icons">
        <li className="email">
            <a href="mailto:danicaba2000@hotmail.com"><AiOutlineMail className="email-icon"/></a>
        </li>
        <li className="linkedin">
            <a href="https://www.linkedin.com/in/daniela-caballero-864538199/" target="_blank"><GrLinkedinOption className="linkedin-icon"/></a>
        </li>
        <li className="github">
            <a className="github"href="https://github.com/settings/profile" target="_blank"><BsGithub className="github-icon"/></a>
        </li>
    </ul>

)}