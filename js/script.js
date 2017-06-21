
/*
 *  Author: Alysia Petti
 *  Date: 2017-06-21
 *  Description: Simple stipend calculator that gives results of the number of assignments the 
 student is assigned to, how much stipend amount they're given per semester, the account distribution
  percentage based off of the stipend and annual rate.
 */

//fall semester stipend monthly rate
function FallSemesterRate(fallRate)
{
	if( fallRate >= 0 ){
		return fallRate / 4.5;
	} else {
		return alert("Invalid Amount");
	}
}

//spring semester stipend monthly rate
function SpringSemesterRate(springRate)
{
	if( springRate >= 0 ){
		return springRate / 4.5;
	} else {
		return alert("Invalid Amount");
	}
}

//summer semester stipend monthly rate
function SummerSemesterRate(summerRate){
	if( summerRate >= 0 ){
		return summerRate / 3;
	} else {
		return alert("Invalid Amount");
	}
}

// full time equivalence based on week
function FallSemesterAcctDist(fallRate, annualRt){
	return fallRate/annualRt;
		
}
// full time equivalence based on week
function SpringSemesterAcctDist(springRate, annualRt){
		return springRate/annualRt;
}
// full time equivalence based on week
function SummerSemesterAcctDist(summerRate, annualRt){
		return summerRate/annualRt;
}



//get values for each variable being called in the above functions
function getRates()
{
	var annualRt = document.getElementsByName("AnnualRate")[0].value;
	var fallAssignments = document.getElementsByName("FallAssignments")[0].value;
	var springAssignments = document.getElementsByName("SpringAssignments")[0].value;
	var summerAssignemnts = document.getElementsByName("SummerAssignments")[0].value;
	var fallRate = document.getElementsByName("FallRate")[0].value;
	var springRate = document.getElementsByName("SpringRate")[0].value;
	var summerRate = document.getElementsByName("SummerRate")[0].value;
	document.getElementsByName("TotalFallAssign")[0].value = fallAssignments;
	document.getElementsByName("TotalSpringAssign")[0].value = springAssignments;
	document.getElementsByName("TotalSummerAssign")[0].value = summerAssignemnts;
	document.getElementsByName("MonthlyFall")[0].value = FallSemesterRate(fallRate);
	document.getElementsByName("MonthlySpring")[0].value = SpringSemesterRate(springRate);
	document.getElementsByName("MonthlySummer")[0].value = SummerSemesterRate(summerRate);
	document.getElementsByName("FallAcctDist")[0].value = FallSemesterAcctDist(fallRate, annualRt)*100;
	document.getElementsByName("SpringAcctDist")[0].value = SpringSemesterAcctDist(springRate, annualRt)*100;
	document.getElementsByName("SummerAcctDist")[0].value = SummerSemesterAcctDist(summerRate, annualRt)*100;
}

//reset function for all values
function resetFields()
{
	document.getElementsByName("AnnualRate")[0].value = 0;
	document.getElementsByName("FallAssignments")[0].value = 0;
	document.getElementsByName("SpringAssignments")[0].value = 0;
	document.getElementsByName("SummerAssignments")[0].value = 0;
	document.getElementsByName("FallRate")[0].value = 0;
	document.getElementsByName("SpringRate")[0].value = 0;
	document.getElementsByName("SummerRate")[0].value = 0;
	document.getElementsByName("TotalFallAssign")[0].value = "";
	document.getElementsByName("TotalSpringAssign")[0].value = "";
	document.getElementsByName("TotalSummerAssign")[0].value = "";
	document.getElementsByName("MonthlyFall")[0].value = "";
	document.getElementsByName("MonthlySpring")[0].value = "";
	document.getElementsByName("MonthlySummer")[0].value = "";
	document.getElementsByName("FallAcctDist")[0].value = "";
	document.getElementsByName("SpringAcctDist")[0].value = "";
	document.getElementsByName("SummerAcctDist")[0].value = "";
}