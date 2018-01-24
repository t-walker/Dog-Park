/**
 *
 * Example route for API
 *
 */

import { Router } from 'express';

const router = Router();

router.route('/info').get(getInfo);
router.route('/parks').get(getParks);

function getInfo(req, res) {
  res.status(200).json({
    message: 'GET INFO'
  });
}

function getParks(req, res) {
  res.status(200).json({
    message: 'Parks'
  });
}

export default router;
