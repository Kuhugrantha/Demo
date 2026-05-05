document.getElementById('greet-btn').addEventListener('click', () => {
    document.getElementById('output').textContent = `👋 
Kuhugrantha Private Limited (KGPL) is an Indian Private Limited Company incorporated on January 10, 2025, operating as an Information Technology and enterprise services provider. Based in Bhiwandi, Maharashtra, the company specializes in IT infrastructure services, talent acquisition, recruitment, and HR consultancy, boasting a bootstrapped and active status. ${new Date().getFullYear()}!`;
  });
  console.log('✅ Welcome page loaded successfully.');