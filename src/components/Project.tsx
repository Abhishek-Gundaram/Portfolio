import React from "react";
import mock01 from '../assets/images/Project1.png';
import mock02 from '../assets/images/Project2.png';
import mock03 from '../assets/images/Project3.png';
import mock04 from '../assets/images/Project4.png';
import mock05 from '../assets/images/Project5.png';
import mock06 from '../assets/images/Project6.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Phone data management</h2>
                <p>Refactored and modernized an existing Spring Boot application for managing high-volume DNC phone data. Upgraded to Java 17 and the latest Spring Boot version, optimized batch processing workflows with Spring Batch, and improved maintainability with a clean layered architecture. Strengthened security with Spring Security and OAuth 2.0, and containerized the application using Docker for deployment via Kubernetes.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Conversational AI & IVR Platform (IBM Watson)</h2>
                <p>Developed backend services and APIs for Watson Assistant-based chatbot and IVR workflows using Java 17 and Node.js 20. Implemented asynchronous and parallel processing, secured APIs with Spring Security and OAuth 2.0, and deployed polyglot services using Octopus Deploy across Dev/UAT/Prod environments.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Digital Lending Feature</h2>
                <p>Enhanced customer-facing lending features Company’s website. Modified backend services to implement new validation rules and regulatory requirements, optimized REST APIs for website integration, and strengthened security with role-based access control and token-based authentication.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Admin panel web application</h2>
                <p>Developed and enhanced an admin panel web application to manage and monitor features of a mobile application. Built with Angular, supporting role-based access, content management, and real-time updates. Integrated backend services with RESTful APIs and ensured secure and responsive web interfaces. Delivered features and bug fixes through Agile practices and Jira-based tracking.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>RASA Chatbot for Employee Self-Service</h2>
                <p>Developed an internal RASA-based chatbot to automate employee self-service workflows, including health insurance selection, leave applications, and policy inquiries. Integrated the chatbot with backend services via REST APIs, implemented dialog management and intent classification, and ensured secure handling of sensitive employee data. Deployed the chatbot on company servers and monitored performance for high reliability and responsiveness.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Threat Detection System using AWS</h2>
                <p>Developed a real-time threat detection system leveraging AWS Rekognition, Lambda, Kinesis, and S3. Implemented automated detection and alerting for security anomalies, integrating image/video analysis with serverless processing pipelines. Designed efficient event-driven workflows using Kinesis streams to process high-volume data, and stored outputs securely in S3 for auditing and reporting. Ensured scalability, reliability, and low-latency response for enterprise security monitoring.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;