function login() {
    const name = document.getElementById("username").value.trim();
    const role = document.getElementById("role").value;
  
    if (!name) {
      alert("Please enter your name.");
      return;
    }
  
    localStorage.setItem("username", name);
    localStorage.setItem("role", role);
  
    if (role === "Customer") {
      window.location.href = "index.html";
    } else if (role === "Admin") {
        window.location.href = "admin.html";
      // You can create and redirect to an admin.html if needed.
    }
  }
  