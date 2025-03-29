// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12">
      <div className="h-[80vh] px-8 bg-cover bg-center bg-blend-darken text-white bg-secondary/60 rounded-md flex flex-col justify-center items-center text-center py-32 bg-[url('../src/assets/26085.jpg')]">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          See, book, and manage campus halls in real time.
        </h2>
        <p className="text-base mb-6 italic">
          Book your tickets for the best shows in town and enjoy unforgettable performances that bring stories to life on stage.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="button3">
            View Live Campus Status
          </button>
          <button className="button1">
            Reserve Your Space Now
          </button>
        </div>
      </div>
    </section>
  );
}
