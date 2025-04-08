import express from 'express';

import {
    createConfession,
    getConfessions,
} from '../controllers/confession.controller.js';


const router = express.Router();

router.post('/', createConfession);

router.get('/', getConfessions);

export default router;