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
const filterFunction_1 = __importDefault(require("../func/filterFunction"));
// App Vars
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = express_1.default();
// App Config
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Server Activation
app.get('/', (req, res) => {
    res.send('Base route - left for debugging');
});
app.post('/api/v1/wordfilter', (req, res) => {
    if (!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }
    const returnedValue = filterFunction_1.default(req.body.description);
    console.log('Endpoint Successfully Hit');
    return res.status(201).send({
        success: 'true',
        returnedValue
    });
});
app.listen(PORT, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
});
// Webpack Activation
//# sourceMappingURL=app.js.map