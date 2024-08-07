# Las Calas Hotel Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- TODO: add badges for test coverage -->

A MEVN stack website for a small, family owned hotel. Contains a simple user registration and booking creation/management system to showcase technologies and methodologies applied throughout Coyotiv's Software Engineering course.

Coding standards applied throughout the project can be seen in the file "coding-standards.md"

## Accessing the app online [DEPRECATED]

A hosted production version is available at https://frontend-d4mfykq4iq-ew.a.run.app/ (NO LONGER AVAILABLE)

## Setting up for local development

> **Note:**
> The guide assumes you have Docker and Docker Compose installed locally. If not, refer to the [Docker documentation](https://docs.docker.com/compose/install/) for installation instructions.

Create `.env` files in the frontend and backend directories with contents similar to the `.env.example` files.

### Install Dependencies

First, install the necessary packages for both the backend and frontend:

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### Start the Services

After installing the packages, return to the main project folder and start the services using Docker Compose:

1. Start the MongoDB service:
   ```bash
   docker-compose up -d mongo
   ```

2. Start the backend service:
   ```bash
   docker-compose up backend
   ```

3. Start the frontend service:
   ```bash
   docker-compose up frontend
   ```

The backend API will be available at http://localhost:3000 and the frontend at http://localhost:5173.

> **Note**: in dev environment, the app uses live reload for changes inside the `src` directory in both the frontend and backend. Any changes to files outside of `src`, e.g. package installations, will require a rebuild of the respective containers.

### Seed the Database

To populate the database with initial data (hotel and rooms), run the following command:

```bash
node backend/src/index.js
```

This will create the necessary objects in the database for the application to function properly.

[PENDING]

Need to add base admin user to the database seed

## MIT License

Project: Copyright (c) 2023 Marvin Saccarello Werkmeister

Node template: Copyright (c) 2023 Coyotiv

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.