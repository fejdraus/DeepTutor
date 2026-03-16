<div align="center">

<img src="../../assets/logo-ver2.png" alt="Логотип DeepTutor" width="150" style="border-radius: 15px;">

# DeepTutor: Персональний навчальний асистент на базі ШІ

[![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-AGPL--3.0-blue?style=flat-square)](../../LICENSE)

<p align="center">
  <a href="https://discord.gg/eRsjPgMU4t"><img src="https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  &nbsp;&nbsp;
  <a href="../../Communication.md"><img src="https://img.shields.io/badge/Feishu-Join_Group-00D4AA?style=for-the-badge&logo=feishu&logoColor=white" alt="Feishu"></a>
  &nbsp;&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/issues/78"><img src="https://img.shields.io/badge/WeChat-Join_Group-07C160?style=for-the-badge&logo=wechat&logoColor=white" alt="WeChat"></a>
</p>



[**Швидкий старт**](#-швидкий-старт) · [**Основні модулі**](#-основні-модулі) · [**Часті запитання**](#-часті-запитання)

[🇬🇧 English](../../README.md) · [🇨🇳 中文](README_CN.md) · [🇯🇵 日本語](README_JA.md) · [🇪🇸 Español](README_ES.md) · [🇫🇷 Français](README_FR.md) · [🇸🇦 العربية](README_AR.md) · [🇷🇺 Русский](README_RU.md) · [🇮🇳 हिन्दी](README_HI.md) · [🇵🇹 Português](README_PT.md)

</div>

<div align="center">

📚 **Запитання та відповіді на основі масивів документів** &nbsp;•&nbsp; 🎨 **Інтерактивна візуалізація навчання**<br>
🎯 **Закріплення знань** &nbsp;•&nbsp; 🔍 **Глибокі дослідження та генерація ідей**

</div>

---
### 📰 Новини

> **[2026.1.1]** З Новим роком! Приєднуйтесь до нашої [Discord-спільноти](https://discord.gg/eRsjPgMU4t), [WeChat-спільноти](https://github.com/HKUDS/DeepTutor/issues/78) або [Обговорень](https://github.com/HKUDS/DeepTutor/discussions) — формуйте майбутнє DeepTutor! 💬

> **[2025.12.30]** Відвідайте наш [офіційний сайт](https://hkuds.github.io/DeepTutor/) для отримання додаткової інформації!

> **[2025.12.29]** DeepTutor вже у мережі! ✨

### 📦 Релізи

> **[2026.1.23]** Реліз [v0.6.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.6.0) - Збереження сеансів інтерфейсу, повна підтримка китайської мови, оновлення розгортання Docker та виправлення незначних помилок -- Дякуємо всім за відгуки!

<details>
<summary>Історія релізів</summary>

> **[2026.1.18]** Реліз [v0.5.2](https://github.com/HKUDS/DeepTutor/releases/tag/v0.5.1) - Покращення конвеєра RAG з підтримкою Docling та вдосконалення робочих процесів CI/CD з виправленням кількох незначних помилок -- Дякуємо всім за відгуки!


> **[2026.1.15]** Реліз [v0.5.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.5.0) - Уніфіковані служби LLM та ембедингів, вибір конвеєра RAG та значні покращення модулів Home, History, QuestionGen та Settings -- Дякуємо всім учасникам!

> **[2026.1.9]** Реліз [v0.4.1](https://github.com/HKUDS/DeepTutor/releases/tag/v0.4.1) з повною переробкою системи провайдера LLM, покращенням надійності генерації запитань та очищенням кодової бази - Дякуємо всім учасникам!

> **[2026.1.9]** Реліз [v0.4.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.4.0) з новою структурою коду, підтримкою кількох llm та ембедингів - Дякуємо всім учасникам!

> **[2026.1.5]** [v0.3.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.3.0) - Уніфікована архітектура PromptManager, автоматизація CI/CD та попередньо зібрані образи Docker на GHCR

> **[2026.1.2]** [v0.2.0](https://github.com/HKUDS/DeepTutor/releases/tag/v0.2.0) - Розгортання Docker, оновлення до Next.js 16 та React 19, виправлення безпеки WebSocket та критичних вразливостей

</details>

---

## Ключові особливості DeepTutor

### 📚 Запитання та відповіді на основі масивів документів
• **Інтелектуальна база знань**: Завантажуйте підручники, наукові статті, технічні посібники та документи, специфічні для предметної області. Створюйте вичерпний репозиторій знань на основі ШІ для миттєвого доступу.<br>
• **Розв'язання задач з кількома агентами**: Двоконтурна архітектура міркувань з RAG, веб-пошуком та виконанням коду — надання покрокових рішень з точними цитатами.

### 🎨 Інтерактивна візуалізація навчання
• **Спрощення знань та пояснення**: Перетворення складних концепцій, знань та алгоритмів на зрозумілі візуальні посібники, детальні покрокові розбори та захопливі інтерактивні демонстрації.<br>
• **Персоналізоване опитування**: Контекстно-залежні розмови, що адаптуються до вашого прогресу в навчанні, з інтерактивними сторінками та відстеженням знань на основі сеансів.

### 🎯 Закріплення знань за допомогою генератора практичних завдань
• **Інтелектуальне створення вправ**: Генерація цільових вікторин, практичних завдань та налаштовуваних оцінок, адаптованих до вашого поточного рівня знань та конкретних навчальних цілей.<br>
• **Імітація справжнього іспиту**: Завантажте контрольні іспити для генерації практичних запитань, що ідеально відповідають оригінальному стилю, формату та складності — забезпечуючи реалістичну підготовку до реального тесту.

### 🔍 Глибокі дослідження та генерація ідей
• **Комплексні дослідження та огляд літератури**: Проведення глибокого вивчення тем з систематичним аналізом. Виявлення закономірностей, з'єднання пов'язаних концепцій у різних дисциплінах та синтез існуючих дослідницьких знахідок.<br>
• **Відкриття нових ідей**: Генерація структурованих навчальних матеріалів та виявлення прогалин у знаннях. Визначення перспективних нових напрямків досліджень через інтелектуальний синтез знань між доменами.

---

<div align="center">
  <img src="../../assets/figs/title_gradient.svg" alt="Все-в-одному система навчання" width="70%">
</div>

<!-- ━━━━━━━━━━━━━━━━ Основний навчальний досвід ━━━━━━━━━━━━━━━━ -->

<table>
<tr>
<td width="50%" align="center" valign="top">

<h3>📚 Запитання та відповіді на основі масивів документів</h3>
<a href="#problem-solving-agent">
<img src="../../assets/gifs/solve.gif" width="100%">
</a>
<br>
<sub>Мультиагентне розв'язання задач з точними цитатами</sub>

</td>
<td width="50%" align="center" valign="top">

<h3>🎨 Інтерактивна візуалізація навчання</h3>
<a href="#guided-learning">
<img src="../../assets/gifs/guided-learning.gif" width="100%">
</a>
<br>
<sub>Покрокові візуальні пояснення з персональними запитаннями</sub>

</td>
</tr>
</table>

<!-- ━━━━━━━━━━━━━━━━ Практика та закріплення ━━━━━━━━━━━━━━━━ -->

<h3 align="center">🎯 Закріплення знань</h3>

<table>
<tr>
<td width="50%" valign="top" align="center">

<a href="#question-generator">
<img src="../../assets/gifs/question-1.gif" width="100%">
</a>

**Користувацькі запитання**
<sub>Генерація практичних запитань з автоматичною перевіркою</sub>

</td>
<td width="50%" valign="top" align="center">

<a href="#question-generator">
<img src="../../assets/gifs/question-2.gif" width="100%">
</a>

**Імітаційні запитання**
<sub>Клонування стилю іспиту для справжньої практики</sub>

</td>
</tr>
</table>

<!-- ━━━━━━━━━━━━━━━━ Дослідження та створення ━━━━━━━━━━━━━━━━ -->

<h3 align="center">🔍 Глибокі дослідження та генерація ідей</h3>

<table>
<tr>
<td width="33%" align="center">

<a href="#deep-research">
<img src="../../assets/gifs/deepresearch.gif" width="100%">
</a>

**Глибокі дослідження**
<sub>Розширення знань з підручника за допомогою RAG, веб- та пошуку статей</sub>

</td>
<td width="33%" align="center">

<a href="#idea-generation">
<img src="../../assets/gifs/ideagen.gif" width="100%">
</a>

**Автоматизована генерація ідей**
<sub>Систематичний мозковий штурм та синтез концепцій з двофазним робочим процесом</sub>

</td>
<td width="33%" align="center">

<a href="#co-writer">
<img src="../../assets/gifs/co-writer.gif" width="100%">
</a>

**Інтерактивна генерація ідей**
<sub>Спільне написання текстів на основі RAG та веб-пошуку з генерацією подкастів</sub>

</td>
</tr>
</table>

<!-- ━━━━━━━━━━━━━━━━ Інфраструктура знань ━━━━━━━━━━━━━━━━ -->

<h3 align="center">🏗️ Все-в-одному система знань</h3>

<table>
<tr>
<td width="50%" align="center">

<a href="#dashboard--knowledge-base-management">
<img src="../../assets/gifs/knowledge_bases.png" width="100%">
</a>

**Персональна база знань**
<sub>Створення та організація власного репозиторію знань</sub>

</td>
<td width="50%" align="center">

<a href="#notebook">
<img src="../../assets/gifs/notebooks.png" width="100%">
</a>

**Персональний блокнот**
<sub>Ваша контекстна пам'ять для навчальних сеансів</sub>

</td>
</tr>
</table>

<p align="center">
  <sub>🌙 Використовуйте DeepTutor у <b>темному режимі</b>!</sub>
</p>

---

## 🏛️ Фреймворк DeepTutor

<div align="center">
<img src="../../assets/figs/full-pipe.png" alt="Робочий процес DeepTutor Full-Stack" width="100%">
</div>

### 💬 Рівень користувацького інтерфейсу
• **Інтуїтивна взаємодія**: Простий двонаправлений потік запитів-відповідей для інтуїтивної взаємодії.<br>
• **Структурований вивід**: Генерація структурованих відповідей, що організують складну інформацію у дії.

### 🤖 Модулі інтелектуальних агентів
• **Розв'язання задач та оцінювання**: Покрокове розв'язання задач та генерація налаштовуваних оцінок.<br>
• **Дослідження та навчання**: Глибокі дослідження для вивчення тем та керівництво навчанням з візуалізацією.<br>
• **Генерація ідей**: Автоматизоване та інтерактивне розвинення концепцій з інсайтами з кількох джерел.

### 🔧 Рівень інтеграції інструментів
• **Пошук інформації**: Гібридне вилучення RAG, пошук у реальному часі та бази даних наукових статей.<br>
• **Обробка та аналіз**: Виконання коду Python, пошук елементів запиту та аналіз документів у форматі PDF.

### 🧠 Основа знань та пам'яті
• **Граф знань**: Зіставлення сутностей та зв'язків для семантичних з'єднань та відкриття знань.<br>
• **Векторне сховище**: Пошук на основі ембедингів для інтелектуального вилучення контенту.<br>
• **Система пам'яті**: Управління станом сеансу та відстеження цитат для контекстної безперервності.

## 📋 Майбутні завдання
> 🌟 Поставте зірку, щоб стежити за нашими майбутніми оновленнями!
- [x] Підтримка багатомовності
- [x] Спільнота DeepTutor
- [x] Підтримка відео- та аудіофайлів
- [x] Налаштування атомарного конвеєра RAG
- [ ] Покрокове редагування бази знань
- [ ] Персоналізований робочий простір
- [ ] Візуалізація бази даних
- [ ] Онлайн-демонстрація

## 🚀 Швидкий старт

### Крок 1: Попереднє налаштування

**① Клонування репозиторію**

```bash
git clone https://github.com/HKUDS/DeepTutor.git
cd DeepTutor
```

**② Налаштування змінних оточення**

```bash
cp .env.example .env
# Відредагуйте файл .env з вашими API-ключами
```

<details>
<summary>📋 <b>Довідник змінних оточення</b></summary>

| Змінна | Обов'язково | Опис |
|:---|:---:|:---|
| `LLM_MODEL` | **Так** | Назва моделі (наприклад: `gpt-4o`) |
| `LLM_API_VERSION` | Ні | Версія API для Azure OpenAI (наприклад: `2024-02-15-preview`) |
| `LLM_API_KEY` | **Так** | Ваш API-ключ LLM |
| `LLM_HOST` | **Так** | URL кінцевої точки API |
| `EMBEDDING_MODEL` | **Так** | Назва моделі ембедингу |
| `EMBEDDING_API_VERSION` | Ні | Версія API для Azure OpenAI Embeddings |
| `EMBEDDING_API_KEY` | **Так** | API-ключ ембедингу |
| `EMBEDDING_HOST` | **Так** | Кінцева точка API ембедингу |
| `BACKEND_PORT` | Ні | Порт backend (за замовчуванням: `8001`) |
| `FRONTEND_PORT` | Ні | Порт frontend (за замовчуванням: `3782`) |
| `NEXT_PUBLIC_API_BASE` | Ні | **URL API для фронтенду** — встановіть для віддаленого/LAN-доступу (наприклад: `http://192.168.1.100:8001`) |
| `TTS_*` | Ні | Налаштування синтезу мовлення |
| `SEARCH_PROVIDER` | Ні | Провайдер пошуку (варіанти: `perplexity`, `tavily`, `serper`, `jina`, `exa`, `baidu`, за замовчуванням: `perplexity`) |
| `SEARCH_API_KEY` | Ні | Єдиний API-ключ для пошуку |

> 💡 **Віддалений доступ**: якщо ви заходите з іншого пристрою (наприклад: `192.168.31.66:3782`), додайте до `.env`:
> ```bash
> NEXT_PUBLIC_API_BASE=http://192.168.31.66:8001
> ```

</details>

**③ Налаштувати порти та LLM** *(Необов'язково)*

- **Порти**: Налаштуйте у `.env` → `BACKEND_PORT` / `FRONTEND_PORT` (за замовчуванням: 8001/3782)
- **LLM**: Відредагуйте `config/agents.yaml` → `temperature` / `max_tokens` для кожного модуля
- Див. [Документацію з конфігурації](../../config/README.md) для деталей

**④ Спробувати демо бази знань** *(Необов'язково)*

<details>
<summary>📚 <b>Доступні демо</b></summary>

- **Дослідницькі статті** — 5 статей з нашої лабораторії ([AI-Researcher](https://github.com/HKUDS/AI-Researcher), [LightRAG](https://github.com/HKUDS/LightRAG) тощо)
- **Підручник з науки про дані** — 8 розділів, 296 сторінок ([Посилання на книгу](https://ma-lab-berkeley.github.io/deep-representation-learning-book/))

</details>

1. Завантажити з [Google Drive](https://drive.google.com/drive/folders/1iWwfZXiTuQKQqUYb5fGDZjLCeTUP6DA6?usp=sharing)
2. Розпакувати в каталог `data/`

> Демо БЗ використовують `text-embedding-3-large` з `dimensions = 3072`

**⑤ Створити власну базу знань** *(Після запуску)*

1. Перейдіть на http://localhost:3782/knowledge
2. Натисніть "New Knowledge Base" → Введіть назву → Завантажте файли PDF/TXT/MD
3. Стежте за прогресом у терміналі

---

### Крок 2: Оберіть метод встановлення

#### 🐳 Варіант A: Встановлення через Docker

> Встановлення Python/Node.js не потрібне

**Вимоги**: [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/)

**Швидкий старт** — Збірка з вихідного коду:

```bash
docker compose up                  # Збірка та запуск (~11 хв при першому запуску на mac mini M4)
docker compose build --no-cache    # Очищення кешу та перезбірка після оновлення репозиторію
```

**Або використати попередньо зібраний образ** (швидше):

```bash
# Працює на всіх платформах — Docker автоматично визначає архітектуру
docker run -d --name deeptutor \
  -p 8001:8001 -p 3782:3782 \
  --env-file .env \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/config:/app/config:ro \
  ghcr.io/hkuds/deeptutor:latest

# Windows PowerShell: використовуйте ${PWD} замість $(pwd)
```

**Загальні команди**:

```bash
docker compose up -d      # Запуск
docker compose down       # Зупинка
docker compose logs -f    # Перегляд логів
docker compose up --build # Перезбірка після змін
```

<details>
<summary>📋 <b>Додаткові параметри Docker</b> (попередньо зібрані образи, хмарне встановлення, користувацькі порти)</summary>

**Теги попередньо зібраних образів:**

| Тег | Архітектури | Опис |
|:----|:--------------|:------------|
| `:latest` | AMD64 + ARM64 | Останній стабільний випуск (автовизначення архітектури) |
| `:v0.5.x` | AMD64 + ARM64 | Конкретна версія (автовизначення архітектури) |
| `:v0.5.x-amd64` | Тільки AMD64 | Явний образ AMD64 |
| `:v0.5.x-arm64` | Тільки ARM64 | Явний образ ARM64 |

> 💡 Тег `:latest` є **мультиархітектурним образом** — Docker автоматично завантажує правильну версію для вашої системи (Intel/AMD або Apple Silicon/ARM)

**Хмарне встановлення** — Необхідно встановити зовнішню URL-адресу API:

```bash
docker run -d --name deeptutor \
  -p 8001:8001 -p 3782:3782 \
  -e NEXT_PUBLIC_API_BASE_EXTERNAL=https://your-server.com:8001 \
  --env-file .env \
  -v $(pwd)/data:/app/data \
  ghcr.io/hkuds/deeptutor:latest
```

**Приклад користувацьких портів:**

```bash
docker run -d --name deeptutor \
  -p 9001:9001 -p 3000:3000 \
  -e BACKEND_PORT=9001 \
  -e FRONTEND_PORT=3000 \
  -e NEXT_PUBLIC_API_BASE_EXTERNAL=https://your-server.com:9001 \
  --env-file .env \
  -v $(pwd)/data:/app/data \
  ghcr.io/hkuds/deeptutor:latest
```

</details>

---

#### 💻 Варіант B: Ручне встановлення

> Для розробки або середовищ без Docker

**Вимоги**: Python 3.10+, Node.js 18+

**1. Налаштування оточення**:

```bash
# Використання conda (Рекомендовано)
conda create -n deeptutor python=3.10 && conda activate deeptutor

# Або використання venv
python -m venv venv && source venv/bin/activate  # Windows: venv\Scripts\activate
```

**2. Встановлення залежностей**:

```bash
# Встановлення в один клік (Рекомендовано)
python scripts/install_all.py
# Або: bash scripts/install_all.sh

# Або ручне встановлення
pip install -r requirements.txt
npm install --prefix web
```

**3. Запуск**:

```bash
python scripts/start_web.py    # Запуск інтерфейсу та бекенду
# Або: python scripts/start.py  # Тільки CLI
# Зупинка: Ctrl+C
```

<details>
<summary>🔧 <b>Запуск інтерфейсу та бекенду окремо</b></summary>

**Бекенд** (FastAPI):
```bash
python src/api/run_server.py
# Або: uvicorn src.api.main:app --host 0.0.0.0 --port 8001 --reload
```

**Інтерфейс** (Next.js):
```bash
cd web && npm install && npm run dev -- -p 3782
```

**Примітка**: Створіть `web/.env.local`:
```bash
NEXT_PUBLIC_API_BASE=http://localhost:8001
```

| Сервіс | Порт за замовчуванням |
|:---:|:---:|
| Бекенд | `8001` |
| Інтерфейс | `3782` |

</details>

### URL-адреси доступу

| Сервіс | URL | Опис |
|:---:|:---|:---|
| **Frontend** | http://localhost:3782 | Основний веб-інтерфейс |
| **Документація API** | http://localhost:8001/docs | Інтерактивна документація API |

---

## 📂 Зберігання даних

Усі користувацькі дані та системні дані зберігаються в каталозі `data/`:

```
data/
├── knowledge_bases/              # Сховище бази знань
└── user/                         # Дані користувацької активності
    ├── solve/                    # Результати розв'язання задач та артефакти
    ├── question/                 # Згенеровані запитання
    ├── research/                 # Звіти про дослідження та кеш
    ├── co-writer/                # Інтерактивні документи IdeaGen та аудіофайли
    ├── notebook/                 # Записи блокнотів та метадані
    ├── guide/                    # Сеанси керівництва навчанням
    ├── logs/                     # Системні логи
    └── run_code_workspace/       # Робочий простір виконання коду
```

Результати автоматично зберігаються під час усіх дій. Каталоги створюються автоматично за потребою.

## 📦 Основні модулі

<details>
<summary><b>🧠 Розумний розв'язувач</b></summary>

<details>
<summary><b>Діаграма архітектури</b></summary>

![Архітектура розумного розв'язувача](../../assets/figs/solve.png)

</details>

> **Інтелектуальна система розв'язання задач** на основі двоконтурної архітектури **Аналіз + Розв'язання**, що підтримує багаторежимні міркування та динамічне вилучення знань.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| Двоконтурна архітектура | **Контур аналізу**: InvestigateAgent → NoteAgent<br>**Контур розв'язання**: PlanAgent → ManagerAgent → SolveAgent → CheckAgent → Format |
| Спільна робота кількох агентів | Спеціалізовані агенти: InvestigateAgent, NoteAgent, PlanAgent, ManagerAgent, SolveAgent, CheckAgent |
| Потокова передача в реальному часі | Передача через WebSocket з відображенням процесу міркувань у реальному часі |
| Інтеграція інструментів | RAG (наївний/гібридний), веб-пошук, елемент запиту, виконання коду |
| Постійна пам'ять | Файли пам'яті на основі JSON для збереження контексту |
| Управління цитуванням | Структуровані цитати з відстеженням посилань |

**Використання**

1. Перейдіть на http://localhost:{frontend_port}/solver
2. Оберіть базу знань
3. Введіть своє запитання, натисніть "Solve"
4. Спостерігайте за процесом міркувань у реальному часі та остаточною відповіддю

<details>
<summary><b>Python API</b></summary>

```python
import asyncio
from src.agents.solve import MainSolver

async def main():
    solver = MainSolver(kb_name="ai_textbook")
    result = await solver.solve(
        question="Calculate the linear convolution of x=[1,2,3] and h=[4,5]",
        mode="auto"
    )
    print(result['formatted_solution'])

asyncio.run(main())
```

</details>

<details>
<summary><b>Місцезнаходження виводу</b></summary>

```
data/user/solve/solve_YYYYMMDD_HHMMSS/
├── investigate_memory.json    # Пам'ять контуру аналізу
├── solve_chain.json           # Кроки контуру розв'язання та записи інструментів
├── citation_memory.json       # Управління цитуванням
├── final_answer.md            # Остаточне рішення (Markdown)
├── performance_report.json    # Моніторинг продуктивності
└── artifacts/                 # Вивід виконання коду
```

</details>

</details>

---

<details>
<summary><b>📝 Генератор запитань</b></summary>

<details>
<summary><b>Діаграма архітектури</b></summary>

![Архітектура генератора запитань](../../assets/figs/question-gen.png)

</details>

> **Система генерації запитань у двох режимах**, що підтримує **користувацьку генерацію на основі знань** та **імітацію еталонних екзаменаційних робіт** з автоматичною перевіркою.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| Користувацький режим | **Фонові знання** → **Планування запитань** → **Генерація** → **Одноразова перевірка**<br>Аналізує релевантність запитань без логіки відхилення |
| Режим імітації | **Завантаження PDF** → **Парсинг MinerU** → **Вилучення запитань** → **Імітація стилю**<br>Генерує запитання на основі структури еталонного іспиту |
| Двигун ReAct | QuestionGenerationAgent з автономним прийняттям рішень (think → act → observe) |
| Аналіз перевірки | Одноразовий аналіз релевантності з `kb_coverage` та `extension_points` |
| Типи запитань | Множинний вибір, заповнення пропусків, обчислення, письмова відповідь тощо |
| Пакетна генерація | Паралельна обробка з відстеженням прогресу |
| Повна персистентність | Усі проміжні файли збережені (фонові знання, план, індивідуальні результати) |
| Вивід з мітками часу | Режим імітації створює пакетні папки: `mimic_YYYYMMDD_HHMMSS_{pdf_name}/` |

**Використання**

**Користувацький режим:**
1. Перейдіть на http://localhost:{frontend_port}/question
2. Заповніть вимоги (тема, складність, тип запитання, кількість)
3. Натисніть "Generate Questions"
4. Перегляньте згенеровані запитання зі звітами перевірки

**Режим імітації:**
1. Перейдіть на http://localhost:{frontend_port}/question
2. Переключіться на вкладку "Mimic Exam"
3. Завантажте PDF або вкажіть каталог розібраного іспиту
4. Зачекайте на розбір → вилучення → генерацію
5. Перегляньте згенеровані запитання поряд з оригінальними посиланнями

<details>
<summary><b>Python API</b></summary>

**Користувацький режим - Повний конвеєр:**
```python
import asyncio
from src.agents.question import AgentCoordinator

async def main():
    coordinator = AgentCoordinator(
        kb_name="ai_textbook",
        output_dir="data/user/question"
    )

    # Генерація кількох запитань з текстової вимоги
    result = await coordinator.generate_questions_custom(
        requirement_text="Generate 3 medium-difficulty questions about deep learning basics",
        difficulty="medium",
        question_type="choice",
        count=3
    )

    print(f"✅ Generated {result['completed']}/{result['requested']} questions")
    for q in result['results']:
        print(f"- Relevance: {q['validation']['relevance']}")

asyncio.run(main())
```

**Режим імітації - Завантаження PDF:**
```python
from src.agents.question.tools.exam_mimic import mimic_exam_questions

result = await mimic_exam_questions(
    pdf_path="exams/midterm.pdf",
    kb_name="calculus",
    output_dir="data/user/question/mimic_papers",
    max_questions=5
)

print(f"✅ Generated {result['successful_generations']} questions")
print(f"Output: {result['output_file']}")
```

</details>

<details>
<summary><b>Місцезнаходження виводу</b></summary>

**Користувацький режим:**
```
data/user/question/custom_YYYYMMDD_HHMMSS/
├── background_knowledge.json      # Результати вилучення RAG
├── question_plan.json              # Планування запитань
├── question_1_result.json          # Індивідуальні результати запитань
├── question_2_result.json
└── ...
```

**Режим імітації:**
```
data/user/question/mimic_papers/
└── mimic_YYYYMMDD_HHMMSS_{pdf_name}/
    ├── {pdf_name}.pdf                              # Оригінальний PDF
    ├── auto/{pdf_name}.md                          # Розібраний markdown MinerU
    ├── {pdf_name}_YYYYMMDD_HHMMSS_questions.json  # Вилучені запитання
    └── {pdf_name}_YYYYMMDD_HHMMSS_generated_questions.json  # Згенеровані запитання
```

</details>

</details>

---

<details>
<summary><b>🎓 Керівництво навчанням</b></summary>

<details>
<summary><b>Діаграма архітектури</b></summary>

![Архітектура керівництва навчанням](../../assets/figs/guide.png)

</details>

> **Персоналізована система навчання** на основі вмісту блокнота, що автоматично генерує прогресивні навчальні шляхи через інтерактивні сторінки та розумне опитування.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| Мультиагентна архітектура | **LocateAgent**: Визначає 3-5 прогресивних точок знань<br>**InteractiveAgent**: Перетворює на візуальні HTML-сторінки<br>**ChatAgent**: Забезпечує контекстне опитування<br>**SummaryAgent**: Генерує підсумки навчання |
| Розумне визначення знань | Автоматичний аналіз вмісту блокнота |
| Інтерактивні сторінки | Генерація HTML-сторінок з виправленням помилок |
| Розумне опитування | Відповіді з урахуванням контексту з поясненнями |
| Відстеження прогресу | Статус у реальному часі зі збереженням сеансу |
| Підтримка кількох блокнотів | Вибір записів з кількох блокнотів |

**Робочий процес використання**

1. **Вибір блокнота(ів)** — Оберіть один або кілька блокнотів (підтримується вибір між блокнотами)
2. **Генерація навчального плану** — LocateAgent визначає 3-5 основних точок знань
3. **Початок навчання** — InteractiveAgent генерує візуалізацію HTML
4. **Інтерактивне навчання** — Задавайте запитання, натисніть "Next" для продовження
5. **Завершення навчання** — SummaryAgent генерує підсумок навчання

<details>
<summary><b>Місцезнаходження виводу</b></summary>

```
data/user/guide/
└── session_{session_id}.json    # Повний стан сеансу, точки знань, історія чату
```

</details>

</details>

---

<details>
<summary><b>✏️ Інтерактивна генерація ідей (Co-Writer)</b></summary>

<details>
<summary><b>Діаграма архітектури</b></summary>

![Архітектура інтерактивної генерації ідей](../../assets/figs/co-writer.png)

</details>

> **Інтелектуальний редактор Markdown**, що підтримує написання за допомогою ШІ, автоматичну анотацію та озвучування тексту.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| Редагування форматованого тексту | Повна підтримка синтаксису Markdown з попереднім переглядом |
| EditAgent | **Rewrite**: Користувацькі інструкції з опціональним контекстом RAG/веб<br>**Shorten**: Стиснення зі збереженням ключової інформації<br>**Expand**: Додавання деталей та контексту |
| Автоматична анотація | Автоматичне визначення та позначення ключового вмісту |
| NarratorAgent | Генерація сценаріїв, TTS-аудіо, кілька голосів (Cherry, Stella, Annie, Cally, Eva, Bella) |
| Покращення контексту | Опціональний RAG або веб-пошук для додаткового контексту |
| Багатоформатний експорт | Markdown, PDF тощо |

**Використання**

1. Перейдіть на http://localhost:{frontend_port}/co_writer
2. Введіть або вставте текст у редактор
3. Використовуйте функції ШІ: Rewrite, Shorten, Expand, Auto Mark, Narrate
4. Експорт у Markdown або PDF

<details>
<summary><b>Місцезнаходження виводу</b></summary>

```
data/user/co-writer/
├── audio/                    # Аудіофайли TTS
│   └── {operation_id}.mp3
├── tool_calls/               # Історія викликів інструментів
│   └── {operation_id}_{tool_type}.json
└── history.json              # Історія редагування
```

</details>

</details>

---

<details>
<summary><b>🔬 Глибокі дослідження</b></summary>

<details>
<summary><b>Діаграма архітектури</b></summary>

![Архітектура глибоких досліджень](../../assets/figs/deepresearch.png)

</details>

> **DR-in-KG** (Глибокі дослідження в графі знань) — Систематична система глибоких досліджень на основі архітектури **Динамічна черга тем**, що дозволяє спільну роботу кількох агентів у три фази: **Планування → Дослідження → Звітність**.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| Трифазна архітектура | **Фаза 1 (Планування)**: RephraseAgent (оптимізація теми) + DecomposeAgent (декомпозиція підтем)<br>**Фаза 2 (Дослідження)**: ManagerAgent (планування черги) + ResearchAgent (прийняття рішень щодо досліджень) + NoteAgent (стиснення інформації)<br>**Фаза 3 (Звітність)**: Дедуплікація → Генерація структури з трьох рівнів → Написання звіту з цитатами |
| Динамічна черга тем | Основна система планування з управлінням станом TopicBlock: `PENDING → RESEARCHING → COMPLETED/FAILED`. Підтримує динамічне виявлення тем під час дослідження |
| Режими виконання | **Послідовний режим**: Послідовна обробка тем<br>**Паралельний режим**: Одночасна обробка кількох тем з `AsyncCitationManagerWrapper` для потокобезпечних операцій |
| Інтеграція кількох інструментів | **RAG** (гібридний/наївний), **Пошук за запитом** (пошук сутностей), **Пошук статей**, **Веб-пошук**, **Виконання коду** — динамічно обирається ResearchAgent |
| Єдина система цитування | Централізований CitationManager як єдине джерело істини для генерації ID цитування, зіставлення ref_number та дедуплікації |
| Попередньо встановлені конфігурації | **quick**: Швидке дослідження (1-2 підтеми, 1-2 ітерації)<br>**medium/standard**: Збалансована глибина (5 підтем, 4 ітерації)<br>**deep**: Ретельне дослідження (8 підтем, 7 ітерацій)<br>**auto**: Агент самостійно визначає глибину |

**Архітектура системи цитування**

Система цитування дотримується централізованого дизайну з CitationManager як єдиним джерелом істини:

```
┌─────────────────────────────────────────────────────────────────┐
│                      CitationManager                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Генерація ID   │  │  Карта ref_number│  │   Дедуплікація  │  │
│  │  PLAN-XX        │  │  citation_id →  │  │   (тільки статті)│  │
│  │  CIT-X-XX       │  │  ref_number     │  │                 │  │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘  │
└───────────┼────────────────────┼────────────────────┼───────────┘
            │                    │                    │
     ┌──────┴──────┐      ┌──────┴──────┐      ┌──────┴──────┐
     │DecomposeAgent│      │ReportingAgent│      │ Розділ      │
     │ ResearchAgent│      │ (inline [N]) │      │ Посилань    │
     │  NoteAgent   │      └─────────────┘      └────────────┘
     └─────────────┘
```

| Компонент | Опис |
|:---:|:---|
| Формат ID | **PLAN-XX** (запити RAG на етапі планування) + **CIT-X-XX** (етап досліджень, X=номер блоку) |
| Зіставлення ref_number | Послідовні номери, що починаються з 1, створені з відсортованих ID цитування, з дедуплікацією статей |
| Вбудовані цитати | Простий формат `[N]` у виводі LLM, пост-обробка в клікабельні посилання `[[N]](#ref-N)` |
| Таблиця цитування | Чітка таблиця посилань, надана LLM: `Цитувати як [1] → (RAG) попередній перегляд запиту...` |
| Пост-обробка | Автоматичне перетворення формату + перевірка для видалення недійсних посилань на цитати |
| Паралельна безпека | Потокобезпечні асинхронні методи (`get_next_citation_id_async`, `add_citation_async`) для паралельного виконання |

**Архітектура паралельного виконання**

Коли увімкнено `execution_mode: "parallel"`, кілька блоків тем досліджуються одночасно:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Паралельне виконання досліджень                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   DynamicTopicQueue                    AsyncCitationManagerWrapper      │
│   ┌─────────────────┐                  ┌─────────────────────────┐      │
│   │ Тема 1 (PENDING)│ ──┐             │  Потокобезпечна         │      │
│   │ Тема 2 (PENDING)│ ──┼──→ asyncio  │  обгортка для           │      │
│   │ Тема 3 (PENDING)│ ──┤   Semaphore │  CitationManager        │      │
│   │ Тема 4 (PENDING)│ ──┤   (max=5)   │                         │      │
│   │ Тема 5 (PENDING)│ ──┘             │  • get_next_citation_   │      │
│   └─────────────────┘                  │    id_async()           │      │
│            │                           │  • add_citation_async() │      │
│            ▼                           └───────────┬─────────────┘      │
│   ┌─────────────────────────────────────────────────────────────┐      │
│   │              Задачі паралельних ResearchAgent               │      │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │      │
│   │  │ Задача 1│  │ Задача 2│  │ Задача 3│  │ Задача 4│  ...   │      │
│   │  │(Тема 1) │  │(Тема 2) │  │(Тема 3) │  │(Тема 4) │        │      │
│   │  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │      │
│   │       │            │            │            │              │      │
│   │       └────────────┴────────────┴────────────┘              │      │
│   │                         │                                    │      │
│   │                         ▼                                    │      │
│   │              AsyncManagerAgentWrapper                        │      │
│   │              (Оновлення черги, безпечні для потоків)         │      │
│   └─────────────────────────────────────────────────────────────┘      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

| Компонент | Опис |
|:---:|:---|
| `asyncio.Semaphore` | Обмежує кількість одночасних задач до `max_parallel_topics` (за замовчуванням: 5) |
| `AsyncCitationManagerWrapper` | Обгортає CitationManager з `asyncio.Lock()` для потокобезпечної генерації ID |
| `AsyncManagerAgentWrapper` | Забезпечує атомарність оновлень стану черги в паралельних задачах |
| Відстеження прогресу в реальному часі | Відображення всіх активних задач дослідження з індикаторами стану |

**Обов'язки агентів**

| Агент | Фаза | Обов'язки |
|:---:|:---:|:---|
| RephraseAgent | Планування | Оптимізація вхідної теми користувача, підтримка багатораундової взаємодії користувача для уточнення |
| DecomposeAgent | Планування | Декомпозиція теми на підтеми з контекстом RAG, отримання ID цитування з CitationManager |
| ManagerAgent | Дослідження | Управління станом черги, планування задач, динамічне додавання тем |
| ResearchAgent | Дослідження | Перевірка достатності знань, планування запитів, вибір інструментів, запит ID цитування перед кожним викликом інструменту |
| NoteAgent | Дослідження | Стиснення необроблених вихідних даних інструментів у підсумки, створення ToolTraces з попередньо призначеними ID цитування |
| ReportingAgent | Звітність | Побудова карти цитування, генерація структури з трьох рівнів, написання розділів звіту з таблицями цитування, пост-обробка цитувань |

**Конвеєр генерації звітів**

```
1. Побудувати карту цитування →  CitationManager.build_ref_number_map()
2. Генерація структури →  Трирівневі заголовки (H1 → H2 → H3)
3. Написання розділів →  LLM використовує [N] цитування з наданою таблицею цитування
4. Пост-обробка →  Перетворення [N] → [[N]](#ref-N), перевірка посилань
5. Генерація списку літератури →  Стилізовані академічні записи з розгортаючими деталями джерела
```

**Використання**

1. Відвідайте http://localhost:{frontend_port}/research
2. Введіть тему дослідження
3. Оберіть режим дослідження (quick/medium/deep/auto)
4. Спостерігайте за прогресом у реальному часі з паралельним/послідовним виконанням
5. Перегляньте структурований звіт з клікабельними вбудованими цитатами
6. Експортуйте в Markdown або PDF (з правильним розділенням сторінок та підтримкою діаграм Mermaid)

<details>
<summary><b>CLI</b></summary>

```bash
# Швидкий режим (швидке дослідження)
python src/agents/research/main.py --topic "Основи глибокого навчання" --preset quick

# Середній режим (збалансований)
python src/agents/research/main.py --topic "Архітектура Transformer" --preset medium

# Глибокий режим (ретельне дослідження)
python src/agents/research/main.py --topic "Графові нейронні мережі" --preset deep

# Автоматичний режим (агент визначає глибину)
python src/agents/research/main.py --topic "Навчання з підкріпленням" --preset auto
```

</details>

<details>
<summary><b>Python API</b></summary>

```python
import asyncio
from src.agents.research import ResearchPipeline
from src.core.core import get_llm_config, load_config_with_main

async def main():
    # Завантаження конфігурації (main.yaml об'єднується з будь-якими модульними перевизначеннями)
    config = load_config_with_main("research_config.yaml")
    llm_config = get_llm_config()

    # Створення конвеєра (параметри агента завантажуються з agents.yaml автоматично)
    pipeline = ResearchPipeline(
        config=config,
        api_key=llm_config["api_key"],
        base_url=llm_config["base_url"],
        kb_name="ai_textbook"  # Необов'язково: перевизначити базу знань
    )

    # Запуск дослідження
    result = await pipeline.run(topic="Механізми уваги в глибокому навчанні")
    print(f"Звіт збережено в: {result['final_report_path']}")

asyncio.run(main())
```

</details>

<details>
<summary><b>Місцезнаходження виводу</b></summary>

```
data/user/research/
├── reports/                          # Остаточні звіти про дослідження
│   ├── research_YYYYMMDD_HHMMSS.md   # Markdown-звіт з клікабельними цитатами [[N]](#ref-N)
│   └── research_*_metadata.json      # Метадані та статистика досліджень
└── cache/                            # Кеш процесу дослідження
    └── research_YYYYMMDD_HHMMSS/
        ├── queue.json                # Стан DynamicTopicQueue (TopicBlocks + ToolTraces)
        ├── citations.json            # Реєстр цитування з ID-лічильниками та зіставленням ref_number
        │                             #   - citations: {citation_id: citation_info}
        │                             #   - counters: {plan_counter, block_counters}
        ├── step1_planning.json       # Результати фази планування (підтеми + PLAN-XX цитати)
        ├── planning_progress.json    # Події прогресу планування
        ├── researching_progress.json # Події прогресу дослідження
        ├── reporting_progress.json   # Події прогресу звітності
        ├── outline.json              # Трирівнева структура звіту
        └── token_cost_summary.json   # Статистика використання токенів
```

**Структура файлу цитування** (`citations.json`):
```json
{
  "research_id": "research_20241209_120000",
  "citations": {
    "PLAN-01": {"citation_id": "PLAN-01", "tool_type": "rag_hybrid", "query": "...", "summary": "..."},
    "CIT-1-01": {"citation_id": "CIT-1-01", "tool_type": "paper_search", "papers": [...], ...}
  },
  "counters": {
    "plan_counter": 2,
    "block_counters": {"1": 3, "2": 2}
  }
}
```

</details>

<details>
<summary><b>Параметри конфігурації</b></summary>

Ключова конфігурація в `config/main.yaml` (розділ research) та `config/agents.yaml`:

```yaml
# config/agents.yaml - Параметри LLM агента
research:
  temperature: 0.5
  max_tokens: 12000

# config/main.yaml - Налаштування дослідження
research:
  # Режим виконання
  researching:
    execution_mode: "parallel"    # "series" або "parallel"
    max_parallel_topics: 5        # Максимальна кількість одночасних тем
    max_iterations: 5             # Максимальна кількість ітерацій на тему

  # Перемикачі інструментів
    enable_rag_hybrid: true       # Вилучення гібридного RAG
    enable_rag_naive: true        # Базове вилучення RAG
    enable_paper_search: true     # Пошук наукових статей
    enable_web_search: true       # Веб-пошук (також контролюється через tools.web_search.enabled)
    enable_run_code: true         # Виконання коду

  # Обмеження черги
  queue:
    max_length: 5                 # Максимальна кількість тем у черзі

  # Звітність
  reporting:
    enable_inline_citations: true # Увімкнути клікабельні [N] цитати у звіті

  # Попередні налаштування: quick, medium, deep, auto

# Глобальні перемикачі інструментів у розділі інструментів
tools:
  web_search:
    enabled: true                 # Глобальний перемикач веб-пошуку (вищий пріоритет)
```

</details>

</details>

---

<details>
<summary><b>💡 Автоматична генерація ідей</b></summary>

<details>
<summary><b>Діаграма архітектури</b></summary>

![Архітектура автоматичної генерації ідей](../../assets/figs/ideagen.png)

</details>

> **Система генерації дослідницьких ідей**, що вилучає точки знань із записів блокнота та генерує дослідницькі ідеї через багатоступеневу фільтрацію.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| MaterialOrganizerAgent | Вилучає точки знань із записів блокнота |
| Багатоступенева фільтрація | **Loose Filter** → **Explore Ideas** (5+ на точку) → **Strict Filter** → **Generate Markdown** |
| Дослідження ідей | Інноваційне мислення з кількох вимірів |
| Структурований вивід | Організований markdown з точками знань та ідеями |
| Зворотні виклики прогресу | Оновлення в реальному часі для кожного етапу |

**Використання**

1. Відвідайте http://localhost:{frontend_port}/ideagen
2. Оберіть блокнот із записами
3. За потреби вкажіть думки/уподобання користувача
4. Натисніть "Generate Ideas"
5. Перегляньте згенеровані дослідницькі ідеї, організовані за точками знань

<details>
<summary><b>Python API</b></summary>

```python
import asyncio
from src.agents.ideagen import IdeaGenerationWorkflow, MaterialOrganizerAgent
from src.core.core import get_llm_config

async def main():
    llm_config = get_llm_config()

    # Крок 1: Вилучення точок знань з матеріалів
    organizer = MaterialOrganizerAgent(
        api_key=llm_config["api_key"],
        base_url=llm_config["base_url"]
    )
    knowledge_points = await organizer.extract_knowledge_points(
        "Ваш навчальний матеріал або вміст блокнота тут"
    )

    # Крок 2: Генерація дослідницьких ідей
    workflow = IdeaGenerationWorkflow(
        api_key=llm_config["api_key"],
        base_url=llm_config["base_url"]
    )
    result = await workflow.process(knowledge_points)
    print(result)  # Ідеї досліджень у форматі Markdown

asyncio.run(main())
```

</details>

</details>

---

<details>
<summary><b>📊 Панель керування + Управління базою знань</b></summary>

> **Єдиний вхід до системи**, що забезпечує відстеження активності, управління базою знань та моніторинг стану системи.

**Ключові особливості**

| Особливість | Опис |
|:---:|:---|
| Статистика активності | Нещодавні записи розв'язання/генерації/дослідження |
| Огляд бази знань | Список БЗ, статистика, інкрементальні оновлення |
| Статистика блокнотів | Кількість блокнотів, розподіл записів |
| Швидкі дії | Доступ до модулів в один клік |

**Використання**

- **Веб-інтерфейс**: Відвідайте http://localhost:{frontend_port} для перегляду огляду системи
- **Створити БЗ**: Натисніть "New Knowledge Base", завантажте документи PDF/Markdown
- **Переглянути активність**: Перевірте нещодавні навчальні заходи на панелі моніторингу

</details>

---

<details>
<summary><b>📓 Блокнот</b></summary>

> **Уніфіковане управління навчальними записами**, що з'єднує виводи з усіх модулів для створення персоналізованої навчальної бази знань.

**Основні особливості**

| Особливість | Опис |
|:---:|:---|
| Управління кількома блокнотами | Створення, редагування, видалення блокнотів |
| Єдине сховище записів | Інтеграція записів розв'язання/генерації/дослідження/інтерактивної генерації ідей |
| Теги категоризації | Автоматична категоризація за типом, базою знань |
| Користувацьке оформлення | Персоналізація кольору, значків |

**Використання**

1. Відвідайте http://localhost:{frontend_port}/notebook
2. Створіть новий блокнот (встановіть ім'я, опис, колір, значок)
3. Після виконання завдань в інших модулях натисніть "Add to Notebook"
4. Перегляньте та керуйте всіма записами на сторінці блокнота

</details>

---

### 📖 Документація модулів

<table>
<tr>
<td align="center"><a href="../../config/README.md">Конфігурація</a></td>
<td align="center"><a href="../../data/README.md">Каталог даних</a></td>
<td align="center"><a href="../../src/api/README.md">API Backend</a></td>
<td align="center"><a href="../../src/core/README.md">Основні утиліти</a></td>
</tr>
<tr>
<td align="center"><a href="../../src/knowledge/README.md">База знань</a></td>
<td align="center"><a href="../../src/tools/README.md">Інструменти</a></td>
<td align="center"><a href="../../web/README.md">Веб-інтерфейс</a></td>
<td align="center"><a href="../../src/agents/solve/README.md">Модуль розв'язання</a></td>
</tr>
<tr>
<td align="center"><a href="../../src/agents/question/README.md">Модуль запитань</a></td>
<td align="center"><a href="../../src/agents/research/README.md">Модуль дослідження</a></td>
<td align="center"><a href="../../src/agents/co_writer/README.md">Модуль інтерактивної генерації ідей</a></td>
<td align="center"><a href="../../src/agents/guide/README.md">Модуль керівництва</a></td>
</tr>
<tr>
<td align="center" colspan="4"><a href="../../src/agents/ideagen/README.md">Модуль автоматичної генерації ідей</a></td>
</tr>
</table>

## ❓ Часті запитання

<details>
<summary><b>Не вдається запустити backend?</b></summary>

**Контрольний список**
- Підтвердіть версію Python >= 3.10
- Підтвердіть встановлення всіх залежностей: `pip install -r requirements.txt`
- Перевірте, чи використовується порт 8001
- Перевірте конфігурацію файлу `.env`

**Рішення**
- **Змінити порт**: Встановіть `BACKEND_PORT=9001` у файлі `.env`
- **Перевірити логи**: Перегляньте повідомлення про помилки в терміналі

</details>

<details>
<summary><b>Порт зайнятий після Ctrl+C?</b></summary>

**Проблема**

Після натискання Ctrl+C під час виконання завдання (наприклад, глибоке дослідження) при повторному запуску з'являється помилка "порт вже використовується".

**Причина**

Ctrl+C іноді завершує лише процес frontend, тоді як backend продовжує працювати у фоновому режимі.

**Рішення**

```bash
# macOS/Linux: Знайти та завершити процес
lsof -i :8001
kill -9 <PID>

# Windows: Знайти та завершити процес
netstat -ano | findstr :8001
taskkill /PID <PID> /F
```

Потім перезапустіть сервіс за допомогою `python scripts/start_web.py`.

</details>

<details>
<summary><b>Помилка npm: command not found?</b></summary>

**Проблема**

Запуск `scripts/start_web.py` показує `npm: command not found` або статус виходу 127.

**Контрольний список**
- Перевірте, чи встановлено npm: `npm --version`
- Перевірте, чи встановлено Node.js: `node --version`
- Підтвердіть активацію середовища conda (якщо використовується conda)

**Рішення**
```bash
# Варіант A: Використання Conda (рекомендовано)
conda install -c conda-forge nodejs

# Варіант B: Використання офіційного інсталятора
# Завантажте з https://nodejs.org/

# Варіант C: Використання nvm
nvm install 18
nvm use 18
```

**Перевірка встановлення**
```bash
node --version  # Повинно показувати v18.x.x або вище
npm --version   # Повинно показувати номер версії
```

</details>

<details>
<summary><b>Проблеми з довгими іменами файлів при встановленні в Windows?</b></summary>

**Проблема**

У Windows ви можете зіткнутися з помилками, пов'язаними з довгими шляхами файлів під час встановлення, такими як "Ім'я файлу або розширення занадто довге" або аналогічні проблеми з довжиною шляху.

**Причина**

Windows має обмеження за замовчуванням на довжину шляху (260 символів), яке може бути перевищене через вкладену структуру каталогів та залежностей DeepTutor.

**Рішення**

Увімкніть підтримку довгих шляхів у системі, виконавши наступну команду в командному рядку від імені адміністратора:

```cmd
reg add "HKLM\SYSTEM\CurrentControlSet\Control\FileSystem" /v LongPathsEnabled /t REG_DWORD /d 1 /f
```

Після виконання цієї команди перезапустіть термінал, щоб зміни набули чинності.

</details>

<details>
<summary><b>Frontend не може підключитися до backend?</b></summary>

**Контрольний список**
- Підтвердіть, що backend запущено (відвідайте http://localhost:8001/docs)
- Перевірте консоль браузера на наявність повідомлень про помилки

**Рішення**

Створіть `.env.local` у каталозі `web`:

```bash
NEXT_PUBLIC_API_BASE=http://localhost:8001
```

</details>

<details>
<summary><b>Docker: Frontend не може підключитися при хмарному розгортанні?</b></summary>

**Проблема**

При розгортанні на хмарному сервері інтерфейс показує помилки з'єднання, такі як "Не вдалося отримати дані" або "NEXT_PUBLIC_API_BASE не налаштовано".

**Причина**

Стандартна URL-адреса API — `localhost:8001`, яка вказує на локальну машину користувача в браузері, а не на ваш сервер.

**Рішення**

Встановіть змінну оточення `NEXT_PUBLIC_API_BASE_EXTERNAL` на публічну URL-адресу вашого сервера:

```bash
# Використання docker run
docker run -d --name deeptutor \
  -e NEXT_PUBLIC_API_BASE_EXTERNAL=https://your-server.com:8001 \
  ... інші параметри ...
  ghcr.io/hkuds/deeptutor:latest

# Або у файлі .env
NEXT_PUBLIC_API_BASE_EXTERNAL=https://your-server.com:8001
```

**Приклад користувацького порту:**
```bash
# Якщо використовується порт бекенду 9001
-e BACKEND_PORT=9001 \
-e NEXT_PUBLIC_API_BASE_EXTERNAL=https://your-server.com:9001
```

</details>

<details>
<summary><b>Docker: Як використовувати користувацькі порти?</b></summary>

**Рішення**

Встановіть як змінні оточення портів, так і зіставлення портів:

```bash
docker run -d --name deeptutor \
  -p 9001:9001 -p 4000:4000 \
  -e BACKEND_PORT=9001 \
  -e FRONTEND_PORT=4000 \
  -e NEXT_PUBLIC_API_BASE_EXTERNAL=http://localhost:9001 \
  ... інші змінні оточення ...
  ghcr.io/hkuds/deeptutor:latest
```

**Важливо**: Зіставлення портів `-p` має відповідати значенням `BACKEND_PORT`/`FRONTEND_PORT`.

</details>

<details>
<summary><b>З'єднання WebSocket не вдається?</b></summary>

**Контрольний список**
- Підтвердіть, що backend запущено
- Перевірте налаштування брандмауера
- Підтвердіть правильність URL-адреси WebSocket

**Рішення**
- **Перевірте логи backend**
- **Підтвердіть формат URL**: `ws://localhost:8001/api/v1/...`

</details>

<details>
<summary><b>На сторінці налаштувань відображається "Помилка завантаження даних" при використанні HTTPS зворотного проксі?</b></summary>

**Проблема**

При розгортанні за HTTPS зворотним проксі (наприклад, nginx), на сторінці налаштувань відображається "Помилка завантаження даних", і інструменти розробника браузера показують, що HTTPS-запити перенаправляються на HTTP (307 редирект).

**Причина**

Ця проблема була виправлена у версії v0.5.0+. Якщо ви використовуєте старішу версію, проблема була спричинена автоматичними перенаправленнями зі скісною рискою від FastAPI, які генерували HTTP URL-адреси замість збереження оригінального протоколу HTTPS.

**Рішення (для v0.5.0+)**

Оновіться до останньої версії. Виправлення вимикає автоматичні перенаправлення зі скісною рискою, щоб запобігти зниженню протоколу.

**Рекомендована конфігурація nginx**

При використанні nginx як HTTPS зворотного проксі використовуйте наступну конфігурацію:

```nginx
# Фронтенд
location / {
    proxy_pass http://localhost:3782;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# API бекенду
location /api/ {
    proxy_pass http://localhost:8001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;  # Важливо: зберігає оригінальний протокол
}

# Підтримка WebSocket
location /api/v1/ {
    proxy_pass http://localhost:8001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

**Змінна оточення**

Встановіть у `.env`:
```bash
NEXT_PUBLIC_API_BASE=https://your-domain.com:port
```

Див.: [GitHub Issue #112](https://github.com/HKUDS/DeepTutor/issues/112)

</details>

<details>
<summary><b>Де зберігаються вихідні дані модулів?</b></summary>

| Модуль | Шлях виводу |
|:---:|:---|
| Розв'язання | `data/user/solve/solve_YYYYMMDD_HHMMSS/` |
| Запитання | `data/user/question/question_YYYYMMDD_HHMMSS/` |
| Дослідження | `data/user/research/reports/` |
| Інтерактивна генерація ідей | `data/user/co-writer/` |
| Блокнот | `data/user/notebook/` |
| Керівництво | `data/user/guide/session_{session_id}.json` |
| Логи | `data/user/logs/` |

</details>

<details>
<summary><b>Як додати нову базу знань?</b></summary>

**Веб-інтерфейс**
1. Відвідайте http://localhost:{frontend_port}/knowledge
2. Натисніть "New Knowledge Base"
3. Введіть назву бази знань
4. Завантажте документи PDF/TXT/MD
5. Система обробить документи у фоновому режимі

**CLI**
```bash
python -m src.knowledge.start_kb init <kb_name> --docs <pdf_path>
```

</details>

<details>
<summary><b>Як поступово додавати документи до існуючої БЗ?</b></summary>

**CLI (рекомендовано)**
```bash
python -m src.knowledge.add_documents <kb_name> --docs <new_document.pdf>
```

**Переваги**
- Обробляє лише нові документи, економить час та вартість API
- Автоматично об'єднує з існуючим графом знань
- Зберігає всі існуючі дані

</details>

<details>
<summary><b>Помилка uvloop.Loop при вилученні пронумерованих елементів?</b></summary>

**Проблема**

При ініціалізації бази знань ви можете зіткнутися з цією помилкою:
```
ValueError: Can't patch loop of type <class 'uvloop.Loop'>
```

Це відбувається тому, що Uvicorn за замовчуванням використовує цикл подій `uvloop`, який несумісний з `nest_asyncio`.

**Рішення**

Використовуйте один з наступних методів для вилучення нумерованих елементів:

```bash
# Варіант 1: Використання shell-скрипту (рекомендовано)
./scripts/extract_numbered_items.sh <kb_name>

# Варіант 2: Пряма команда Python
python src/knowledge/extract_numbered_items.py --kb <kb_name> --base-dir ./data/knowledge_bases
```

Це вилучить нумеровані елементи (Визначення, Теореми, Рівняння тощо) з вашої бази знань без повторної ініціалізації.

</details>


</div>

## ⭐ Історія зірок

<div align="center">

<p>
  <a href="https://github.com/HKUDS/DeepTutor/stargazers"><img src="../../assets/roster/stargazers.svg" alt="Stargazers"/></a>
  &nbsp;&nbsp;
  <a href="https://github.com/HKUDS/DeepTutor/network/members"><img src="../../assets/roster/forkers.svg" alt="Forkers"/></a>
</p>

<a href="https://www.star-history.com/#HKUDS/DeepTutor&type=timeline&legend=top-left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=HKUDS/DeepTutor&type=timeline&theme=dark&legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=HKUDS/DeepTutor&type=timeline&legend=top-left" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=HKUDS/DeepTutor&type=timeline&legend=top-left" />
  </picture>
</a>

</div>

## 🤝 Участь у розробці

<div align="center">

Ми сподіваємося, що DeepTutor зможе стати подарунком для спільноти. 🎁

<a href="https://github.com/HKUDS/DeepTutor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=HKUDS/DeepTutor&max=999" alt="Учасники HKUDS/DeepTutor" />
</a>

</div>

## 🔗 Пов'язані проекти

<div align="center">

| [⚡ LightRAG](https://github.com/HKUDS/LightRAG) | [🎨 RAG-Anything](https://github.com/HKUDS/RAG-Anything) | [💻 DeepCode](https://github.com/HKUDS/DeepCode) | [🔬 AI-Researcher](https://github.com/HKUDS/AI-Researcher) |
|:---:|:---:|:---:|:---:|
| Простий та швидкий RAG | Мультимодальний RAG | Помічник з коду на ШІ | Автоматизація досліджень |

**[Лабораторія інтелектуальних даних @ HKU](https://github.com/HKUDS)**

[⭐ Поставте зірку](https://github.com/HKUDS/DeepTutor/stargazers) · [🐛 Повідомити про помилку](https://github.com/HKUDS/DeepTutor/issues) · [💬 Обговорення](https://github.com/HKUDS/DeepTutor/discussions)

---

Цей проект поширюється за ліцензією ***[AGPL-3.0](../../LICENSE)***.

<p align="center">
  <em> Дякуємо, що відвідали ✨ DeepTutor!</em><br><br>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=HKUDS.DeepTutor&style=for-the-badge&color=00d4ff" alt="Views">
</p>

</div>
