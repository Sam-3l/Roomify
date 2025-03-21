// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-16">
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Theatre Booking. All rights reserved.
      </div>
    </footer>
  );
}
