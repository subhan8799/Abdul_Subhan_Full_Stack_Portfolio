import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

// const experience = {
// 	title: "Experience",
// 	subtitle: "Work And Experience",
// 	description:
// 		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
// 	header_image_path: "experience.svg",
// 	sections: [
// 		{
// 			title: "Work",
// 			experiences: [
// 				{
// 					title: "Associate AI Engineer",
// 					company: "Legato Health Technology",
// 					company_url: "https://legatohealthtech.com/",
// 					logo_path: "legato_logo.png",
// 					duration: "June 2020 - PRESENT",
// 					location: "Hyderabad, Telangana",
// 					description: "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
// 					color: "#0879bf"
// 				},
// 				{
// 					title: "Android and ML Developer",
// 					company: "Muffito Incorporation",
// 					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
// 					logo_path: "muffito_logo.png",
// 					duration: "May 2018 - Oct 2018",
// 					location: "Pune, Maharashtra",
// 					description:
// 						"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
// 					color: "#9b1578"
// 				},
// 				{
// 					title: "Android Developer",
// 					company: "FreeCopy Pvt. Ltd.",
// 					company_url: "https://www.linkedin.com/company/freecopy/about/",
// 					logo_path: "freecopy_logo.png",
// 					duration: "Nov 2017 - Dec 2017",
// 					location: "Ahmedabad, Gujarat",
// 					description:
// 						"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
// 					color: "#fc1f20"
// 				}
// 			]
// 		},
// 		{
// 			title: "Internships",
// 			experiences: [
// 				{
// 					title: "Data Science Research Intern",
// 					company: "Delhivery Pvt. Ltd.",
// 					company_url: "https://www.delhivery.com/",
// 					logo_path: "delhivery_logo.png",
// 					duration: "May 2019 - Sept 2019",
// 					location: "Gurgaon, Haryana",
// 					description:
// 						"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
// 					color: "#ee3c26"
// 				},
// 				{
// 					title: "Data Science Intern",
// 					company: "Intel Indexer LLC",
// 					company_url:
// 						"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
// 					logo_path: "intel_logo.jpg",
// 					duration: "Nov 2018 - Dec 2018",
// 					location: "Work From Home",
// 					description:
// 						"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
// 					color: "#0071C5"
// 				}
// 			]
// 		},
// 	]
// };

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assets/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
