# Roomify

Roomify helps organise and automate school lecture halls booking and usage. It provides a platform for managing rooms, timetables, and bookings with recurrence support.

## Features
- Manage lecture halls and their capacities.
- Create recurring timetables for courses.
- Book lecture halls for specific occurrences.
- REST API for integration with other systems.
- Authentication and authorization for secure access.

## Setup Instructions

### Prerequisites
- Python 3.9 or higher
- Django 5.1
- SQLite (default database)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sam-3l/Roomify
   cd Roomify
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

6. Access the application at `http://127.0.0.1:8000`.

### Testing
Run the test suite to ensure everything is working:
```bash
python manage.py test
```

## API Endpoints
- `GET /api/rooms/`: List all rooms.
- `GET /api/timetable/`: List all timetables.
- `GET /api/bookings/`: List all bookings.
- `POST /api/bookings/`: Create a new booking.

Refer to the codebase for detailed API documentation.

## Contribution Guidelines
We welcome contributions! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to contribute.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
