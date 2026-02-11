import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring boot",
    "Spring MVC",
    "Spring Security",
    "Spring Batch",
    "React.js",
    "Angular",
    "Typescript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MYSQL",
    "NOSQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "AWS",
    "Azure",
    "Git",
    "Docker",
    "Kubernetes",
    "Linux"
];

const labelsThird = [
    "Chatbot and IVR development",
    "RASA",
    "IBM Watson",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Built end-to-end full-stack features by designing RESTful APIs in Java/Spring Boot and Node.js, and delivering responsive web interfaces in React and Angular for real-world business workflows</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud Infrastructure</h3>
                    <p>Designed and deployed cloud infrastructure on AWS and Azure, containerizing services with Docker and orchestrating workloads on Kubernetes for scalable, production-grade deployments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Coversational AI</h3>
                    <p>Built and integrated conversational AI solutions for chatbots and IVR systems using IBM Watson and RASA, designing backend services and admin dashboards to manage intents, flows, and content in production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;