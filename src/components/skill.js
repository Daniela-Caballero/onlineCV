import { SiJavascript } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { BsStack } from "react-icons/bs";
import { LuCloudCog } from "react-icons/lu";
import { BsGit } from "react-icons/bs";
import { SiAzuredevops } from "react-icons/si";
import { ImDatabase } from "react-icons/im";
import './skills.css';

export default function Skills({skills}) {
  return <section classname='skills' ref={skills}>
  <h2 className="skills-title">SKILLS</h2>
  <ul className="skills">
    <li><SiJavascript className="icon"/>
      JavaScript
    </li>
    <li><SiCsswizardry className="icon"/>
      CSS
      </li>
    <li><AiFillHtml5 className="icon"/>
      HTML
    </li>
    <li><GrReactjs className="icon"/>
      React JS
    </li> 
    <li><BsStack className="icon"/>
      Full-Stack development
    </li>
    <li><LuCloudCog className="icon"/>
      Web API
      </li>
    <li><BsGit className="icon"/>
      Git
    </li>
    <li><SiAzuredevops className="icon"/>
      Azure DevOps
      </li>
    <li><ImDatabase className="icon"/>
      SQL
      </li>
  </ul>
</section>
}