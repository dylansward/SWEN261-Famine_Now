---
geometry: margin=1in
---

<style>
  img {
    border: 2px solid black;
  }
</style>

# PROJECT Design Documentation

## Team Information
* Team name: Team1
* Team members
  * Anthony Salsbury
  * Dylan Sward
  * Vladislav Kudin
  * Giovanni Pirrih

## Executive Summary

This is a summary of the project.

### Purpose

The project is a website that users can go to and give donations to resolution efforts for various famines. One important user group is the admin, who needs to be able to add, delete, and update information of the different famines in order for users to contribute to current efforts. The most important group, however, are the helpers, who want to contribute to specific efforts and are using this website to do so.

### Glossary and Acronyms

| Term | Definition |
|------|------------|
| SPA | Single Page |

## Requirements

This section describes the features of the application.

> _In this section you do not need to be exhaustive and list every
> story.  Focus on top-level features from the Vision document and
> maybe Epics and critical Stories._

### Definition of MVP

The Minimum Viable Product provides different functionality for users depending on how they log-in through our authenticator. Helpers are able to see/search for ongoing famine efforts that need contributing to, as well as add and remove them from their shopping baskets. These baskets can then be checked-out once the helper is done modifying it. Admin users, who utilize the special "admin" login information, can add, remove, edit, and see ongoing famine effort listings, but do not have their own baskets and cannot they see the baskets of others.

In order to assist helper users with choosing their contributions, our product also stores geographical information about the famines, and allows for the search of famines based on this location information.

### MVP Features
- As a helper I want to see a list of needs so that I can choose what to contribute to.
- As a helper I want to search for different needs so that I can more easily contribute to them.
- As a helper I want to add needs to my basket so that I can easily curate a list of needs that I want to support.
- As a helper I want to log in and out so that other users cannot access my basket.
- As a helper I want to checkout my basket so that I can finalize my contributions to my chosen needs.
- As a helper I want to have a persistent basket so that I can access it across multiple sessions.

- As an admin I want to update the needs so that others can see accurate information.
- As an admin I want to delete outdated needs so that people can fund current ones and not waste their money.
- As an admin I want to create new needs so that others can contribute to them.
- As an admin I want to log in and out so that other users cannot utilize my elevated permissions.

- As a product owner I want to have a persistent inventory so that the system stays up-to-date.

### Enhancements
For this project, we implemented two different enhancements, one minor and one major.

For our minor enhancement, we added location data to needs. When the admin creates or edits a need, they have the option to add a location that will also get saved in the backend alongside the MVP data. Helpers can then see this data, since it is retrieved with everything else, as well as search for needs based on it, which is done with an additional HTTP request parameter.

For our major enhancement, we added a tier system that allows users to unlock random styles as they contribute more money. Both the styles that users have unlocked and the specific ones that they have active get saved in and retrieved from the backend, allowing each person's choice list and current choices to be saved across sessions. With the current selections in particular, having these be persistent means that users do not have to reselect their preferred style everytime they login, as that is handled automatically.

## Application Domain

This section describes the application domain.

![Domain Model](DesignDocAssets/domain-model.png)

The main users of the program are the U-fund Manager and the helpers. The U-fund manager adds needs (the famine efforts) to the cupboard, and is also able to edit their information and remove them entirely. The helpers can move these needs from the general cupboard into their personal baskets, which will hold the needs until the helper is ready to move them to checkout.

## Architecture and Design

This section describes the application architecture.

### Summary

The following Tiers/Layers model shows a high-level view of the webapp's architecture. 
**NOTE**: detailed diagrams are required in later sections of this document.

![The Tiers & Layers of the Architecture](DesignDocAssets/architecture-tiers-and-layers.png)

The web application, is built using the Model–View–ViewModel (MVVM) architecture pattern. 

The Model stores the application data objects including any functionality to provide persistance. 

The View is the client-side SPA built with Angular utilizing HTML, CSS and TypeScript. The ViewModel provides RESTful APIs to the client (View) as well as any logic required to manipulate the data objects from the Model.

Both the ViewModel and Model are built using Java and Spring Framework. Details of the components within these tiers are supplied below.


### Overview of User Interface

This section describes the web interface and flow; this is how the user views and interacts with the web application.

#### Sprint 1 Sketch

The following is a sketch of our plan for the helper page, where helpers, once logged in, will be able to move needs between the cupboard and their basket. They can also search for needs with a search bar, or logout if they want to leave. Once they are ready, there will also be a checkout button so that they can finalize their contributions. 

![Replace with your First concept of a layout for a mayor page in the User Interface](DesignDocAssets/Sprint1UIDraft.png)

#### Flow of Application's UI

<!--The application's UI will feature a home page that initially shows users a list of ongoing famine efforts. This page will also direct them to a sign-in page, where they can enter their username and password in order to log into their accounts. From here, the admin will see a master page where they can add, remove, and edit needs, while the helpers will see their basket and a list of needs, which they are able to move specific things between. From these pages, all users will have the ability to logout with a logout button near where the original login button was. Additionally, each page will have a button to take the user back to their primary screen (determined by what account they are signed in as).

The following are sketches of the Login and Admin pages. The above image, which is a sketch of the Helper page, also represents a part of the UI.

![](DesignDocAssets/Sprint2LoginSketch.jpg)

![](DesignDocAssets/Sprint2AdminSketch.jpg)-->

The user starts on the home page of the website, where they are able to see and search for all the famine efforts, but are not able to edit them or add them to a basket. 
![](DesignDocAssets/S4/GenericHome.png)

From here, by going to the top right and pressing the "Login" button, the user gets taken to the login page. Here, they can enter their account information to log-in to their account. Once done, they can press the "Needs" button in the top-right corner to get back to the home page.
![](DesignDocAssets/S4/Login.png)

Once back on the home page, the user sees different things based on what account they logged into. If the user is an admin, they will see a Need creator at the top of the page that allows them to create new needs. Additionally, needs have an extra button that allows them to edit the textboxes for a need's data fields.
![](DesignDocAssets/S4/AdminHome.png)

Otherwise, if the user is logged into a helper account, they see a few new input fields where they can set quantities of a need and add that much to their cart. Once a need is in the user's cart, these fields change to allow the user to modify the amount stored in their cart or remove the item entirely.
![](DesignDocAssets/S4/HelperHome.png)

The helper can also now navigate to two more pages. The first page shows the user their basket, allowing them to checkout with a botton at the bottom of the page. The second page shows a spinner with different styles listed in each section, which the user can press on to get a random style, assuming they have enough spins left.
![](DesignDocAssets/S4/Basket.png)
![](DesignDocAssets/S4/Spin.png)

The last page, accessible by both admins and helpers, is the styles page, which shows the user which styles they have selected and allows them to change it.
![](DesignDocAssets/S4/Styles.png)

All of these pages can be accessed through buttons in the top-right corner when the correct user is logged in. Additionally, the logout button replaces the previous login button, and, once clicked, reroutes the user back to the login page.

As recommendations for the future, we could better format the navigation bar. For starters, each page has the website's logo at the top, but instead of having that take the user back to the home page like most websites, we give that responsibility to a button not-so-descriptively labelled "Needs". The login and logout button should also be the furthest-right button to match common standards.

Another recommendation is that the helper should be able to edit their basket from the basket page, instead of having to go back to the home page and do that there.

### View Tier
The view tier of our application includes all of the component HTML and CSS with each angular component. This includes the components:
- login-page
- lootbox (internal name for the wheel)
- needs
- user-basket (internal name for the checkout page)
- user-info
- user-styles

And of the non-components:
- app.html
- styles.css

Each of the component views is responsible for the different pages that a user (mostly for the helpers) can be on in our application. Of course app.html simply includes router links, a button to get to the needs page (as that is the same regardless of log-in status) and the website's header. The most significant part of our view tier is the main styles.css file, which contains all of the css variables and where they are applied based upon the selections a user can make.

![](DesignDocAssets/S4/SWENlogin.svg)
![](DesignDocAssets/S4/SWENcheckout.svg)

### ViewModel Tier

The ViewModel Tier includes the following classes:
- BasketsController: Receives and processes all "\baskets" HTTP requests.
- CupboardController: Receives and processes all "\cupboard" HTTP requests.

Typescript components:
- login-page.ts: Handles logging-in logic.
- lootbox.ts: Handles all logic pertaining to the wheel  and bestowing new styles onto a user.
- needs.ts: Handles all logic with displaying the cupboard and allowing needs to be added into a users cart, as well as allowing an admin to create, edit, and delete needs.
- user-basket.ts: Contains all logic for checking out a user's basket.
- user-info.ts: Contains all the relevant info for a user to display in the top right of the page (buttons).

Typescript services:
- backend-connection.ts: Connects to the SPRING server and enacts all HTTP requests from the typescript components.
- css-equipper.ts: Handles all logic for changing the variables in styles.css based on selected styles in the user's basket.
- helper-basket.ts: Contains a copy of the current user's basket, used among most of the typescript components that affect a basket. Calls the backend-connection when a relevant update to the basket is made.

> _**[Sprint 4]** Provide a summary of this tier of your architecture. This
> section will follow the same instructions that are given for the View
> Tier above._

> _At appropriate places as part of this narrative provide **one** or more updated and **properly labeled**
> static models (UML class diagrams) with some details such as associations (connections) between classes, and critical attributes and methods. (**Be sure** to revisit the Static **UML Review Sheet** to ensure your class diagrams are using correct format and syntax.)_
> 
![Replace with your ViewModel Tier class diagram 1, etc.](model-placeholder.png)

### Model Tier

The Model Tier includes the following classes:
- Basket: Defines the structure of user baskets that are stored by the server. Since each basket is tied to a particular user, these objects will also store the user-owned page styles and the particular ones that they have selected.
- BasketsDAO (interface)
- BasketsFileDAO: Provides implementation for the BasketsDAO functions in order to save, retrieve, update, and delete user baskets stored on the server.
- Need: Defines the structure of the famine needs that are stored by the server.
- NeedDAO (interface)
- CupboardFileDAO: Provides implementation for the NeedDAO functions in order to save, retrieve, update, and delete famine efforts stored on the server.

The model tier contains the structure for the Baskets and Needs, which also provides the JSON structure for those objects as they appear in the server. Additionally, this tier contains the FileDAOs, which contain the functions that execute CRUD commands onto the server. The BasketsFileDAO works with the JSON data for Baskets, while the CupboardFileDAO works with the data for Needs.

> _**[Sprint 4]** Provide a summary of this tier of your architecture. This
> section will follow the same instructions that are given for the View
> Tier above._

> _At appropriate places as part of this narrative provide **one** or more updated and **properly labeled**
> static models (UML class diagrams) with some details such as associations (connections) between classes, and critical attributes and methods. (**Be sure** to revisit the Static **UML Review Sheet** to ensure your class diagrams are using correct format and syntax.)_
> 
![Replace with your Model Tier class diagram 1, etc.](model-placeholder.png)

## OO Design Principles

1. Our product encapsulates the **Controller** principle, which requires distinct, non-UI objects be assigned the responsibility to receive and coordinate system operations. We do this through the BasketsController and CupboardController classes, which are classes within the api that take requests for specific information and runs the related system functions to process those requests.
![](DesignDocAssets/Controller-OO-Principle.png)

2. Our product follows the **Single Responsibility** principle, which states that classes should only have one responsibility. It does this by splitting the four main responsibilities--processing HTTP requests and modifying data in the server for both the cupboard and the user baskets--into four different classes. By doing this, each of these classes only has one responsibility, and they are, in turn, simpler to understand.

3. Both our website and backend follow the **Dependency Injection/Inversion** principle, in which low level objects do not instantiate dependent objects and are instead given (or injected) them from higher modules. In the website, BackendConnection and HelperBasket are services that get injected into the different pages in order to handle persistent data and communication with the backend. Meanwhile, in the backend, CupboardController and BasketsController, which receive and respond to HTTP requests, are given CupboardFileDAO and BasketsFileDAO, respectively, when created in order to properly handle these requests. As a result of this practice, we are able to increase the coverage of our unit tests by making and injecting expansive mock objects, rather than being forced to just test with real, yet narrow-focused, ones.

4. Our API supports **Pure Fabrication**, where non-domain entities are created to maintain single responsibility and low-coupling in domain entities. In our API, our domain entities are Basket and Need, which have the responsibility of storing user-based and need-based information, respectively. These responsibilities do not, however, include updating and sending that data from the database. To maintain single responsibility in the Basket and Need classes, we created four other entities--BasketsFileDAO, BasketsController, CupboardFileDAO, and CupboardController--to handle the tasks. As a result, these classes were purely fabricated.

## Static Code Analysis/Future Design Improvements
> _**[Sprint 4]** With the results from the Static Code Analysis exercise, 
> **Identify 3-4** areas within your code that have been flagged by the Static Code 
> Analysis Tool (SonarQube) and provide your analysis and recommendations.  
> Include any relevant screenshot(s) with each area._

> _**[Sprint 4]** Discuss **future** refactoring and other design improvements your team would explore if the team had additional time._

## Testing
> _This section will provide information about the testing performed
> and the results of the testing._

### Acceptance Testing

Passed: 19;
Failed: 0;
Untested: 0

Issues: None

### Unit Testing and Code Coverage

We utilized JaCoCo when designing our unit tests to see which branches of functions had not yet been tested. We then picked mock values that we felt targetted these branches and ensured that they both adequately covered the code and worked correctly. By doing this, we ended with an instruction coverage of 90% and a branch coverage of 94%, which covers the entire API except for a few error handlers that were deemed to not run, as is mentioned in more detail below.

![](DesignDocAssets/Sprint2Coverage.png)
*Coverage Report from Sprint 2*

![](DesignDocAssets/Sprint3Coverage.png)
*Coverage Report from Sprint 3 and 4*

The low coverage for the controller tier can be attributed to missing tests for when the backend encounters IOExceptions while handling HTTP requests. Most of these exceptions would rarely arise, however, as the issues that cause them also result in errors during earlier parts of the program. As such, these checks are redundant, and testing them was deemed low priority (especially since adding this to the test for UpdateNeeds of the CupboardController took two hours).

## Ongoing Rationale

**(2025/11/18) Decision on Rationales:** We have decided that we are content with having no other major decisions, and that this section will be left otherwise blank
