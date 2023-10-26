let gradePoint, totalQP = 0;
var GPA;


function grade (mark, ch){
    if (mark >= 80)
        gradePoint = 4.00;
    else if(mark >=75)
        gradePoint = 3.67;
    else if(mark >=70)
        gradePoint = 3.33;
    else if(mark >= 65)
        gradePoint = 3.00;
    else if(mark >= 60)
        gradePoint = 2.67;
    else if(mark >= 55)
        gradePoint = 2.33;
    else if(mark >= 50)
        gradePoint = 2.00;
    else
        gradePoint = 0;
    totalQP += gradePoint * ch;

}

function calculate(){
    let pcd = document.getElementById("pcd").value;
    let it = document.getElementById("it").value;
    let web = document.getElementById("web").value;
    let eng = document.getElementById("eng").value;
    let cal = document.getElementById("cal").value;
    let eti = document.getElementById("eti").value;

    grade(pcd, 4);
    grade(it, 3);
    grade(eng, 3);
    grade(cal, 3);
    grade(web, 3);
    grade(eti, 3);

    GPA = totalQP/19;
    const result = document.querySelector(".result");
    result.innerHTML = `GPA: ${GPA}`;
    result.classList.toggle("result");
    result.classList.toggle("displayResult");

}


