document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    const messageInput = document.getElementById('message');
    const messagesDiv = document.getElementById('messages');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (!message) return;

        fetch('post_feedback.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({message})
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                messageInput.value = '';
                loadMessages();
            } else {
                alert("'Erreur lors de l'envoi du message'");
            }
        });
    });

    function loadMessages() {
        fetch('get_feedbacks.php')
        .then(res => res.json())
        .then(messages => {
            messagesDiv.innerHTML = '';
            messages.forEach(msg => {
                const div = document.createElement('div');
                div.classList.add('message');
                div.innerHTML = `<strong>${new Date(msg.created_at).toLocaleString()}</strong><p>${msg.message}</p>`;
                messagesDiv.appendChild(div);
            });
        });
    }

    loadMessages();
});
