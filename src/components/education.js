import './education.css';



export default function Education({education}) {
  return <section className="education" ref={education}>
    <h1 className="education-heading">EDUCATION</h1>
    <div className="education-content">
    <div className="hyperion">
      <h3>Web Development Bootcamp</h3>
      <h4>HyperionDev</h4>
      <h5>December 2022 - March 2023</h5>
    </div>
    <div className="law">
      <h3>Law LLB (2:1)</h3>
      <h4>University of Birmingham</h4>
      <h5>October 2018 - December 2021</h5>
    </div>
    </div>
  </section>
}

  