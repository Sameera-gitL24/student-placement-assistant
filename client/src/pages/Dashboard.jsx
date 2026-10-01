import { useEffect, useState } from "react";
import { getReadiness, saveReadiness } from "../services/api";
import Navbar from "../components/Navbar";
const Dashboard = () => {
    const [scores, setScores] = useState({
        dsa: "",
        coreCS: "",
        projects: "",
        resume: "",
        aptitude: "",
        communication: ""
    });

    const [overallScore, setOverallScore] = useState(null);
    const [focusAreas, setFocusAreas] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const loadReadiness = async () => {
            try {
                const data = await getReadiness();

                setScores({
                    dsa: data.readiness.dsa,
                    coreCS: data.readiness.coreCS,
                    projects: data.readiness.projects,
                    resume: data.readiness.resume,
                    aptitude: data.readiness.aptitude,
                    communication: data.readiness.communication
                });

                setOverallScore(data.overallScore);
                setFocusAreas(data.focusAreas);
            } catch (error) {
                console.log(error.message);
            }
        };

        loadReadiness();
    }, []);

    const handleChange = (e) => {
        setScores({
            ...scores,
            [e.target.name]: Number(e.target.value)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await saveReadiness(scores);

            setOverallScore(data.overallScore);
            setFocusAreas(data.focusAreas);
            setMessage(data.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
             <Navbar />

            <h1>Placement Readiness Dashboard</h1>

            <form onSubmit={handleSubmit}>
                <label>DSA</label>
                <input
                    type="number"
                    name="dsa"
                    min="0"
                    max="100"
                    value={scores.dsa}
                    onChange={handleChange}
                />

                <label>Core CS</label>
                <input
                    type="number"
                    name="coreCS"
                    min="0"
                    max="100"
                    value={scores.coreCS}
                    onChange={handleChange}
                />

                <label>Projects</label>
                <input
                    type="number"
                    name="projects"
                    min="0"
                    max="100"
                    value={scores.projects}
                    onChange={handleChange}
                />

                <label>Resume</label>
                <input
                    type="number"
                    name="resume"
                    min="0"
                    max="100"
                    value={scores.resume}
                    onChange={handleChange}
                />

                <label>Aptitude</label>
                <input
                    type="number"
                    name="aptitude"
                    min="0"
                    max="100"
                    value={scores.aptitude}
                    onChange={handleChange}
                />

                <label>Communication</label>
                <input
                    type="number"
                    name="communication"
                    min="0"
                    max="100"
                    value={scores.communication}
                    onChange={handleChange}
                />

                <button type="submit">Calculate Readiness</button>
            </form>

            {overallScore !== null && (
                <div>
                    <h2>Overall Readiness: {overallScore}%</h2>

                    <h3>Focus Areas</h3>

                    {focusAreas.map((area) => (
                        <p key={area.name}>
                            {area.name}: {area.score}%
                        </p>
                    ))}
                </div>
            )}

            {message && <p>{message}</p>}
        </div>
    );
};

export default Dashboard;