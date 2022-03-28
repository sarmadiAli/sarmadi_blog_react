import { useNavigate  , useLocation} from "react-router-dom";
import React from 'react'


export default function ProjectPanel() {
  let navigate = useNavigate()

  const handleer = (addr) => {
    window.location.href = `/projects_link/${addr}`
  }
  return (

    <>
      <main className="grid">
        <section className="content_box item1">
          <h1 > Projects</h1>
        </section>
        <section className="card_box item2">
          <div>
            <h3>
              Un Project
            </h3>
            <p>
            </p>
          </div>
          <a  onClick={e => handleer('un')}>
            +Link
          </a>
        </section>
        <section className="card_box item3">
        </section>
        <section className="card_box item4">
          <div>
            <h3>
              Iranian electrical machine : The second  phase of the project
            </h3>
            <p>
            </p>
          </div>
          <a  onClick={e => handleer('carEl')}>
            +Link
          </a>
        </section>
        <section className="card_box item5">
          <div>
            <h3>
              fadak project
            </h3>
            <p>
            </p>
          </div>
          <a   onClick={e => handleer('fadak')}>
            +Link
          </a>
        </section>
        <section className="card_box item7">
          <div>
            <h3>
              Sima Project
            </h3>
            <p>
            </p>
          </div>
          <a >
            {/* +Link */}
          </a>
        </section>
        <section className="card_box item8">
          <div>
            <h3>
              Iranian electrical machine :   The first  phase of the project
            </h3>
            <p>
            </p>
          </div>
          <a   onClick={e => handleer('carEl')}>
            +Link
          </a>
        </section>
        <section className="card_box item9">
          <div>
            <h3 >
              React teacher
            </h3>
            <p>
            </p>
          </div>
          <a onClick={e => handleer('reactTeach')} >
            +Link
          </a>
        </section>
        <section className="card_box item10">
          <div>
            <h3>
              Sina Project
            </h3>
            <p>
            </p>
          </div>
          <a onClick={e => handleer('sina')}>
            +Link
          </a>
        </section>
        <section className="card_box item11">

        </section>
      </main>
    </>
  )
}
