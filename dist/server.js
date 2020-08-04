"use strict";
// Reqd External Modules
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const filterFunction_1 = __importDefault(require("./func/filterFunction"));
// App Vars
// dotenv.config()
// if (!process.env.PORT) {
//   process.exit(1)
// }
// const PORT: number = parseInt(process.env.PORT as string, 10)
let PORT = process.env.PORT || 5000;
const app = express_1.default();
// App Config
// app.use(helmet())
// app.use(cors())
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Server Activation
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
app.listen(PORT, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
});
// Webpack Activation
//# sourceMappingURL=server.js.map