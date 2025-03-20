export default function MainContent(){
    return (
      <main className="w-full px-12">
        <div className="h-[80vh] px-8 bg-cover bg-center bg-blend-darken text-white bg-black/60 rounded-md flex bg-[url(../src/assets/26085.jpg)]  flex-col justify-center items-center text-center py-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              See, book, and manage campus halls in real time.
            </h2>
            <p className="text-base mb-6 italic">
              Book your tickets for the best shows in town and enjoy unforgettable performances that
              bring stories to life on stage.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a href="#" className="border-1 py-2.5 px-6 rounded border-white font-bold">View Live Campus Status</a>
              <a href="#">
                <button className="bg-secondary  hover:bg-tertiary cursor-pointer text-white font-bold py-3 px-6 rounded transition duration-300">
                Reserve Your Space Now
                </button>
              </a>
            </div>
        </div>
      </main>
    );
}