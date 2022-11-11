import express from 'express';
import getAllByCollection from '../handlers/getAllByCollection';
import getById from '../handlers/getById';
import getByMode from '../handlers/getByMode';
import getByName from '../handlers/getByName';

const router = express.Router();

router.route('/collection/:value').get(getAllByCollection);
router.route('/id/:value').get(getById);
router.route('/name/:value').get(getByName);
router.route('/game-mode/:value').get(getByMode);

export default router;