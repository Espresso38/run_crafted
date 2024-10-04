import PacesTable from "../components/PacesTable";

function VDOTCalc() {
    return (
        <>
        <div
          id="main"
          className="flex flex-col md:flex-row items-center justify-center gap-5 h-auto md:h-3/5 p-6 md:p-12 w-full"
        >
          <div
            className="flex flex-col justify-center h-auto md:h-4/5 w-full md:w-2/5 bg-slate-200 p-6 md:p-8 rounded-3xl shadow-2xl"
            id="text"
          >
            <h2 className="text-2xl md:text-4xl font-semibold">How V-DOT works?</h2>
            <p className="text-lg md:text-3xl font-medium">
              It calculates the level of running fitness based on your recent race
              result to receive specific training paces.
            </p>
            <p className="text-sm text-slate-500 md:text-xl">
              *If you want to prepare for a race with V-DOT, choose your recent race
              close to your goal race distance. E.g., choose 10km time if you want to
              do a marathon rather than 5km.
            </p>
          </div>
          <div
            id="form"
            className="flex justify-around items-center h-auto md:h-4/5 w-full md:w-2/5 bg-slate-200 p-2 md:p-8 rounded-3xl shadow-2xl"
          >
            <form action="" className="flex flex-col gap-3 text-xl">
              <label htmlFor="distance">Event Distance</label>
              <select name="distance" id="distance" className="p-2 rounded-xl">
                <option value="three">3km</option>
                <option value="five">5km</option>
                <option value="ten">10km</option>
                <option value="halfMarathon">Half Marathon</option>
                <option value="marathon">Marathon</option>
              </select>
              <label htmlFor="time">Time (hh:mm:ss)</label>
              <input
                type="text"
                placeholder="00:00:00"
                required=""
                className="p-2 rounded-xl"
              />
              <input
                type="submit"
                defaultValue="Calculate"
                className="bg-slate-400 w-1/2 p-2 rounded-3xl"
              />
            </form>
            <div
              id="vdot"
              className="h-36 w-36 border-4 border-slate-500 rounded-full flex items-center justify-center"
            >
              <p className="text-center text-2xl font-medium">
                Your V-DOT <br /> level
              </p>
            </div>
          </div>
        </div>
        <PacesTable />
      </>
    )
}

export default VDOTCalc;