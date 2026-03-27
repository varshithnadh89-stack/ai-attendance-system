const startCameraBtn = document.getElementById('start-camera');
const takeAttendanceBtn = document.getElementById('take-attendance');
const video = document.getElementById('camera');
const attendanceList = document.getElementById('attendance-list');

let stream;

// Start camera
startCameraBtn.addEventListener('click', async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert('Camera access denied or not available.');
    console.error(err);
  }
});

// Take attendance (simple log)
takeAttendanceBtn.addEventListener('click', () => {
  if (!stream) {
    alert('Start the camera first!');
    return;
  }
  const now = new Date();
  const time = now.toLocaleTimeString();
  const li = document.createElement('li');
  li.textContent = `Attendance marked at ${time}`;
  attendanceList.appendChild(li);
});
