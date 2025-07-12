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

  let html = `
    <h2>Browse Users</h2>
    <input id="search" placeholder="Search by skill" oninput="filterUsers(this.value)">
    <div id="user-list"></div>
  `;

  document.getElementById("main-content").innerHTML = html;
  displayUserCards(users);
}

function filterUsers(skill) {
  const all = [
    { name: "Alice", offer: "Photoshop", want: "Cooking" },
    { name: "Bob", offer: "Excel", want: "Guitar" },
    { name: "Charlie", offer: "Guitar", want: "Excel" }
  ];

  const filtered = all.filter(user =>
    user.offer.toLowerCase().includes(skill.toLowerCase()) ||
    user.want.toLowerCase().includes(skill.toLowerCase())
  );

  displayUserCards(filtered);
}

function displayUserCards(users) {
  let list = '';
  users.forEach(user => {
    list += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <strong>${user.name}</strong><br>
        Offers: ${user.offer}<br>
        Wants: ${user.want}<br>
        <button onclick="sendRequest('${user.name}')">Request Swap</button>
      </div>
    `;
  });
  document.getElementById("user-list").innerHTML = list;
}


function showMyProfile() {
  const profile = JSON.parse(localStorage.getItem('myProfile'));

  if (!profile) {
    alert("No profile found. Please create one.");
    return showForm();
  }

  document.getElementById("main-content").innerHTML = `
    <h2>My Profile</h2>
    <p><strong>Name:</strong> ${profile.name}</p>
    <p><strong>Location:</strong> ${profile.location}</p>
    <p><strong>Skills Offered:</strong> ${profile.offer}</p>
    <p><strong>Skills Wanted:</strong> ${profile.want}</p>
    <p><strong>Availability:</strong> ${profile.weekends ? "Weekends" : ""} ${profile.evenings ? "Evenings" : ""}</p>
    <p><strong>Public Profile:</strong> ${profile.public ? "Yes" : "No"}</p>
    <button onclick="showForm()">Edit Profile</button>
  `;
}

function sendRequest(toUser) {
  const requests = JSON.parse(localStorage.getItem('swapRequests')) || [];
  requests.push({ to: toUser, status: "Pending" });
  localStorage.setItem('swapRequests', JSON.stringify(requests));
  alert("Request sent to " + toUser);
}

function showRequests() {
  const requests = JSON.parse(localStorage.getItem('swapRequests')) || [];

  let html = "<h2>My Swap Requests</h2>";
  if (requests.length === 0) {
    html += "<p>No requests yet.</p>";
  } else {
    requests.forEach(req => {
      html += `<p>To: ${req.to} — Status: ${req.status}</p>`;
    });
  }

  document.getElementById("main-content").innerHTML = html;
}