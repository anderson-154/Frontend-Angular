# FrontendCustomers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Overview

This is a Customer Management (CRUD) Application built using Angular, where users can manage customer data using forms and validations. It is connected to a backend developed in Spring Boot and provides functionalities for creating, reading, updating, and deleting customer information.

## Development Setup

To start working on this project, clone the repository using:

`git clone https://github.com/anderson-154/Frontend-Angular.git`

`cd Frontend-Angular`

`npm install`

## Run the development server with the following command:
`ng serve -o`

Navigate to http://localhost:4200/. The application will automatically reload if you make any changes to the source files.


## To build the project for production, run:

`ng build --prod`
The build artifacts will be stored in the dist/ directory.

## Docker Setup image separately from the backend
This project includes a Dockerfile to run the frontend in a container. To build and run the frontend alone using Docker, run:

`docker build -t frontend-customers .`

`docker run -p 4200:80 frontend-customers`

The frontend will be accessible at http://localhost:4200/.

## Docker Compose Setup
To run both the Angular frontend and the Spring Boot backend together using Docker Compose, use the following commands:

`docker-compose up --build -d`

This will start the Angular frontend at http://localhost:4200/ and the Spring Boot backend at http://localhost:8080/.

To stop the services, use:

`docker-compose down`
