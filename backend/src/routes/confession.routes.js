import express from 'express';

import {
    createConfession,
} from '../controllers/confession.controller.js';


const router = express.Router();

router.post('/', createConfession);

export default router;