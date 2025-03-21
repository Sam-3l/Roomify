# Roomify

Roomify is a platform designed to help organize and automate the booking and usage of school lecture halls. It provides a centralized system for managing rooms, timetables, and bookings—including support for recurring reservations with conflict detection—while ensuring secure access through robust authentication and authorization.

## Features
- **Lecture Hall Management:** Easily manage lecture halls, including their capacities and locations.
- **Recurring Timetables:** Create and manage recurring course timetables.
- **Booking System:** Book lecture halls for single or multiple occurrences with built-in conflict detection.
- **REST API:** Fully RESTful API for integration with external systems.
- **Authentication & Authorization:** Secure access via JWT, with email verification and role-based permissions.
- **API Documentation:** Interactive API documentation available via Swagger and Redoc.
- **Recurring Reservations:** Supports recurring bookings with robust conflict detection.

## Setup Instructions

### Prerequisites
- Python 3.9 or higher
- Django 5.1
- SQLite (default database; you can switch to PostgreSQL or another DB in production)
- Node.js (for the frontend)

### Backend Installation
1. **Navigate to the Backend directory:**
   ```bash
   cd Backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

6. **Access the backend:**  
   Open your browser and navigate to `http://127.0.0.1:8000`.

### Frontend Installation
1. **Navigate to the Frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies (including Tailwind CSS and Axios):**
   ```bash
   npm install tailwindcss @tailwindcss/vite axios
   ```

3. **Configure Vite:**  
   Create or update your `vite.config.js` file with the following content:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from "@tailwindcss/vite"

   export default defineConfig({
      plugins: [react(), tailwindcss()],
      server:{
         allowedHosts:["all"]
      },
   })
   ```
   This configuration uses PostCSS to process Tailwind CSS and Autoprefixer, ensuring your styles are built correctly.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Access the frontend:**  
   Open your browser and navigate to the URL provided by Vite (e.g., `http://127.0.0.1:5173`).

### Testing

#### Backend Tests
Run the test suite to verify that everything is working:
```bash
cd Backend
python manage.py test
```

#### Frontend Linting
Check for linting errors:
```bash
cd Frontend
npm run lint
```

## API Endpoints
- **Courses:**  
  - `GET /api/courses/` – List all courses.
- **Lecture Theatres:**  
  - `GET /api/theatres/` – List all lecture theatres.
- **Reservations:**  
  - `GET /api/reservations/` – List all reservations.
  - `POST /api/reservations/` – Create a new reservation.
  - `GET /api/reservations/calendar/` – Retrieve reservation events in a calendar-friendly format.

**View full API documentation at:**
- **Swagger:** [http://127.0.0.1:8000/docs/swagger/](http://127.0.0.1:8000/docs/swagger/)
- **Redoc:** [http://127.0.0.1:8000/docs/redoc/](http://127.0.0.1:8000/docs/redoc/)

## Contribution Guidelines
We welcome contributions! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to Roomify.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.