# D13 - Calculator Project

## Overview of the phases of a software project

### 1) Analysis phase

Also called requirements gathering or discovery phase.

The phase where you understand what needs to be built and why, talking with the customer, prospective users, etc:

* What are the problems that your application needs to solve, and **why**
* How it is going to solve them

A goal of this phase is also defining a **clear scope of work**: what is going to be implemented in this phase/version of the product, and what is out of scope at the moment.

Usually performed by:

* All the stakeholders of a project
* Business Analysts
* Designers (UX / UI)
* Software devs / software architects

Output:

* Requirements of the product
* Nowadays, usually written as **user stories**: https://en.wikipedia.org/wiki/User_story

For this calculator:

As a user, I want to solve basic math operations (+, -, *, /), and receive the result, so that I can perform them quickly without having to do the math.

As a user, I want the result of the previous operation to be preserved, so that I can solve a chain of operations

After defining the stories, usually you **prioritize** them, so that you choose where to start from. Some of them could also not become part of the first version of the product, called the MVP - https://en.wikipedia.org/wiki/Minimum_viable_product

### 2) UX / UI Design phase

https://en.wikipedia.org/wiki/User_interface_design

https://en.wikipedia.org/wiki/User_experience_design

UX (user experience) - Designing the structure and "flow" of the pages, how it should work:

* Wireframes
* Interactive prototypes

UI (user interface) - Designing the final interface, how it should really look:

* Mockups

Tools used by designers in these phases:

* Figma (Mockup) https://www.figma.com/
* Adobe XD & Sketch app
* UX Pin https://www.uxpin.com/ or Invision App https://www.invisionapp.com/
* Miro https://miro.com/index/ to facilitate discussions with stakeholders / users / team members

### 3) Software Design Phase

https://en.wikipedia.org/wiki/Software_design

https://en.wikipedia.org/wiki/Software_architecture

Software developers, egineers, software architects, designing the architecture of a software.

How to structure data, how to structure the frontend / backend / frameworks to use etc.

In simple terms: in this phase the developers talk about how to code what needs to be coded, so that they are all aligned before starting.

**Calculator software design:**

This is a simple application, with few buttons and requirements, we will have no server, no data to serve the user. We are simply going to focus on the bare minimum functions. Addition, Subtraction, Multiplication, Division. Then display the result, and use it for the next operation.
