const {allTesters} = require('../helpers/apiHelper');

it('should send status code 200 if testers fetched from db', () =>{
    allTesters();
})
