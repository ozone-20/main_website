function openChatbot() {
    document.getElementById("chatbotModal").style.display = "flex";
  }
  
  function closeChatbot() {
    document.getElementById("chatbotModal").style.display = "none";
  }
  
  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById("chatbotModal");
    if (event.target == modal) {
      modal.style.display = "none";
 }
 }