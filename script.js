/* Task 1 */

var heading = document.getElementById('heading');
console.log(heading.InnerText);
/* Task 2 using plain JavaScript */
//task 2a
var textBin= document.getElementById('textBin');
textBin.addEventListener('click', function(){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2.appendChild(paragraph);
});


/* Task 4 using jQuery */
