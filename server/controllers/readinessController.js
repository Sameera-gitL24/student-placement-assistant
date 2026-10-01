const Readiness = require("../models/Readiness");
//const calculateReadiness = require("../utils/calculateReadiness");

const {
    calculateReadiness,
    getFocusAreas
} = require("../utils/calculateReadiness");
const createOrUpdateReadiness = async (req, res) => {
    try {
        const { dsa, coreCS, projects, resume, aptitude, communication } = req.body;

        if (
            dsa === undefined ||
            coreCS === undefined ||
            projects === undefined ||
            resume === undefined ||
            aptitude === undefined ||
            communication === undefined
        ) {
            return res.status(400).json({
                message: "All readiness fields are required"
            });
        }

        const scores = [dsa, coreCS, projects, resume, aptitude, communication];

        if (scores.some(score => typeof score !== "number" || score < 0 || score > 100)) {
            return res.status(400).json({
                message: "All scores must be numbers between 0 and 100"
            });
        }

        const overallScore = calculateReadiness({
            dsa,
            coreCS,
            projects,
            resume,
            aptitude,
            communication
        });

        const focusAreas = getFocusAreas({
    dsa,
    coreCS,
    projects,
    resume,
    aptitude,
    communication
});

        const readiness = await Readiness.findOneAndUpdate(
            { userId: req.userId },
            {
                userId: req.userId,
                dsa,
                coreCS,
                projects,
                resume,
                aptitude,
                communication
            },
            { new: true, upsert: true, runValidators: true }
        );

        res.status(200).json({
            message: "Placement readiness saved successfully",
            overallScore,
            focusAreas,
            readiness
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to save placement readiness",
            error: error.message
        });
    }
};

const getReadiness = async (req, res) => {
    try {
        const readiness = await Readiness.findOne({ userId: req.userId });

        if (!readiness) {
            return res.status(404).json({
                message: "Placement readiness not found"
            });
        }

      //  const overallScore = calculateReadiness(readiness);
const overallScore = calculateReadiness(readiness);
const focusAreas = getFocusAreas(readiness);
        res.status(200).json({
            overallScore,
            focusAreas,
            readiness
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to get placement readiness",
            error: error.message
        });
    }
};

module.exports = {
    createOrUpdateReadiness,
    getReadiness
};