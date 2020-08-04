"use strict";
// Reqd External Modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const filterFunction_1 = __importDefault(require("./func/filterFunction"));
// App Vars
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express_1.default();
// App Config
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Server Activation
app.use('*', (req, res) => {
    res.send('<h1>Welcome to your simple server! Awesome right</h1>');
});
app.get('/', (req, res) => {
    res.send('Base route - left for debugging');
});
app.post('/api/v1/wordfilter', (req, res) => {
    console.log('Endpoint Successfully Hit' + req.body.description);
    if (!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }
    const returnedValue = filterFunction_1.default(req.body.description);
    return res.status(201).send({
        success: 'true',
        returnedValue
    });
});
app.listen(PORT, () => console.log(`hosting @${PORT}`));
// Webpack Activation
//# sourceMappingURL=app.js.map