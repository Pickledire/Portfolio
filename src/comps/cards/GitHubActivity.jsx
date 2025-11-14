import React, { useEffect, useState } from 'react'
import ActivityCalendar from 'react-activity-calendar'

const GitHubActivity = ({ username = 'Pickledire', year = 'last' }) => {
    const [contributionData, setContributionData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        let isActive = true
        const fetchContributions = async () => {
            setIsLoading(true)
            setErrorMessage('')
            try {
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`)
                if (!response.ok) {
                    throw new Error(`Failed to load contributions: ${response.status}`)
                }
                const json = await response.json()
                if (!isActive) return
                setContributionData(Array.isArray(json?.contributions) ? json.contributions : [])
            } catch (err) {
                if (!isActive) return
                setErrorMessage('Unable to load GitHub activity right now.')
                setContributionData([])
            } finally {
                if (isActive) setIsLoading(false)
            }
        }

        fetchContributions()
        return () => {
            isActive = false
        }
    }, [username, year])

    const theme = {
        // level0 (empty) -> level4 (most): lighter to darker greens
        dark: ['#0f1a13', '#86efac', '#4ade80', '#22c55e', '#166534'],
        light: ['#ecfdf5', '#bbf7d0', '#86efac', '#4ade80', '#22c55e']
    }

    return (
        <div className="github-activity-container">
            <ActivityCalendar
                data={contributionData}
                loading={isLoading}
                colorScheme="dark"
                theme={theme}
                blockSize={12}
                blockRadius={2}
                blockMargin={3}
                hideTotalCount
                labels={{
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }}
            />
            {errorMessage && (
                <p className="github-activity-error">{errorMessage}</p>
            )}
        </div>
    )
}

export default GitHubActivity


