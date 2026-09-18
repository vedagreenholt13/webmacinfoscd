
let totalSeconds = 300; // 5 minutes
let secondsElapsed = 0;
let scanned = 0;

function updateScan() {
  if (secondsElapsed >= totalSeconds) {
    document.getElementById("percent").innerText = "100%";
    document.getElementById("progress").style.width = "100%";
    document.getElementById("file").innerText = "Scan complete";
    return;
  }

  secondsElapsed++;

  // Calculate percentage
  let progressPercent = (secondsElapsed / totalSeconds) * 100;
  document.getElementById("progress").style.width = progressPercent + "%";
  document.getElementById("percent").innerText = Math.floor(progressPercent) + "%";

  // Update scanned objects
  scanned += Math.floor(Math.random() * 5) + 1;
  document.getElementById("scanned").innerText = scanned;

  // Fake file path
  document.getElementById("file").innerText =
    "C:/Program Files/data/Install.exe/file" + Math.floor(Math.random()*5000) + ".exe";

  // Duration display
  let hrs = String(Math.floor(secondsElapsed / 3600)).padStart(2, '0');
  let mins = String(Math.floor((secondsElapsed % 3600) / 60)).padStart(2, '0');
  let secs = String(secondsElapsed % 60).padStart(2, '0');
  document.getElementById("duration").innerText = `${hrs}:${mins}:${secs}`;

  setTimeout(updateScan, 1000); // update every second
}

// Start scan
updateScan();