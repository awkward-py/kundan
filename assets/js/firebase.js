// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDPy_aJ-qE7JLKPJv7anY_MQjF_GkmQbo",
  authDomain: "kundans-e7467.firebaseapp.com",
  databaseURL: "https://kundans-e7467-default-rtdb.firebaseio.com",
  projectId: "kundans-e7467",
  storageBucket: "kundans-e7467.appspot.com",
  messagingSenderId: "623644006660",
  appId: "1:623644006660:web:ee3a644cb0d990804a5851",
  measurementId: "G-25YKWQ480D"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.querySelector('.reservation-form form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const phone = formData.get('phone');
  const person = formData.get('person');
  const reservationDate = formData.get('reservation-date');
  const reservationTime = formData.get('reservation-time');
  const message = formData.get('message');

  try {
    await push(ref(database, 'reservation'), {
      name,
      phone,
      person,
      reservationDate,
      reservationTime,
      message
    });
 
   document.getElementById('success-alert').classList.add('show');
   form.reset();

   setTimeout(() => {
     document.getElementById('success-alert').classList.remove('show');
   }, 4000);
 } catch (error) {

   document.getElementById('error-alert').classList.add('show');

   setTimeout(() => {
     document.getElementById('error-alert').classList.remove('show');
   }, 4000);
 }
});


