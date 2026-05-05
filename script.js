document.getElementById('greet-btn').addEventListener('click', () => {
    document.getElementById('output').textContent = `👋 Hello from ${new Date().getFullYear()}!`;
  });
  console.log('✅ Welcome page loaded successfully.');