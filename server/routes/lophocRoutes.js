import express from 'express';
import {
  homepage,
  getAllLopHoc,
  getLopHocById,
  createLopHoc,
  updateLopHoc,
  deleteLopHoc
} from '../controllers/lophocController.js';

const router = express.Router();

router.get('/', getAllLopHoc);
router.get('/:id', getLopHocById);
router.post('/', createLopHoc);
router.put('/:id', updateLopHoc);
router.delete('/:id', deleteLopHoc);

export default router;
