

if (a == 0){
    if (b == 0) {
        if (c == 0) {document.getElementById('result').innerHTML="Phuong trinh vo so nghiem"} 
          else {document.getElementById('result').innerHTML="Phuong trinh vo nghiem"}
             } else {document.getElementById('result').innerHTML="Phuong trinh co nghiem duy nhat: " + (-c/b)} 
            }
else {
    if (delta > 0) {
         var x1 = (-b+sqrt(delta))/(2*a);
         var x2 = (-b-sqrt(delta))/(2*a);
         document.getElementById('result').innerHTML="Nghiem x1 = "+x1+ "/va Nghiem x2 = " +x2
    } else { 
        if (delta == 0) {
            var sum = -b/(2*a);
            document.getElementById('result').innerHTML="Nghiem kep: x1 = x2 =" +sum  
        } else {
            document.getElementById('result').innerHTML="Phuong trinh vo nghiem" 
        }
    }
}    