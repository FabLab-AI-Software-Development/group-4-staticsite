import React, { } from "react";

function Script() {
  
    async function sendPrompt() {
      const prompt = document.getElementById('prompt').value;
      const responseDiv = document.getElementById('response');

    const response = await fetch('/api/chat', {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
          },
    body: JSON.stringify({prompt: prompt })
      });

    const data = await response.json();
    responseDiv.innerText = data.message;
  }

}

function Chatty() {
  return (
  <>
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ChatGPT Web Interface</title>
  <div>
    <input type="text" id="prompt" placeholder="Ask ChatGPT something..." />
    <button onClick="sendPrompt()">Submit</button>
  </div>
  <div id="response" />
</div>

          </>
          );
}

export default Chatty;
