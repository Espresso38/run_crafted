function Home() {
  const username = localStorage.getItem('username');

  return (
      <>
          <main className="flex flex-col flex-grow md:flex-row items-center justify-center gap-5 h-auto md:h-3/5 p-6 md:p-12 w-full">
              <div className="flex flex-col justify-center h-auto md:h-4/5 w-full md:w-2/5 bg-slate-200 p-6 md:p-8 rounded-3xl shadow-2xl">
                  <h2 className="text-2xl md:text-4xl font-semibold">
                      Hi {username}!
                  </h2>
                  <p className="text-lg md:text-3xl font-medium">
                      Welcome to the Run Crafted App! 
                      Here you can keep track of your progress 
                      and receive training plans based on your V-DOT level.
                  </p>
              </div>
              <img src="./src/frontend/assets/runner_home.jpg" alt="" className="w-full md:w-1/2 rounded-3xl shadow-2xl" />
          </main>
          <div className="flex justify-center items-center text-base md:text-xl h-auto md:h-1/5 w-11/12 md:w-1/2 p-4 bg-slate-200 my-1 rounded-3xl shadow-2xl">
              “The benefits and opportunities of running are available to anyone. You don’t have to be born a natural athlete, and you don’t have to be uniquely gifted. A life-shaping experience is there for the taking, waiting right outside your door.” —Donald Buraglio and Michael Dove
          </div>
      </>
  );
}

export default Home;