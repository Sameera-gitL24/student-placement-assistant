const User = require("../models/user");
const Role = require("../models/Role");

const analyzeSkillGap = async (req, res) => {
    try {
        const { targetRole } = req.body;

        if (!targetRole) {
            return res.status(400).json({
                message: "Target role is required"
            });
        }

        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const role = await Role.findOne({ roleName: targetRole });

        if (!role) {
            return res.status(404).json({
                message: "Target role not found"
            });
        }

        const studentSkills = user.skills.map(skill => skill.toLowerCase());

        const matchedSkills = role.requiredSkills.filter(skill =>
            studentSkills.includes(skill.toLowerCase())
        );

        const missingSkills = role.requiredSkills.filter(skill =>
            !studentSkills.includes(skill.toLowerCase())
        );

        const readinessPercentage = Math.round(
            (matchedSkills.length / role.requiredSkills.length) * 100
        );

        res.status(200).json({
            targetRole: role.roleName,
            requiredSkills: role.requiredSkills,
            matchedSkills,
            missingSkills,
            readinessPercentage
        });

    } catch (error) {
    console.log("Skill gap error:", error);
    
    res.status(500).json({
        message: "Failed to analyze skill gap",
        error: error.message
    });
    }
};

module.exports = {
    analyzeSkillGap
};