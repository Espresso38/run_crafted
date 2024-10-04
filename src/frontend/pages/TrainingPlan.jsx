import PacesTable from "../components/PacesTable";

function TrainingPlan() {
    return (
        <>
    <div
        id="main"
        className="flex flex-col md:flex-row items-center justify-center gap-5 h-auto md:h-3/5 p-6 md:p-12 w-full"
    >
        <div
        id="form"
        className="flex items-center h-auto md:h-4/5 w-full md:w-2/5 bg-slate-200 p-2 md:p-6 rounded-3xl shadow-2xl"
        >
        <form action="" className="grid grid-cols-2 grid-rows-2 gap-3 text-xl">
            <div className="flex flex-col">
            <label htmlFor="">Weekly Distance</label>
            <select name="distance" id="distance" className="p-2 rounded-xl">
                <option value="starting">Just Starting</option>
                <option value="less30"> &lt;30km (20mil)</option>
                <option value="between30and40">30-40km (20-26mil)</option>
                <option value="between40and60">40-60km (26-40mil)</option>
                <option value="between60and90">60-90km (40-60mil)</option>
            </select>
            </div>
            <div className="flex flex-col">
            <label htmlFor="">Runns Per Week</label>
            <select name="runns" id="runns" className="p-2 rounded-xl">
                <option value="threeTimes">3</option>
                <option value="fourToFive">4-5</option>
                <option value="sixPlus">6+</option>
            </select>
            </div>
            <div className="flex flex-col">
            <label htmlFor="">Event Distance</label>
            <select name="distance" id="distance" className="p-2 rounded-xl">
                <option value="improve">Just Starting</option>
                <option value="five">5km</option>
                <option value="ten">10km</option>
                <option value="halfMarathon">Half Marathon</option>
                <option value="marathon">Marathon</option>
            </select>
            </div>
            <input
            type="submit"
            value="Submit"
            defaultValue="Create Training Plan"
            className="bg-slate-400 p-2 rounded-3xl"
            />
        </form>
        </div>
        <div
        id="description"
        className="flex flex-col justify-center h-auto md:h-4/5 w-full md:w-2/5 bg-slate-200 p-6 md:p-8 rounded-3xl shadow-2xl"
        >
        <p className="text-xl md:text-xl font-semibold">
            Here you can create training plan based on your V-DOT level or if you
            are just starting. Remember that plans are not restrictive. You cut
            workouts based on your feeling. Sometimes you will feel off and thats
            fine. Key to succes is consitency not amount of injuries.
        </p>
        </div>
    </div>
    <PacesTable />
    <div id="tableTraining" className="w-full p-4 md:p-8">
        <table className="w-full border-collapse border border-gray-400">
        <caption className="text-lg font-semibold mb-4">Your training</caption>
        <thead className="bg-slate-200">
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                Week
            </th>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                L
            </th>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                E
            </th>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                Q1
            </th>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                E
            </th>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                Q2
            </th>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                1
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
        </thead>
        <tbody className="bg-slate-200">
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                2
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                3
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                4
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                5
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
        </tbody>
        <tbody className="bg-slate-200">
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                6
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                7
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                8
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                9
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
        </tbody>
        <tbody className="bg-slate-200">
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                10
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                11
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
            <tr>
            <th scope="col" className="border border-gray-400 p-2 text-center">
                12
            </th>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                60 min L
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 5x(5min T / 1 min E) + 10 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                45 min E
            </td>
            <td scope="col" className="border border-gray-400 p-2 text-center">
                10 min E + 8x(200m R / 1 min W) + 10 min E
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </>
    )
}

export default TrainingPlan;