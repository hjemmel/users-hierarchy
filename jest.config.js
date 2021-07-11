module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["dotenv/config"],
    reporters: ["default", "jest-junit"],
};
