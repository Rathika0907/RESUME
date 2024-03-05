document.getElementById("saveResume").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var linkedin = document.getElementById("linkedin").value;
  var github = document.getElementById("github").value;
  var object = document.getElementById("object").value;
  var skill = document.getElementById("skill").value;
  var exp = document.getElementById("exp").value;

  var resumeData = {
    name: name,
    phone: phone,
    email: email,
    linkedin: linkedin,
    github: github,
    object: object,
    skill: skill,
    exp: exp,
  };

  var resumeDataJSON = JSON.stringify(resumeData);
  localStorage.setItem("resumeData", resumeDataJSON);
  alert("resume saved successfully to local storage");
});

document.getElementById("resetFields").addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("github").value = "";
  document.getElementById("object").value = "";
  document.getElementById("skill").value = "";
  document.getElementById("exp").value = "";
});

document.getElementById("printResume").addEventListener("click", () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));
  if (resumeData) {
    const print = window.open("", "_blank");

    
    print.document.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Printed Resume</title>
        <style>
          .resume-container {
            margin: auto;
            width: 50%;
            padding: 20px;
            background-color: #f2f2f2;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .resume-section {
            margin-bottom: 20px;
          }
          h2 {
            margin: 5px 0;
            font-weight: bold;
          }
          p {
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <h1 style="text-align: center;">Resume</h1>
          <div class="resume-section">
            <h2>Name: ${resumeData.name}</h2>
          </div>
          <div class="resume-section">
            <h2>Phone: ${resumeData.phone}</h2>
          </div>
          <div class="resume-section">
            <h2>Email: ${resumeData.email}</h2>
          </div>
          <div class="resume-section">
            <h2>LinkedIn: ${resumeData.linkedin}</h2>
          </div>
          <div class="resume-section">
            <h2>GitHub: ${resumeData.github}</h2>
          </div>
          <div class="resume-section">
            <h2>Qualifications: ${resumeData.object}</h2>
          </div>
          <div class="resume-section">
            <h2>Experience: ${resumeData.skill}</h2>
          </div>
          <div class="resume-section">
            <h2>Skills: ${resumeData.exp}</h2>
          </div>
        </div>
      </body>
      </html>
    `);

    print.document.close();
    print.focus();
  }
});
