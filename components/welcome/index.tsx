export default function Welcome() {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: '50%',
        backgroundImage: "url('/images/home-unsplash.jpg')",
        height: '350px',
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl font-bold mt-0 mb-6">Вітаю</h1>
            <h3 className="text-3xl font-bold mb-8">
              Тут я пишу статті про програмування
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
