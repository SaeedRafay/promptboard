<div align="center">
  <h3 align="center">Promptboard: Next.js Fullstack Web Application</h3>

  <div align="center">
    A full-stack web application built using React 18, Next.js 14, Tailwind and MongoDB
  </div>
</div>

## Features

👉 Responsive & Trendy Design

👉 Search AI prompts

👉 Signup & Login with Google using NextAuth

👉 Add, Edit, or Delete your own prompts

👉 Search prompts by tags or keywords

## Getting Started

Steps to run the project on your local machine

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Setup**

Clone the repo locally and navigate to the project directory

Install dependencies using npm:

```bash
npm install
```

Setup .env file

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/).

Run the project

```bash
npm run dev
```

Check [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Feedback

Would you like to share some feedback then I would love to hear from you! Drop me an email: [saeedrafaycom@gmail.com](mailto:saeedrafaycom@gmail.com)
