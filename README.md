# Roomify

Roomify helps organise and automate school lecture halls booking and usage. It provides a platform for managing rooms, timetables, and bookings with recurrence support.

## Features
- Manage lecture halls and their capacities.
- Create recurring timetables for courses.
- Book lecture halls for specific occurrences.
- REST API for integration with other systems.
- Authentication and authorization for secure access.
- Swagger and Redoc documentation for API endpoints.

## Setup Instructions

### Prerequisites
- Python 3.9 or higher
- Django 5.1
- SQLite (default database)
- Node.js (for the frontend)

### Backend Installation
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Run the development server:
   ```bash
   python manage.py runserver
   ```

6. Access the backend at `http://127.0.0.1:8000`.

### Frontend Installation
1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the frontend at the URL provided by Vite (e.g., `http://127.0.0.1:5173`).

### Testing
Run the test suite to ensure everything is working:

#### Backend Tests
```bash
cd Backend
python manage.py test
```

#### Frontend Linting
```bash
cd Frontend
npm run lint
```

## API Endpoints
- `GET /api/rooms/`: List all rooms.
- `GET /api/timetable/`: List all timetables.
- `GET /api/bookings/`: List all bookings.
- `POST /api/bookings/`: Create a new booking.
- `GET /api/timetable/<id>/occurrences/`: Get timetable occurrences within a date range.

View full API docs at:
- Swagger: `http://127.0.0.1:8000/docs/swagger/`
- Redoc: `http://127.0.0.1:8000/docs/redoc/`

## Contribution Guidelines
We welcome contributions! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to contribute.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
