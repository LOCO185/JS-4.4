function cat(n) {
    for (i = 1; i <= n; i++) {
  
      if (i % 7 === 0) {
        if (i.toString().includes('7')) {
  
          console.log('BOOM-BOOM');
        } else {
          console.log('BOOM');
        }
      } else {
        console.log(i);
      }
    }
  }
  cat(18);
  