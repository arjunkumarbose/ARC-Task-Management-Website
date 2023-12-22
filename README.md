# ARC Task Management Website

ARC is a collaborative Task Management platform aimed at enhancing task organization and management.

## Live Url

https://arc-task-management.web.app/

## Overview

ARC is a responsive and visually appealing Task Management platform built using React.js for the frontend and Express, Node.js, and MongoDB for the backend. The platform offers a simple landing page, user authentication, task creation, drag-and-drop functionality for task management, and additional features such as notifications and optional animation libraries.

## Features

### Designing Part

- Responsive design across the entire website for device compatibility.
- Simple landing page featuring:
  - Navbar with relevant routes.
  - "Let’s Explore" button leading to the login page.
  - Section displaying user demographics and potential beneficiaries.
  - Footer with clickable social media links.

### Functionalities

1. **User Authentication:**

   - Login, registration, and logout functionalities.
   - Google sign-in and other login methods.
   - User profiles with profile pictures in the task management dashboard.

2. **Task Management Dashboard:**
   - Create tasks with titles, descriptions, deadlines, and priority levels.
   - Tasks appear in the 'to-do' list upon addition.
   - Drag-and-drop functionality across 'to-do,' 'ongoing,' and 'completed' lists.
   - Use of React Hook Form for task creation.
   - Task deletion and edit functionalities.
3. **Additional Features:**
   - Toast notifications for task assignments, updates, and deadlines.
   - Optional use of animation libraries (Framer Motion, Spring.js, AOS).

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd your-arc-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Usage

1. **Run the development server:**

   ```bash
   npm start
   ```

2. **Build the project for production:**

   ```bash
   npm run build
   ```
