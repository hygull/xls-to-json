# xls-to-json

Converting Excel files to json

# Guide for windows users

1) You will need to follow your own approach as path separators will be different in your case

2) So after reading this guide, you just understand and run the commands on your windows system

3) Few of the examples for you(windows users)

```
mkdir C:\Users\Rishikesh\Dekstop\exl2json

cd C:\Users\Rishikesh\Dekstop\exl2json

``` 

Apart from that node related commands are same so you need not to worry, lets move on.

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

5) Create one js file, eg. exl2json.js & paste the following code.

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
        console.log(JSONresult);
    }
});
```

6) Make sure you are also having excel file in the same directory(exl2json), in my case it is **Details.xlsx**

7) Run the below command (you can also see the output of my terminal which is available after the command)

```
node exl2json.js
```

#### My present working directory on MAC

```
MacBook-Pro-2:exl2json admin$ pwd
/Users/admin/projects/Node/practice/xls-to-json/exl2json
```

#### Output - node exl2json.js 

```
MacBook-Pro-2:exl2json admin$ node exl2json.js 
[
     {
          "Technology": "MongoDB",
          "Name": "Kislaya Pant",
          "Age": "21"
     },
     {
          "Technology": "Node.js",
          "Name": "Rishikesh Agrawani",
          "Age": "25"
     },
     {
          "Technology": "CBZ",
          "Name": "Hemkesh Agrawani",
          "Age": "23"
     },
     {
          "Technology": "Angular 2",
          "Name": "Arindita Saha",
          "Age": "21"
     },
     {
          "Technology": "DCA",
          "Name": "Malinikesh Agrawani",
          "Age": "22"
     }
]
```
