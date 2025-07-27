const terminalContainer = document.getElementById('terminals');

const pingMessages = [
  "Reply from 74.125.128.106: bytes=32 time=20ms TTL=47",
  "Reply from 202.69.181.251: bytes=32 time=72ms TTL=56",
  "Reply from 8.8.8.8: bytes=32 time=15ms TTL=118",
  "Request timed out.",
  "Reply from 74.125.128.106: bytes=32 time=19ms TTL=47"
];

function createTerminal(id) {
  const terminal = document.createElement('div');
  terminal.className = 'terminal';
  terminal.style.top = Math.random() * 60 + '%';
  terminal.style.left = Math.random() * 60 + '%';

  const header = document.createElement('div');
  header.className = 'terminal-header';
  header.textContent = `hack0${id} - ping google.com -t`;

  const body = document.createElement('div');
  body.className = 'terminal-body';

  terminal.appendChild(header);
  terminal.appendChild(body);
  terminalContainer.appendChild(terminal);

  setInterval(() => {
    const msg = pingMessages[Math.floor(Math.random() * pingMessages.length)];
    body.textContent += msg + "\n";
    body.scrollTop = body.scrollHeight;
  }, 800);
}

// Buat 4 terminal
for (let i = 1; i <= 4; i++) {
  createTerminal(i);
}
