const exerciseDetails = {
  "bench-press": ["Flat Bench Press", "4 sets x 6-10 reps (progressive overload)"],
  "incline-press": ["Incline Dumbbell Press", "3 sets x 8-12 reps"],
  "weighted-dips": ["Weighted Dips", "3 sets x 8-12 reps"],
  "cable-fly": ["Cable Chest Fly", "3 sets x 12-15 reps"],
  "close-grip-bench": ["Close-Grip Bench Press", "3 sets x 8-12 reps"],
  "triceps-extension": ["Overhead Triceps Extension", "3 sets x 10-12 reps"],
  "pull-ups": ["Pull-Ups", "4 sets x 8-12 reps"],
  "barbell-rows": ["Barbell Rows", "4 sets x 8-10 reps"],
  "lat-pulldown": ["Lat Pulldown", "3 sets x 10-12 reps"],
  "seated-cable-rows": ["Seated Cable Rows", "3 sets x 12 reps"],
  "barbell-curls": ["Barbell Bicep Curls", "3 sets x 8-10 reps"],
  "hammer-curls": ["Hammer Curls", "3 sets x 10-12 reps"],
  "barbell-squats": ["Barbell Squats", "4 sets x 6-10 reps"],
  "romanian-deadlifts": ["Romanian Deadlifts", "3 sets x 8-10 reps"],
  "leg-press": ["Leg Press", "3 sets x 10-12 reps"],
  "leg-curls": ["Leg Curls", "3 sets x 12 reps"],
  "leg-extensions": ["Leg Extensions", "3 sets x 12 reps"],
  "calf-raises": ["Standing Calf Raises", "3 sets x 15 reps"],
  "overhead-press": ["Overhead Shoulder Press", "4 sets x 8-12 reps"],
  "lateral-raises": ["Lateral Raises", "3 sets x 12-15 reps"],
  "face-pulls": ["Face Pulls", "3 sets x 12 reps"],
  "shrugs": ["Shrugs", "3 sets x 12 reps"],
  "leg-raises": ["Hanging Leg Raises", "3 sets x 15 reps"],
  "planks": ["Planks", "3 sets x 60 seconds"],
  "deadlifts": ["Deadlifts", "4 sets x 5-8 reps"],
  "front-squats": ["Front Squats", "3 sets x 8 reps"],
  "dumbbell-snatches": ["Dumbbell Snatches", "3 sets x 12 reps"],
  "farmers-walk": ["Farmer’s Walk", "3 sets x 30 seconds"],
  "treadmill-sprints": ["Treadmill Sprints", "10-15 minutes"]
};

function showDetails(exercise) {
  const details = document.getElementById('details');

  if (exerciseDetails[exercise]) {
      const [title, sets] = exerciseDetails[exercise];
      details.innerHTML = `<h2>${title}</h2><p>${sets}</p>`;
      details.scrollIntoView({ behavior: 'smooth' });
  }
}

function completeExercise(event) {
  event.stopPropagation(); // Prevents triggering showDetails
  const card = event.target.parentElement;
  card.classList.add('completed');

  // Add tick mark ✅ and remove button
  event.target.remove();
  card.innerHTML += '<span class="tick-mark">✔</span>';

  checkAllCompleted();
}

function checkAllCompleted() {
  const totalExercises = document.querySelectorAll('.exercise-card').length;
  const completedExercises = document.querySelectorAll('.exercise-card.completed').length;

  if (totalExercises === completedExercises) {
      document.getElementById('success-message').style.display = 'flex';
  }
}

function resetWorkout() {
  document.querySelectorAll('.exercise-card').forEach(card => {
      card.classList.remove('completed');
      card.querySelector('.tick-mark')?.remove();
      card.innerHTML += `<button onclick="completeExercise(event)">Complete</button>`;
  });

  document.getElementById('success-message').style.display = 'none';
}
