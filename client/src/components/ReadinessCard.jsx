const ReadinessCard = ({ overallScore, focusAreas }) => {
    return (
        <div className="card">
            <h2>Placement Readiness</h2>

            <div className="score">
                {overallScore}%
            </div>

            <p>Overall readiness score</p>

            <h3>Focus Areas</h3>

            {focusAreas.length > 0 ? (
                focusAreas.map((area) => (
                    <div className="focus-item" key={area.name}>
                        <span>{area.name}</span>
                        <span>{area.score}%</span>
                    </div>
                ))
            ) : (
                <p>No focus areas available</p>
            )}
        </div>
    );
};

export default ReadinessCard;