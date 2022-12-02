import StudentServices from "../services/StudentServices.js";

class StudentControllers{
async getAll(req,res){
    try{
        const students = await StudentServices.getAll();
        res.status(200).json(students);
    }catch(error){
    res.status(500).json(error)
    }
}

async create(req,res){
    try{
        const student = await StudentServices.create(req.body);
        res.status(201).json(student)
    }catch(error){
        res.status(500).json(error);
    }
}
}

export default new StudentControllers();