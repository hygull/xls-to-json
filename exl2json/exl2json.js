// var excel2json = require("excel-to-json");

// excel2json({
//   input: "./op",  // input directory  
//   output: "./op" // output directory  
//  }, function(err, result) {
//   if(err) {
//     console.log("Error")
//     console.error(err);
//   } else {
//     console.log("Success")
//     console.log(result);
//   }
// });

// var excel2Json = require('node-excel-to-json');
 
// // excel2Json('sample.xls', function(err, output) {
 
// // });
 
// excel2Json('./Details.xlsx', {
//     'convert_all_sheet': true,
//     'return_type': 'File',
// }, function(err, output) {
//  	if(err) {
//  		console.log("Error", err)
//  	} else {
//  		console.log("Success")
//  	}
// });

node_xj = require("xls-to-json");
  node_xj({
    input: "Details.xlsx",  // input xls 
    output: "output.json", // output json 
    sheet: "Sheet1"  // specific sheetname 
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });