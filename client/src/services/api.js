const API_URL = "http://localhost:5000/api";

const apiRequest = async (url, options = {}) => {
    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
};

export const registerUser = async (userData) => {
    return apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData)
    });
};

export const loginUser = async (userData) => {
    return apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(userData)
    });
};

export const saveReadiness = async (readinessData) => {
    const token = localStorage.getItem("token");

    return apiRequest("/readiness", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(readinessData)
    });
};

export const getReadiness = async () => {
    const token = localStorage.getItem("token");

    return apiRequest("/readiness", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const analyzeSkillGap = async (targetRole) => {
    const token = localStorage.getItem("token");

    return apiRequest("/skill-gap/analyze", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ targetRole })
    });
};