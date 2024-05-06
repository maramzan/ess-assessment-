# Project Title

## Description

This project is a web application built with React, Vite, and Material-UI. It provides a platform for users to schedule tasks and book services.

## Features

- Task Selection: Users can select tasks from a predefined list of services.
- Schedule: Users can schedule their tasks by selecting a date and time.
- Booking: Users can proceed to booking after scheduling their tasks.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate into the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`

## Usage

To run the project, use the command: `npm run dev`

## File Structure

. ├── src │ ├── assets │ │ └── png //contains all png images here │ ├── components // contains all the common components │ │ ├── button │ │ ├── footer │ │ └── navbar │ ├── constants │ │ ├── index.tsx //contains all the constant data used │ │ └── type.ts //contains all the types │ ├── pages │ │ └── home │ │ ├── pageComponents //all components of homepage │ │ │ ├── bookingSection │ │ │ ├── calender │ │ │ ├── checkbox │ │ │ ├── dropzone │ │ │ ├── progressBar │ │ │ ├── schedule │ │ │ ├── serviceCard │ │ │ ├── taskSelection │ │ │ └── taskSelectionHead │ │ └── index.tsx │ ├── utils │ │ └── theme.ts │ ├── App.tsx │ └── index.tsx ├── package.json └── README.md
