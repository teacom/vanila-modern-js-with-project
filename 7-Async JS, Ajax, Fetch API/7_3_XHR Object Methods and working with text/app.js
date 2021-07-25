document.getElementById('button').addEventListener('click', loadData);

function loadData() {
   //Create an XHR object
   const xhr = new XMLHttpRequest();

   // OPEN
   xhr.open('GET', 'data.txt', true);
   // console.log('readystate', xhr.readyState);
   
   //Optional - used for spinners/ loaders
   xhr.onprogress = function () {
      console.log(xhr.readyState);
   }
   //! newer way
   xhr.onload = function () {
      console.log('readystate', xhr.readyState);
         if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
            }
         }
         //! olderWay
   //       xhr.onreadystatechange = function () {
   //          console.log('readystate', xhr.readyState);
   //          if (this.status === 200 && this.readyState ===4) {
   //             console.log(this.responseText);
   //          }
   // }

   xhr.onerror = function () {
      console.log('request error.... ');
   }
   xhr.send();

   // HTTP Statuses
   // 200: "OK"
   // 403: "Forbidden"
   // 404: "Not Found"

   // readyState Values
   // 0: request not initialized 
   // 1: server connection established
   // 2: request received 
   // 3: processing request 
   // 4: request finished and response is ready

}
