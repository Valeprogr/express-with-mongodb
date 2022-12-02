import Student from "../models/Student.js";


class StudentServices {
    async create(student) {
    const createStudent = await Student.create(student);
    return createStudent
 }

 async getAll() {
    const student = await Student.find();
    return student
 }

 async getOne(id){
    if(!id){
        throw new Error("Id Missing")
    }
    const student = await Student.findById(id);
    return student
 }

 async update(student) {
    //qui mongoose controlla se il post ha 1 id che mongoose ha creato
    //creando il post
    if (!student._id) {
       throw new Error("Id missing!")
    }
    const updatedStudent = await Student.findByIdAndUpdate(student._id, student, { new: true });
    return updatedStudent
 }
}



export default new StudentServices();