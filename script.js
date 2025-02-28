function showDetails(exercise) {
    const details = document.getElementById('details');
    let content = '';
  
    switch (exercise) {
      case 'bench-press':
        content = '<h2>Flat Bench Press</h2><p>4 sets x 6-10 reps (progressive overload)</p>';
        break;
      case 'incline-press':
        content = '<h2>Incline Dumbbell Press</h2><p>3 sets x 8-12 reps</p>';
        break;
      case 'weighted-dips':
        content = '<h2>Weighted Dips</h2><p>3 sets x 8-12 reps</p>';
        break;
      case 'cable-fly':
        content = '<h2>Cable Chest Fly</h2><p>3 sets x 12-15 reps</p>';
        break;
      case 'close-grip-bench':
        content = '<h2>Close-Grip Bench Press</h2><p>3 sets x 8-12 reps</p>';
        break;
      case 'triceps-extension':
        content = '<h2>Overhead Triceps Extension</h2><p>3 sets x 10-12 reps</p>';
        break;
      case 'pull-ups':
        content = '<h2>Pull-Ups</h2><p>4 sets x 8-12 reps</p>';
        break;
      case 'barbell-rows':
        content = '<h2>Barbell Rows</h2><p>4 sets x 8-10 reps</p>';
        break;
      case 'lat-pulldown':
        content = '<h2>Lat Pulldown</h2><p>3 sets x 10-12 reps</p>';
        break;
      case 'seated-cable-rows':
        content = '<h2>Seated Cable Rows</h2><p>3 sets x 12 reps</p>';
        break;
      case 'barbell-curls':
        content = '<h2>Barbell Bicep Curls</h2><p>3 sets x 8-10 reps</p>';
        break;
      case 'hammer-curls':
        content = '<h2>Hammer Curls</h2><p>3 sets x 10-12 reps</p>';
        break;
      case 'barbell-squats':
        content = '<h2>Barbell Squats</h2><p>4 sets x 6-10 reps</p>';
        break;
      case 'romanian-deadlifts':
        content = '<h2>Romanian Deadlifts</h2><p>3 sets x 8-10 reps</p>';
        break;
      case 'leg-press':
        content = '<h2>Leg Press</h2><p>3 sets x 10-12 reps</p>';
        break;
      case 'leg-curls':
        content = '<h2>Leg Curls</h2><p>3 sets x 12 reps</p>';
        break;
      case 'leg-extensions':
        content = '<h2>Leg Extensions</h2><p>3 sets x 12 reps</p>';
        break;
      case 'calf-raises':
        content = '<h2>Standing Calf Raises</h2><p>3 sets x 15 reps</p>';
        break;
      case 'overhead-press':
        content = '<h2>Overhead Shoulder Press</h2><p>4 sets x 8-12 reps</p>';
        break;
      case 'lateral-raises':
        content = '<h2>Lateral Raises</h2><p>3 sets x 12-15 reps</p>';
        break;
      case 'face-pulls':
        content = '<h2>Face Pulls</h2><p>3 sets x 12 reps</p>';
        break;
      case 'shrugs':
        content = '<h2>Shrugs</h2><p>3 sets x 12 reps</p>';
        break;
      case 'leg-raises':
        content = '<h2>Hanging Leg Raises</h2><p>3 sets x 15 reps</p>';
        break;
      case 'planks':
        content = '<h2>Planks</h2><p>3 sets x 60 seconds</p>';
        break;
      case 'deadlifts':
        content = '<h2>Deadlifts</h2><p>4 sets x 5-8 reps</p>';
        break;
      case 'front-squats':
        content = '<h2>Front Squats</h2><p>3 sets x 8 reps</p>';
        break;
      case 'dumbbell-snatches':
        content = '<h2>Dumbbell Snatches</h2><p>3 sets x 12 reps</p>';
        break;
      case 'farmers-walk':
        content = '<h2>Farmer’s Walk</h2><p>3 sets x 30 seconds</p>';
        break;
      case 'treadmill-sprints':
        content = '<h2>Treadmill Sprints</h2><p>10-15 minutes</p>';
        break;
    }
  
    details.innerHTML = content;
    details.scrollIntoView({ behavior: 'smooth' });
  }