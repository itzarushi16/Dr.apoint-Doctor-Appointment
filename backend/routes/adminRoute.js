import express from "express"
import { addDoctor,loginAdmin} from "../controllers/adminController.js"
import upload from "../middlerwares/multer.js"


const adminRouter =express.Router()
// call endpoint doctor
adminRouter.post('/add-doctor',upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)



export default adminRouter
