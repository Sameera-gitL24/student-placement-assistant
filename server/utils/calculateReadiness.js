const calculateReadiness = (data) => {
    const scores = [
        data.dsa,
        data.coreCS,
        data.projects,
        data.resume,
        data.aptitude,
        data.communication
    ];

    const total = scores.reduce((sum, score) => sum + score, 0);
    return Math.round(total / scores.length);
};

const getFocusAreas = (data) => {
    const areas = [
        { name: "DSA", score: data.dsa },
        { name: "Core CS", score: data.coreCS },
        { name: "Projects", score: data.projects },
        { name: "Resume", score: data.resume },
        { name: "Aptitude", score: data.aptitude },
        { name: "Communication", score: data.communication }
    ];

    return areas
        .sort((a, b) => a.score - b.score)
        .slice(0, 2);
};

module.exports = { calculateReadiness, getFocusAreas };