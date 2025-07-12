function showForm() {
  document.getElementById("main-content").innerHTML = `
    <h2>Create Your Profile</h2>
    <input placeholder="Your Name" id="name"><br>
    <input placeholder="Location (optional)" id="location"><br>
    <input placeholder="Skills You Offer" id="offer"><br>
    <input placeholder="Skills You Want" id="want"><br>
    <label><input type="checkbox" id="weekends"> Available on weekends</label><br>
    <label><input type="checkbox" id="evenings"> Available in evenings</label><br>
    <label><input type="checkbox" id="public"> Make profile public</label><br>
    <button onclick="saveProfile()">Save</button>
  `;
}

function saveProfile() {
  const profile = {
    name: document.getElementById('name').value,
    location: document.getElementById('location').value,
    offer: document.getElementById('offer').value,
    want: document.getElementById('want').value,
    weekends: document.getElementById('weekends').checked,
    evenings: document.getElementById('evenings').checked,
    public: document.getElementById('public').checked
  };

  localStorage.setItem('myProfile', JSON.stringify(profile));
  alert("Profile saved!");
}

function showUsers() {
  const users = [
    { name: "Alice", offer: "Photoshop", want: "Cooking" },
    { name: "Bob", offer: "Excel", want: "Guitar" },
    { name: "Charlie", offer: "Guitar", want: "Excel" }
  ];

  let html = '<h2>Browse Users</h2>';
  users.forEach(user => {
    html += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <strong>${user.name}</strong><br>
        Offers: ${user.offer}<br>
        Wants: ${user.want}<br>
        <button onclick="alert('Swap request sent to ${user.name}!')">Request Swap</button>
      </div>
    `;
  });

  document.getElementById("main-content").innerHTML = html;
}