import React from 'react'

function UserData({data}) {

    if (data.name=='') {
        return null;
    }
    return (
        <div>
            <div className="overflow-x-auto mt-12">
                <table className="border border-gray-300 border-collapse w-1/2">
                    <thead>
                        <tr className="bg-gray-200">
                            <th colSpan="2" className="border border-gray-300 px-4 py-2 text-center font-semibold">User Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-100">

                            <td className="border border-gray-300 px-4 py-2 text-center">
                                Name
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                    {data.name}
                            </td>

                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">

                            <td className="border border-gray-300 px-4 py-2 text-center">
                                Email
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                            {data.email}
                            </td>

                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">

                            <td className="border border-gray-300 px-4 py-2 text-center">
                                    Message
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                    {data.message}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
    )
}

export default UserData
