score = parseInt(prompt('enter score'));
console.log(score);

if(score > 100 || score < 0 || isNaN(score)){
    alert('invalid score')
}
else if (score >= 90){
    alert('Grade is A')
}
else if (score >= 80){
    alert('Grade is B')
}
else if (score >= 70){
    alert('Grade is C')
}
else if (score >= 60){
    alert('Grade is D')
}
else{
    alert('Grade is F')
}

