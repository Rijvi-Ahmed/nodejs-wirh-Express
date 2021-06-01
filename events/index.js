//create class EventEmitter for events module
const EventEmitter = require("events");

const event = new EventEmitter();

//event diye ja korate chai
//always define before emit events
//ak event er dara multiple callbacks call

// event.on('saymyname', ()=>{
//     console.log('Rijvi Ahmed');
    
// });

// event.on('saymyname', ()=>{
//     console.log('akash');
    
// });

// event.on('saymyname', ()=>{
//     console.log('Rijvi akash');
    
// });

//create events saymyname
// event.emit('saymyname')



//register events with parameter
event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} & the page is ${msg}`);
    
})
event.emit('checkpage', 200,'ok')

