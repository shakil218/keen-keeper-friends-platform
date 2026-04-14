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

### 📜 Timeline System
- Log interactions:
  - 📞 Call
  - 💬 Text
  - 🎥 Video
  - 🤝 Meetup
- Dynamic timeline per friend
- Global timeline for all interactions
- 🚫 Duplicate prevention (only latest interaction per friend)

---

### 🔍 Smart Timeline Filters
- Filter by:
  - Call / Text / Video / Meetup
- Sort:
  - Newest → Oldest
  - Oldest → Newest
- Search:
  - Partial match by friend name
  - Interaction type search

---

### 📊 Friendship Analytics
- Interactive Pie Chart (Recharts)
- Real-time data updates
- Interaction breakdown:
  - Call / Text / Video / Meetup

---

### ⚡ UI & UX Features
- Global loading system
- Toast notifications
- Fully responsive design
- Clean SaaS-style UI
- Smooth animations

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|------------|
| Framework | Next.js (App Router) |
| UI | React + Tailwind CSS |
| State | Context API |
| Charts | Recharts |
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
git clone https://github.com/your-username/keen-keeper.git
cd keen-keeper
npm install
npm run dev
