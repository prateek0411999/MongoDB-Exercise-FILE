const Student =require('../app/student');
const assert= require('assert');


describe("Read tests",()=>{
    //hmm iss read test krne se phele hi Reader naam ko bnda dalva rhe db m  
    //that's why we have used beforeEach 
    let reader;
     beforeEach((done)=>{
         reader=new Student({name: "Reader"});
         reader.save()
             .then(()=>{
                 done();
             });
     
     });
 
     it("Read a user from db: Reader",(done)=>{
         Student.find({name: "Reader"})
             .then((students)=>{
                 //now this student.find will return us with all the entries in db with name Readers as an array
                //so hmne jo Reader bheja abhi uski id aur students array m jo reader hoga uski id same honi chaiye 
                //but there's is one more thing 
                //_id ia a BSON value of type ObjectId so we need to convert this thing into string then match
 
                 assert(reader._id.toString() === students[0]._id.toString());
                 done();
             });
     });
 });