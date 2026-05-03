const updateTime = () => {
    const el = document.getElementById('live-date-time');
    if (el) el.innerText = new Date().toLocaleString('en-GB').replace(/\//g, '-');
};

updateTime();
setInterval(updateTime, 1000);

// 2. Form Validation (Mandatory)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('.form-control').forEach(input => {
            if (!input.value.trim() || (input.type === 'email' && !input.value.includes('@'))) {
                input.classList.add('is-invalid');
                valid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        if (valid) {
            document.getElementById('form-success').style.display = 'block';
            form.reset();
        }
    });
}
