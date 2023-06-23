import './workExperience.css';

const workExperienceList = [
  {title: "Teaching Assistant", company: "Now Education", date: "November 2021 - December 2022", 
  paragraph:[
    `Experience working as a one-to-one Teaching Assistant supporting students with 
    additional educational needs as well as providing social, physical and emotional support.`,
    `Flexibility and creativity in communication style to optimise learning.`,
    `Working as a team with external stakeholders to address and support individual needs, this 
    involved occasional review meetings, showcasing that targets were being reached.`,
    `Undertook weekly training as part of continuous professional development.`
  ]},
  {title: "Legal Assistant", company: "Crystal Law Solicitors",  date: "February 2018 - August 2018",
paragraph: [
  `I worked as the first point of contact for clients and dealt with a variety of queries in an 
  organised and efficient manner.`,
  `Effectively communicated key actions and dates for fee earners on Outlook.`,
  `Recorded processes using case management software (MyCase).`,
  `Dealt with casework, including preparing and filing bundles to the Home Office, demonstrating 
  excellent written communication and research skills.`,
  `Stakeholder management by liaising with third parties with excellent verbal communication skills, 
  e.g. GPs, surgeries and other law firms. `
]},
  {title: "Catering Assistant", company:"Compass Group (LCFC)", date: "August 2016 - 2020", 
paragraph: [
  `I was promoted to supervisor for the VIP lounge, ensuring the clients were well catered and 
  building a positive relationship with important clients as well as leading a team.`,
  `Responsible for ensuring all customer requests were fulfilled. This required efficiency in 
  organisation and good communication.`,
  `Excellent team-player, ensuring that everything ran smoothly during events.`,
  `Effectively multi-tasked with various conflicting demands in a high-pressure environment. `
]} 
]

export default function WorkExperience({experience}) {
  return (
  <section className="experience-section">
    <div ref={experience} className="experience-grid">
      <div className="experience-grid-column">
        <div className="CV-jobs">
      <h2 className="experience-heading">WORK EXPERIENCE</h2>
      {workExperienceList.map(i => {
        return(
        <section className='timeline'>
          <h3 className="timeline-heading">{i.title}</h3>
          <h4 className="timeline-heading-company">{i.company}</h4>
          <p className="timeline-heading-duration">{i.date}</p>
          <ul className="timeline-details">
          {i.paragraph.map(point => {return (<li className="timeline-item">{point}</li>)})}
          </ul>
        </section>
        )
        })}
      </div>
    </div>
    </div>
  </section>
  );
}