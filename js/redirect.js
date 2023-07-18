window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const encodedData = window.location.hash.substr(1);
      window.location.href = encodedData;
    }, 2000); // Wait for 2 seconds before executing the code inside the setTimeout callback
  });
  