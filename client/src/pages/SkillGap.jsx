import { useState } from "react";
import { analyzeSkillGap } from "../services/api";

const SkillGap = () => {
    const [targetRole, setTargetRole] = useState("Full Stack Developer");
    const [result, setResult] = useState(null);
    const [message, setMessage] = useState("");

    const handleAnalyze = async () => {
        try {
            const data = await analyzeSkillGap(targetRole);
            setResult(data);
            setMessage("");
        } catch (error) {
            setMessage(error.message);
            setResult(null);
        }
    };

    return (
        <div>
            <h1>Target Role Skill Gap Analyzer</h1>

            <label>Select Target Role</label>

            <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
            >
                <option value="Full Stack Developer">
                    Full Stack Developer
                </option>

                <option value="Data Scientist">
                    Data Scientist
                </option>

                <option value="Java Developer">
                    Java Developer
                </option>
            </select>

            <button onClick={handleAnalyze}>
                Analyze Skill Gap
            </button>

            {message && <p>{message}</p>}

            {result && (
                <div>
                    <h2>{result.targetRole}</h2>

                    <h3>
                        Skill Match: {result.readinessPercentage}%
                    </h3>

                    <h3>Matched Skills</h3>

                    {result.matchedSkills.map((skill) => (
                        <p key={skill}>✓ {skill}</p>
                    ))}

                    <h3>Missing Skills</h3>

                    {result.missingSkills.map((skill) => (
                        <p key={skill}>✗ {skill}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SkillGap;