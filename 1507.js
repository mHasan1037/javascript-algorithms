/*
Given a date string in the form Day Month Year, where:
Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
Year is in the range [1900, 2100].
Convert the date string to the format YYYY-MM-DD, where:
*/


var reformatDate = function(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     let slicedDate = date.split(' ').reverse()
 
     let newArr = []
 
     for(let i = 0; i < slicedDate.length; i++){
          if(i === 1){
             let month = months.indexOf(slicedDate[i]) + 1
             month = month < 10 ? '0' + month : month
             newArr.push(month)
          }else if(i === 2){
             let dayIs = slicedDate[i].slice(0, -2)
             dayIs = dayIs < 10 ? "0" + dayIs : dayIs
             newArr.push(dayIs)
          }else{
             newArr.push(slicedDate[i])
          }    
     }
 
     return newArr.join('-')
 };

 reformatDate("8th Jan 2052")