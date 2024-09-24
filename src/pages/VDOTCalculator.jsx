function VDOTCalculator() {
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
        <div id="table" className="w-full p-4 md:p-8">
          <table className="w-full border-collapse border border-gray-400">
            <caption className="text-lg font-semibold mb-4">
              Workout paces based on your V-DOT level
            </caption>
            <thead className="bg-slate-200">
              <tr>
                <th
                  scope="col"
                  rowSpan={2}
                  className="border border-gray-400 p-2 text-center"
                >
                  Time
                </th>
                <th
                  scope="col"
                  rowSpan={2}
                  className="border border-gray-400 p-2 text-center"
                >
                  E (easy) / L (long)
                </th>
                <th
                  scope="col"
                  rowSpan={2}
                  className="border border-gray-400 p-2 text-center"
                >
                  M (marathon pace)
                </th>
                <th
                  scope="col"
                  colSpan={3}
                  className="border border-gray-400 p-2 text-center"
                >
                  T (threshold pace)
                </th>
                <th
                  scope="col"
                  colSpan={4}
                  className="border border-gray-400 p-2 text-center"
                >
                  I (interval pace)
                </th>
                <th
                  scope="col"
                  colSpan={5}
                  className="border border-gray-400 p-2 text-center"
                >
                  R (repetition pace)
                </th>
              </tr>
              <tr>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  400m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  Km
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  Mile
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  400m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  Km
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  1200m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  Mile
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  200m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  300m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  400m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  600m
                </th>
                <th scope="col" className="border border-gray-400 p-2 text-center">
                  800m
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-200">
              <tr>
                <th scope="row" className="border border-gray-400 p-2 text-center">
                  Distance time
                </th>
                <td className="border border-gray-400 p-2 text-center">5:07-5:45</td>
                <td className="border border-gray-400 p-2 text-center">4:41</td>
                <td className="border border-gray-400 p-2 text-center">1:45</td>
                <td className="border border-gray-400 p-2 text-center">4:24</td>
                <td className="border border-gray-400 p-2 text-center">7:02</td>
                <td className="border border-gray-400 p-2 text-center">96</td>
                <td className="border border-gray-400 p-2 text-center">4:03</td>
                <td className="border border-gray-400 p-2 text-center">4:49</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
                <td className="border border-gray-400 p-2 text-center">44</td>
                <td className="border border-gray-400 p-2 text-center">67</td>
                <td className="border border-gray-400 p-2 text-center">89</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-400 p-2 text-center">
                  Min/Km
                </th>
                <td className="border border-gray-400 p-2 text-center">5:07-5:45</td>
                <td className="border border-gray-400 p-2 text-center">4:41</td>
                <td className="border border-gray-400 p-2 text-center">1:45</td>
                <td className="border border-gray-400 p-2 text-center">4:24</td>
                <td className="border border-gray-400 p-2 text-center">7:02</td>
                <td className="border border-gray-400 p-2 text-center">96</td>
                <td className="border border-gray-400 p-2 text-center">4:03</td>
                <td className="border border-gray-400 p-2 text-center">4:49</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
                <td className="border border-gray-400 p-2 text-center">44</td>
                <td className="border border-gray-400 p-2 text-center">67</td>
                <td className="border border-gray-400 p-2 text-center">89</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-400 p-2 text-center">
                  Min/Mil
                </th>
                <td className="border border-gray-400 p-2 text-center">8:13-9:15</td>
                <td className="border border-gray-400 p-2 text-center">7:32</td>
                <td className="border border-gray-400 p-2 text-center">1:45</td>
                <td className="border border-gray-400 p-2 text-center">4:24</td>
                <td className="border border-gray-400 p-2 text-center">7:02</td>
                <td className="border border-gray-400 p-2 text-center">96</td>
                <td className="border border-gray-400 p-2 text-center">4:03</td>
                <td className="border border-gray-400 p-2 text-center">4:49</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
                <td className="border border-gray-400 p-2 text-center">44</td>
                <td className="border border-gray-400 p-2 text-center">67</td>
                <td className="border border-gray-400 p-2 text-center">89</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
                <td className="border border-gray-400 p-2 text-center">--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
}

export default VDOTCalculator;