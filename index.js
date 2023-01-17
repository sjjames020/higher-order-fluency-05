
// Question 1
//reduce method
function averageAge (arrayOfObjs){
    let sum = arrayOfObjs.reduce((acc, obj) => acc + obj.age, 0)
    return Math.round(sum /arrayOfObjs.length);
}



// Question 2 
//sort method
function orderedAlumni (arrayOfObjs){
    let order = arrayOfObjs.sort((a, b) => b.age - a.age)
    return order
}

//Question 3
//every method
function allUseJavaScript(arrayOfObjs){
    let answer = arrayOfObjs.every((obj) => obj.language === 'JavaScript')
    return answer 
}

const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

console.log(averageAge(alumni)) 
console.log(orderedAlumni(alumni))
console.log(allUseJavaScript(alumni)) // returns true