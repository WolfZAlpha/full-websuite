"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/auth', auth_1.default);
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGO_URI, {
// Remove `useNewUrlParser` and `useUnifiedTopology` as they are now default
}) // Ensure type safety
    .then(function () { return app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); }); })
    .catch(function (error) { return console.log("".concat(error, " did not connect")); });
