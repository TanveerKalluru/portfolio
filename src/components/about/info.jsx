import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">B.Tech currently pursuing</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase-alt"></i>
            <h3 className="about__title">Interest</h3>
            <span className="about__subtitle">Web Development</span>
        </div>
    </div>
  )
}

export default info
