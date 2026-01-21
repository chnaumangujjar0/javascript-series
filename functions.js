//-------immedietly invoked function--------
/* sometimes, ja ham kisse website ko open karte ha to hamme database ke sath connection ki zaroorat hoti ha urgent data submission iss lia ya function use hota ye automatically page ke load hotte hi invoke ho jata or hamara easily save ho jata ha  */
//--iss ke end per colon lagana zaroori ha nahi to aggla iffe function run nahi hooga---

//----function with name--
(function iffe(){
    console.log("Mongo db connected")
})();
//----function without name------
(()=>{
    console.log("mongodb 2 connected")
})();
//-------function with parameters-----
((name)=>{
    console.log("mongodb 2 connected",name)
})("numan");