# Luxury Spa React H5 Project

A luxury SPA booking application converted from Stitch designs.

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- React Router v6

## Project Structure
- `src/pages/`: Main page components
  - `Home.jsx`: Home page (Therapist list/Category/Search)
  - `Therapist.jsx`: Therapist detail page
  - `Booking.jsx`: Booking/Appointment page
  - `Payment.jsx`: Order confirmation & payment
  - `Profile.jsx`: User personal center
- `src/components/`: Reusable UI components
  - `BottomNav.jsx`: Shared navigation bar

## Routes
- `/` - Home
- `/therapist/:id` - Therapist Detail
- `/booking` - Book Appointment
- `/payment` - Confirm & Pay
- `/profile` - Personal Center

## Development
To start the development server:
```bash
npm install
npm run dev
```J
## Build
To build for production:
```bash
npm run build
```
