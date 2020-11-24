
	const youbi = ["日","月","火","水","木","金","土"];

	const date1 = new Date();
	const date2 = date1.getFullYear() + "年" + 
				(date1.getMonth() + 1)  + "月" + 
				date1.getDate() + "日" + 
				date1.getHours() + "時" + 
				date1.getMinutes() + "分" + 
				date1.getSeconds() + "秒" + 
				date1.getMilliseconds() + "ミリ秒" + 
				youbi[date1.getDay()] + "曜日" // 0は日曜日～6は土曜日
	//alert(date2); 
	// 2020年2月1日20時55分36秒809ミリ秒土曜日

	const date3 = date1.getFullYear()  + 
				("00" + (date1.getMonth() + 1)).slice(-2)  + 
				("00" + (date1.getDate())).slice(-2); 
	alert(date2 + date3);  
	// 20200201
