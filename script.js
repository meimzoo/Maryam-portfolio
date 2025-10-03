// skills change color when clicked :)

var skillsBox = document.getElementById('SkillTags');
if (skillsBox) {
  skillsBox.addEventListener('click', function (e) {
    var btn = e.target;
    if (btn.classList.contains('tag')) {
      btn.classList.toggle('active');
    }
  });
}

//contact (copy email) button

var copyBtn = document.getElementById('copyEmail');
if (copyBtn) {
  copyBtn.addEventListener('click', function () {
    var emailSpan = document.getElementById('myEmail');
    if (!emailSpan) return;

    var emailText = emailSpan.innerText.replace(/\s+/g, '');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailText);
    }

    var old = document.getElementById('copiedNote');
    if (old) old.remove();

    var note = document.createElement('span');
    note.textContent = ' (copied) ';
    note.style.color = '#E0218A';
    note.style.marginLeft = '6px';
    copyBtn.after(note);
    
    setTimeout(function () {
      note.remove();
    }, 1400);
  });
}

// contact: form check + thanks message

var form = document.getElementById('contactForm');
if (form) {
  var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('emailInput');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var ok = true;

    if (!nameInput || nameInput.value.trim() === '') {
      ok = false;
      nameInput.classList.add('is-invalid');
    } else {
      nameInput.classList.remove('is-invalid');
    }

    if (!emailInput || !emailInput.checkValidity()) {
      ok = false;
      emailInput.classList.add('is-invalid');
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (ok) {
      var note = document.getElementById('formNote');
      if (!note) {
        note = document.createElement('div');
        note.id = 'formNote';
        note.className = 'alert alert-success mt-3';
        form.insertAdjacentElement('afterend', note);
      }

      note.innerHTML = 'Thanks, <strong>' + nameInput.value + "</strong>! I'll reply to <strong>" + emailInput.value + '</strong>.';
      form.reset();
      nameInput.classList.remove('is-invalid');
      emailInput.classList.remove('is-invalid');
    }
  });

  form.addEventListener('reset', function () {
      nameInput.classList.remove('is-invalid');
      emailInput.classList.remove('is-invalid');

      var note = document.getElementById('formNote');
      if (note) note.remove();
    });

  nameInput.addEventListener('input', function () {
    nameInput.classList.remove('is-invalid');
  });

  emailInput.addEventListener('input', function () {
    emailInput.classList.remove('is-invalid');
  });
}