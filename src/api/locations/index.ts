import { Router } from 'express';

import { create, list } from './nationWide.controller';

const router = Router();

router.post('/nationwide', create);
router.get('/nationwides', list);

export default router;
