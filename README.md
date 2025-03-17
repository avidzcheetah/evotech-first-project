# Evotech First Project - MFlix Dashboard

This is a **Next.js** application developed as part of the **Evotech React Master Course**, focusing on recreating the **mFlix Dashboard** application using **Next.js** and **MongoDB**. The project implements **CRUD operations** (Create, Read, Update, Delete) with **Server Actions** and ensures a clear commit history for each development step.

## Overview

This project demonstrates how to build a full-stack application with **Next.js** and **MongoDB**, integrating server-side logic for handling database operations. Key features include a responsive dashboard layout, CRUD functionality for managing movies, and clear implementation of server actions.

### Features

- **Dashboard Layout**: 
  - A clean and responsive layout with a sidebar and a main content area. The layout provides a user-friendly interface for managing movies.
  
- **CRUD Operations**: 
  - **Create**: Add new movies to the database with information such as title, year, plot, poster URL, and rating.
  - **Read**: Display a list of movies from the **MongoDB** database, allowing users to see all movies in the collection.
  - **Update**: Edit details of a movie, including title, plot, year, and poster URL.
  - **Delete**: Remove movies from the database when they are no longer needed.

- **Server Actions**: 
  - CRUD logic is implemented using **Next.js Server Actions**, which handle database operations in a clean and efficient manner.

- **Commit History**: 
  - Ensuring a **clear and descriptive commit history** to maintain project clarity and accountability. Descriptive commits such as “Add movie creation with MongoDB” are used, avoiding vague messages like "Fixed bug".

## Features

### Dashboard Layout
The layout includes a **sidebar** and a **main content area** for managing the movie data. The sidebar offers quick access to all features, while the main content area displays the list of movies and options for adding, editing, and deleting movies.

### CRUD Operations
- **Create**: Users can add new movies to the database by filling out a form with details such as:
  - Movie Title
  - Year
  - Plot Summary
  - Poster URL
  - Rating
  
- **Read**: The movies stored in the **MongoDB** database are displayed in a table with all necessary details such as the title, year, plot, and rating.

- **Update**: Editing movie details is made simple by providing an interface to update information directly in the database.

- **Delete**: Each movie listed has an option to remove it from the collection, streamlining movie management.

### Server Actions
Next.js **Server Actions** are used to handle all CRUD operations directly on the server side. This approach makes data management efficient and secure, allowing for a seamless user experience.

## Technologies Used

- **Next.js**: Framework used for building the application, utilizing server-side rendering and static site generation.
- **MongoDB**: NoSQL database for storing movie data.
- **Mongoose**: Library for interacting with MongoDB using an elegant and straightforward API.
- **Tailwind CSS**: Utility-first CSS framework used for styling the application in a responsive manner.
- **Node.js**: Runtime environment for executing server-side logic.
- **Vercel**: Deployment platform for hosting the application.

## Live Deployment

The project is live and can be accessed at:

🌐 [MFlix Project - Live Demo](https://evotech-first-project-8x5p.vercel.app/dashboard)

## Installation (for Development)

To run the project locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/avidzcheetah/evotech-first-project.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd evotech-first-project
    ```

3. **Install Dependencies**:

    - Using npm:
      ```bash
      npm install
      ```

    - Or using Yarn:
      ```bash
      yarn install
      ```

4. **Set up MongoDB**:
    - Set up a **MongoDB** database (either local or cloud-based) and update the `.env` file with your MongoDB connection string.
  
5. **Start the Development Server**:

    - With npm:
      ```bash
      npm run dev
      ```

    - Or with Yarn:
      ```bash
      yarn dev
      ```

6. **View the Application**:

    Open your browser and navigate to:  
    `http://localhost:3000`

## Usage

### How to Use the Dashboard

1. **Viewing Movies**: The dashboard displays a list of movies in the database. Each movie has details such as title, plot, year, and rating. You can view all the movies stored in the database on the main screen.

2. **Adding a New Movie**: Use the "Add Movie" button to bring up a form where you can enter the movie's details, such as title, year, plot, and rating. After filling out the form, click "Submit" to add the movie to the database.

3. **Editing a Movie**: Click the "Edit" button next to any movie to update its details. This will bring up a pre-filled form with the current movie information, which you can modify and save.

4. **Deleting a Movie**: To remove a movie, simply click the "Delete" button next to the movie you wish to remove. A confirmation prompt will appear to confirm the deletion.

## Contributing

Contributions are welcome! Here's how you can get involved:

1. **Fork the Repository**: Create a fork of this repository on GitHub.
2. **Create a New Branch**:

    ```bash
    git checkout -b feature-name
    ```

3. **Make Changes and Commit**:

    ```bash
    git commit -m "Add a new feature"
    ```

4. **Push to Your Branch**:

    ```bash
    git push origin feature-name
    ```

5. **Open a Pull Request**: Submit your changes for review.

## License

This project is licensed under the **MIT License**.

## Acknowledgments

- **Evotech React Master Course**: This project was built upon the foundation of the React Master course provided by Evotech, offering in-depth learning on React.
- **Next.js Documentation**: Provides excellent resources on creating full-stack applications with Next.js.
- **MongoDB**: For providing a reliable, easy-to-use database solution.

