import telkomImage from '../../assets/images/telkom.jpg'
import biptekImage from '../../assets/images/biptek.png';
import givImage from '../../assets/images/giv.png'

const data = [
    {
        companyName: "PT. Telekomunikasi Indonesia",
        logo: telkomImage,
        roleName: "Backend Developer",
        year: "April 2022 - April 2024",
        tasks: [
            "Developed and deployed microservices and REST APIs to support core logistics functionality",
            "Containerized services with Docker and managed deployments through Kubernetes to maintain consistent and scalable environments",
            "Part of an Agile Scrum team, collaborating with designers and developers to ensure reliable backend solutions for logistic applications"
        ]
    },
    {
        companyName: "PT. Global Inovasi Ventura",
        logo: givImage,
        roleName: "Backend Developer",
        year: "March 2021 - April 2022",
        tasks: [
            "Developed REST APIs for Human Resource applications using PHP (Phalcon Framework)",
            "Implemented messaging services for real-time communication using RabbitMQ and WebSocket, with Node.js",
            "Deployed APIs on the AWS cloud, ensuring scalability and reliability of backend services for cloud-based applications"
        ]
    },
    {
        companyName: "PT. Biptek Indonesia Sukoharjo",
        logo: biptekImage,
        roleName: "Software Engineer Intern",
        year: "January 2021 - February 2022",
        tasks: [
            "Developed a prototype for a mobile point-of-sale (POS) application using Android Studio and local storage with SQLite"
        ]
    },
    
]

export default data;