import { Router } from 'express';

import Park from '../models/Park';

const router = Router();

router.route('/info').get(getInfo);
router.route('/parks').get(getParks);
router.route('/park/add').post(createPark);
router.route('/park/:id').get(getParkById);

function getInfo(req, res) {
  res.status(200).json({
    message: 'GET INFO'
  });
}

// Get all parks
function getParks(req, res) {
  Park.find({}, function (err, parks_) {
    if (err) {
      res.status(500).json({
        error: err
      });
      throw err;
    }

    res.status(200).json({
      parks: parks_
    });
  })
}

function getParkById(req, res) {
  Park.findOne({_id: req.params.id}, function (err, parks_) {
    if (err) {
      res.status(500).json({
        error: err
      });
      throw err;
    }

    res.status(200).json({
      park: parks_
    });
  })
}

function createPark(req, res) {
  let park = new Park(req.body);

  park.save(function (err) {
    if (err) {
      res.status(500).json({
        error: err
      })
      throw err;
    }

    res.status(200).json({
      park: park
    });
  });
}



export default router;
