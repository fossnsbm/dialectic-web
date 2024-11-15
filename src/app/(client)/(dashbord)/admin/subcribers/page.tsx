'use client'
import { useEffect, useState } from 'react'

// Define the structure of the subscription email
interface Subscription {
  _id: string
  email: string
}

export default function CustomTable() {
  const [data, setData] = useState<Subscription[]>([])
  const [loading, setLoading] = useState<boolean>(true) // Track loading state
  const [error, setError] = useState<string | null>(null) // Track error state

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/auth/newsletter') // Adjusted API endpoint
        const result = await response.json()

        if (response.ok) {
          setData(result)
        } else {
          setError(result.message)
        }
      } catch (error) {
        setError('Error fetching data. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Handle the unsubscribe action
  const handleUnsubscribe = async (email: string) => {
    try {
      const response = await fetch('/api/auth/newsletter', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setData((prevData) => prevData.filter((item) => item.email !== email))
        alert(result.message) // Show success message
      } else {
        alert(result.message) // Show error message
      }
    } catch (error) {
      console.error('Error unsubscribing:', error)
      alert('Error unsubscribing. Please try again.')
    }
  }

  if (loading) {
    return <div>Loading...</div> // Show loading message
  }

  if (error) {
    return <div className="text-red-500">{error}</div> // Show error message if fetching fails
  }

  return (
    <div className="overflow-x-auto py-6">
      {/* Preview the total number of subscribers */}
      <div className="mb-6 text-lg font-semibold text-gray-800">
        Total Subscribers: <span className="text-blue-600">{data.length}</span>
      </div>

      {data.length === 0 ? (
        <div className="text-gray-600">No subscribers found.</div> // Show message when no subscribers
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-blue-200 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-900">{item._id}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {item.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <button
                    onClick={() => handleUnsubscribe(item.email)}
                    className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out bg-blue-50 p-2 rounded-md"
                  >
                    Unsubscribe
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
