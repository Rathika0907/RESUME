document.getElementById('saveResume').addEventListener('click', function() {
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var object = document.getElementById('object').value;
    var skill = document.getElementById('skill').value;
    var exp = document.getElementById('exp').value;

    var resumeData = {
      name: name,
      phone: phone,
      email: email,
      linkedin: linkedin,
      github: github,
      object: object,
      skill: skill,
      exp: exp
    };

    var resumeDataJSON = JSON.stringify(resumeData);
    localStorage.setItem('resumeData', resumeDataJSON);
    alert('resume saved successfully to local storage');
  });

  document.getElementById('resetFields').addEventListener('click', function() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('linkedin').value = '';
    document.getElementById('github').value = '';
    document.getElementById('object').value = '';
    document.getElementById('skill').value = '';
    document.getElementById('exp').value = '';
  });

  document.getElementById('printResume').addEventListener('click',()=>{
    const resumeData=JSON.parse(localStorage.getItem('resumeData'));
    if(resumeData)
    {
        const print=window.open('','_blank');
        print.document.write(`name${resumeData.name}`);
        print.document.write(`phone${resumeData.phone}`);
        print.document.write(`email${resumeData.email}`);
        print.document.write(`link${resumeData.linkedin}`);
        print.document.write(`github${resumeData.ghithub}`);
        print.document.write(`qualification${resumeData.objcet}`);
        print.document.write(`experience${resumeData.skill}`);
        print.document.write(`skills${resumeData.exp}`);
    }
});