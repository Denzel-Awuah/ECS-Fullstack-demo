## ECS-Fullstack-demo

Full Stack demo CRM application. 

Created using React JS for the Frontend and Spring Boot for the Backend.

Backend service communicates with MySQL database - AWS Relational Database Service (RDS)

## Deployment 
Dockerized both frontend and backend microservices into a single Docker image using Jib Maven Plugin.

Deployed the Fullstack image to a Serverless Fargate Instance within a Cluster using Amazon's Elastic Container Service.

The Fargate instance is the capable of autoscaling and also communicates with the MySQL database which was deployed to AWS RDS. 




