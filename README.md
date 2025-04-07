# 📨 Plateforme de Feedback Anonyme

Ce projet permet à un utilisateur de poster des messages anonymes à destination des RH ou admins d’une plateforme interne.

## ⚙️ Contenu du projet

- `docker-compose.yml` : orchestration des conteneurs
- `php/` : backend PHP avec API REST (post & get feedbacks)
- `nginx/` : configuration reverse proxy
- `mysql`, `redis`, `rabbitmq`, `worker` : services de base
- Interface HTML/CSS/JS : pour poster et lire les messages

## 📥 Cloner le projet depuis GitHub

Vous pouvez cloner ce projet directement depuis le dépôt Git :

```bash
git clone https://github.com/Unluckii9/anonyme_feedback.git
cd anonyme_feedback
```

> Assurez-vous d’avoir Docker et Make installés sur votre machine pour exécuter le projet.

---

## 🚀 Lancer le projet

```bash
make start
```

> 💡 Si `make` n’est pas reconnu, installe [Git Bash](https://gitforwindows.org) ou utilise WSL.

## ⛔️ Arrêter le projet

```bash
make stop
```

## 🔁 Relancer proprement

```bash
make restart
```

## 📄 Suivre les logs en direct

```bash
make logs
```

## 🌐 Accès

- Interface : [http://localhost](http://localhost)
- API GET : [http://localhost/get_feedbacks.php](http://localhost/get_feedbacks.php)
- API POST : [http://localhost/post_feedback.php](http://localhost/post_feedback.php)

## 🛠 Configuration de base

- BDD : `feedbackdb`
- Utilisateur : `user`
- Mot de passe : `password`

Le script `setup.sql` crée automatiquement la table `feedbacks` si elle n’existe pas lors du premier lancement.

## 📂 Arborescence du projet

```
docker_projet_feedback/
├── docker-compose.yml
├── Makefile
├── nginx/
│   └── default.conf
├── php/
│   ├── Dockerfile
│   └── src/
│       ├── config.php
│       ├── get_feedbacks.php
│       ├── post_feedback.php
│       ├── setup.sql
│       ├── worker.php
│       ├── index.html
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── main.js
```


---

**Projet réalisé avec Docker, PHP, MySQL et RabbitMQ.**
