const name = 'Val';
const age = 25;
const city = 'London';
const job = 'architect';
let html;

//ES5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city+ '</li></ul';

console.log(html);
function hello() {
   return 'Hellooooo'
}

html = `
   <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2+2}</li>
      <li>${hello()}</li>
      <li>${age>30?'Over 30':'Under 30'}</li>
   </ul>
`
console.log(html);
document.body.innerHTML = html;
