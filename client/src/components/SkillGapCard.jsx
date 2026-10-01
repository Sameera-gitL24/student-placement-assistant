const SkillGapCard = ({ result }) => {
    return (
        <div className="card">
            <h2>{result.targetRole}</h2>

            <div className="score">
                {result.readinessPercentage}%
            </div>

            <p>Skill Match</p>

            <h3>Matched Skills</h3>

            {result.matchedSkills.length > 0 ? (
                result.matchedSkills.map((skill) => (
                    <div className="skill-item matched" key={skill}>
                        ✓ {skill}
                    </div>
                ))
            ) : (
                <p>No matching skills</p>
            )}

            <h3>Missing Skills</h3>

            {result.missingSkills.length > 0 ? (
                result.missingSkills.map((skill) => (
                    <div className="skill-item missing" key={skill}>
                        ✗ {skill}
                    </div>
                ))
            ) : (
                <p>No missing skills</p>
            )}
        </div>
    );
};

export default SkillGapCard;