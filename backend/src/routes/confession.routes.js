import express from 'express';

import {
    createConfession,
    getConfessions,
    reactToConfession,
} from '../controllers/confession.controller.js';


const router = express.Router();

router.post('/', createConfession);

router.get('/', getConfessions);

router.patch('/:id/react', reactToConfession);

export default router;