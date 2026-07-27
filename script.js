const terminal = document.getElementById("terminal-text");

const lines = [
    "SYSTEM BOOTING...",
    "",
    "Loading modules...",
    "Checking security...",
    "Initializing AI...",
    "Connecting...",
    "",
    "Access Granted ✓",
    "",
    "Welcome..."
];

let line = 0;

function writeLine() {

    if (line >= lines.length) return;

    terminal.innerHTML += lines[line] + "\n";

    line++;

    setTimeout(writeLine, 700);

}

writeLine();
