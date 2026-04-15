# 🚀 Keen Keeper

🔗 **Live Demo:** https://keen-keeper-friends-platform.vercel.app/

---

## 🧠 Overview

**Keen Keeper** is a modern friendship management platform that helps you **track, maintain, and analyze your relationships** through smart interaction logging and visual analytics.

It ensures you never lose touch with the people who matter most.

---

## ✨ Key Features

### 👥 Friend Management
- Add and manage friends
- Track relationship status:
  - 🟢 Active
  - 🟡 Almost Due
  - 🔴 Overdue
- Add tags and personal notes

---

### 📜 Timeline System (Core Feature)
- Log interactions:
  - 📞 Call
  - 💬 Text
  - 🎥 Video
  - 🤝 Meetup
- Dynamic timeline per friend
- Global timeline history for analytics
- 🚫 Duplicate prevention (only latest per friend)
- 💾 Persistent data using **localStorage**

---

### 🔍 Smart Timeline Features
- Filter by interaction type:
  - Call / Text / Video / Meetup
- Sort timeline:
  - Newest → Oldest
  - Oldest → Newest
- Search functionality:
  - Partial match by friend name
  - Partial match by interaction type
- Fully dynamic UI updates

---

### 📊 Friendship Analytics
- Interactive Pie Chart (Recharts)
- Real-time updates from global history
- Interaction breakdown:
  - Call / Text / Video / Meetup
- Visual insights for friendship activity

---

### ⚡ UI & UX Features
- Global loading system
- Toast notifications (React Toastify)
- Fully responsive design
- Clean SaaS-style UI
- Smooth animations
- Modern dashboard experience

---

## 🧠 State Management Architecture

- `timelines` → latest interaction per friend
- `history` → full interaction log for analytics
- Context API for global state sharing
- localStorage sync for persistence across refresh

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|------------|
| Framework | Next.js (App Router) |
| UI | React + Tailwind CSS |
| State | Context API |
| Charts | Recharts |
| Storage | localStorage |
| Icons | Lucide React |
| Notifications | React Toastify |

---

## 📁 Project Structure
/app
├── friends/
├── timeline/
├── stats/
├── layout.js
├── page.js
├── favicon.ico

/components
├── home/
├── timeline/
├── shared/

/context
├── TimeLineContext.js

/hooks
├── useTimeLine.js

/lib
├── providers/
├── getFriends.js
├── getIcon.js


---

## ⚙️ Installation

```bash
git clone https://github.com/shakil218/keen-keeper-friends-platform.git
cd keen-keeper
npm install
npm run dev
