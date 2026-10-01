import { useState } from "react";
import { analyzeSkillGap } from "../services/api";
import Navbar from "../components/Navbar";
import SkillGapCard from "../components/SkillGapCard";

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
            <Navbar />

            <h1>Target Role Skill Gap Analyzer</h1>

            <div className="skill-gap-form">
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
            </div>

            {message && <p className="message">{message}</p>}

            {result && <SkillGapCard result={result} />}
        </div>
    );
};

export default SkillGap;