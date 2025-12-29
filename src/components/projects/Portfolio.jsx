import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Developed a portfolio featuring projects, skills, and achievements in software and Web development.",
      link: "https://github.com/TanveerKalluru/portfolio"
    },
    {
      title: "AI-Health-Bot",
      description: "Developed a Streamlit app for symptom transcription, disease prediction.",
      link: "https://github.com/TanveerKalluru/AI-Health-Bot"
    },
    {
      title: "Customer-Churn",
      description: "Developed a Streamlit app for predicting customer churn using a trained machine learning model.",
      link: "https://github.com/TanveerKalluru/Customer-Churn-Prediction"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container">
        {projects.map((project, index) => (
          <div className="portfolio__item" key={index}>
            <h3 className="portfolio__title">{project.title}</h3>
            <p className="portfolio__desc">{project.description}</p>
            <a href={project.link} className="portfolio__button" target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
