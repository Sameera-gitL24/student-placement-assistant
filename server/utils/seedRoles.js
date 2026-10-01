const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Role = require("../models/Role");

dotenv.config();

const roles = [
    {
        roleName: "Full Stack Developer",
        requiredSkills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB"
        ]
    },
    {
        roleName: "Data Scientist",
        requiredSkills: [
            "Python",
            "SQL",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "Statistics"
        ]
    },
    {
        roleName: "Java Developer",
        requiredSkills: [
            "Java",
            "OOP",
            "DSA",
            "SQL",
            "Spring Boot",
            "REST API"
        ]
    }
];

const seedRoles = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Role.deleteMany();
        await Role.insertMany(roles);

        console.log("Roles added successfully");

        await mongoose.connection.close();
    } catch (error) {
        console.log("Failed to add roles:", error.message);
    }
};

seedRoles();