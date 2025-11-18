// HomePage.js - Home page component
import React from 'react';
import deloitte from './icons/deloitte.jpg'
import scholarship from './icons/eset_scholarship.jpeg'

const CvPage = () => {

  return (
    <div className="min-h-screen bg-light-wisteria-50 dark:bg-pale-slate-950 text-light-wisteria-600 dark:text-light-wisteria-400 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex justify-flex-start flex-col mt-16">
            <h1 className="text-6xl font-heading mb-8">
              Experience and Projects
            </h1>

            <p className="text-xl font-sans mb-16">
                Throughout my time at university, I've had the opportunity to gain work on research projects
                and experience working in tech as an intern.  
            </p>

            <p className="text-4xl font-heading mb-4"> Experience </p>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Ipau Technologies | Cybersecurity Intern </p>
              <p className="text-xl italic mb-2"> June - November 2025 </p>
              <p className="text-xl"> 
                • Conducting Essential Eight compliance reviews of security clients and reporting findings. <br/>
                • Implementing solutions to fulfill Essential Eight requirements through endpoint management,
                application control, and patch management. 
              </p>
            </div>

            <div className="mb-8 font-sans">
              
              <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
                <div className="flex-1">
                  <p className="text-2xl font-bold"> Deloitte | Software Engineering Intern </p>
                  <p className="text-xl italic mb-2"> April - June 2025  </p>
                  <p className="text-xl mr-8">
                    • Contributed to multiple proof of concept projects for ‘Optimal Reality’, a digital twin and simulation platform. <br/>
                    • Collaborated with the backend team to translate high-level concepts into functional solutions within two-week sprints. <br/>
                    • Designed data schemas and implemented functions for the ‘Optimal Reality Model Development Kit’.
                  </p>
                </div>
                <div className="flex flex-col items-center mt-2">
                  <img src={deloitte} alt='Deloitte Intern Cohort' className="w-80 h-60 rounded-sm object-scale-down"/>
                  <p className="text-l italic"> Deloitte Internship Cohort </p>
                </div>
              </div>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Atlassian | Software Engineering Intern </p>
              <p className="text-xl italic mb-2"> November 2024 - February 2025  </p>
              <p className="text-xl"> 
                • Worked on the Jira Cloud Migration Assistant within the VIPER Migrations team. <br/>
                • Contributed towards the ‘Migration Notifier’ project, used DynamoDB to store notification configuration data, implemented CRUD API and frontend. <br/>
                • Took part in the ‘SHIP IT’ intern competition, creating a tool to generate performance review summaries.
              </p>
            </div>

            <p className="text-4xl font-heading mb-4"> Projects </p>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Evaluating Security of Multi-Agent Systems </p>
              <p className="text-xl italic mb-2"> March - June 2025 </p>
              <p className="text-xl"> 
                • Working with Professor Hung Nguyen, built a multi agent AI system using the ‘smolagents’ framework, integrating web search, SQL queries, and timetable generation into agent tools. <br/>
                • Conducted testing against the system, simulating attack scenarios and evaluating vulnerabilities.
              </p>
            </div>

            <div className="mb-8 font-sans">
              <p className="text-2xl font-bold"> Understanding Sophisticated Cyber-Enabled Influence Operations </p>
              <p className="text-xl italic mb-2"> July - November 2024 </p>
              <p className="text-xl"> 
                • Created models with the MITRE ATT&CK and DISARM frameworks using the MITRE Attack Flow Builder. Reviewed the modelling process and analysed the models produced. <br/>
                • Contributed to a project led by Professor Hung Nguyen and Jim Morris. Click 
                <a href="./ADSTAR_poster.pdf" className="text-light-wisteria-600 dark:text-light-wisteria-400 cursor-pointer hover:text-light-wisteria-400 dark:hover:text-light-wisteria-600 font-bold"> here </a>
                to view the poster displayed at the Australian Defence Science, Technology and Research Summit.
              </p>
            </div>

            <p className="text-4xl font-heading mb-4"> Achievements </p>
            <div className="flex md:flex-row flex-col items-center">
              <div>
                <div className="mb-8 font-sans">
                  <p className="text-2xl font-bold"> ESET Women in Cybersecurity Scholarship 2024 </p>
                  <p className="text-xl"> 
                    Cybersecurity scholarship for exemplary female students enrolled in a STEM program. Met with the Minister for Defence and Cybersecurity in Canberra.
                  </p>
                </div>

                <div className="mb-8 font-sans">
                  <p className="text-2xl font-bold"> Notable Coursework </p>
                  <p className="text-xl"> 
                    Algorithm & Data Structure Analysis - HD (95) <br/>
                    Advanced Cybersecurity - HD (93)
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-0">
                  <img src={scholarship} alt='Minister of Defence and Cybersecurity' className="md:w-96 w-60 rounded-sm object-scale-down mb-1"/>
                  <p className="text-l italic"> ESET Scholarship </p>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CvPage;