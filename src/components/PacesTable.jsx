function PacesTable() {
    return (
        <>
        <div id="tableVDOT" className="w-full p-4 md:p-8">
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

export default PacesTable;