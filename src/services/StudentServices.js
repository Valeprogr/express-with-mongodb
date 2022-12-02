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

}

export default new StudentServices();