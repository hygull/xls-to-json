# xls-to-json

Converting Excel files to json

# Steps

1) Create any folder somewhere in your system, eg. exl2json on Desktop

```
mkdir ~/Desktop/exl2json
```

2) cd inside that folder

```
cd ~/Desktop/exl2json/
```

3) Run the below command and accept defaults if you want

```
npm init
```

4) Install module by typing following command

```
npm install xls-to-json --save
```

5) Finally create one js file, eg. exl2json.js & paste the following code.

```javascript
/*
	{
		"createdOn": "14 Nov 2017",
	}
*/

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
```

#### Output - node exl2json.js 

```
MacBook-Pro-2:exl2json admin$ node exl2json.js 
MacBook-Pro-2:exl2json admin$ node exl2json.js 
[ { Technology: 'MongoDB', Name: 'Kislaya Pant', Age: '21' },
  { Technology: 'Node.js', Name: 'Rishikesh Agrawani', Age: '25' },
  { Technology: 'CBZ', Name: 'Hemkesh Agrawani', Age: '23' },
  { Technology: 'Angular 2', Name: 'Arindita Saha', Age: '21' },
  { Technology: 'DCA', Name: 'Malinikesh Agrawani', Age: '22' } ]
```
