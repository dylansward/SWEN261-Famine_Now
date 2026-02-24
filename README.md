# Famine Now

A full-stack web-application simulating those used by not-for-profit organizations to collect goods and raise money for specific needs. It allows managers of the supposed "Famine Now" organization to list ongoing issues, which the public can then see and make contributions to in order to help resolve.

This project was originally developed by **Dylan Sward**, **Anthony Salsbury**, **Vladislav Kudin**, and **Giovanni Pirrih** across five sprints as defined by the Scrum framework. The current repository serves as a public archive of that project, and reflects it at its final[^exception] state by the end of the semester.

## How to Use

### Prerequisites

This project was built using Java 24, Maven, and Angular, and requires them in order to run.

### Run Instructions

1. From the project's root, change the directory to [`./ufund-api/`](./ufund-api/)
2. Run the command `mvn exec:java`
3. From the project's root, change the directory to [`./ufund-ui/ufund-angular/`](./ufund-ui/ufund-angular/)
4. Run the command `ng serve` in a second terminal
5. Open [`http://localhost:4200/`](http://localhost:4200/) in your browser
6. To stop the project, close the browser and end both processes in the terminals

### Additional Notes

- Depending on which type of user is signed-in, the web-application provides you with different functionality. The special username `admin` is reserved for managers of "Famine Now," while all others are used by standard users. If no existing account is associated with a username, it will be created automatically.
    - The sign-in page has a field to enter a password. Regardless of what is entered, its value will be ignored. As such, it is fine to leave the field empty.

[^exception]: The original `README` was rarely edited during the course of the project, and did not properly describe the end-product or explain how to run it. This file was, and may continue to be, changed to resolve these issues. The rest of the repository remains unchanged, as its intention is to accurately capture the final product made during the class.
