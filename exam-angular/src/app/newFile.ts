const cors = require('cors');
import { app, corsConfig } from "./app.interceptor";

app.use(cors(corsConfig));
