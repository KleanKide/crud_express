"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json('Api is working');
});
app.use('/api/users', route_1.default);
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message || 'Internal server error',
    });
});
exports.default = app;
