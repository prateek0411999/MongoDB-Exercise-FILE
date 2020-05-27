const Student = require('../app/student');
const assert = require('assert');
//assert always require us to pass true value 

describe('Create records',()=> {
    it('Create a user in DB', ()=>{
        //assert(true);
        const sam = new Student({name: "Sam"});
        //now this sam user is created but it's not yet saved in mongoDB

        //saving in mongo is superEz
        //sam.save();
        //now we'll do the testing 
        sam.save()
            .then(() =>{
                assert(!sam.isNew)
            })
            .catch(()=>{
                console.log("Error");

            })
    });
});
