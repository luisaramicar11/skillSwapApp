![Logotype](./public/img/skillswap-logotype.png)

__SkillSwap__ is a modern platform designed to facilitate skill exchange, connecting people in the digital environment who want to learn with those willing to share their knowledge.

## Why SkillSwap?

In a constantly evolving digital environment, updating and strengthening skills is crucial. SkillSwap addresses the challenges of collaborative learning, offering a smooth and effective digital experience for knowledge exchange.

## Objective

Facilitate continuous learning and collaborative teaching, creating a vibrant community where users can explore their interests and direct their personal and professional development.

## Technologies Used

- *Frontend*:
   - Next.js, TypeScript, Redux Toolkit, Styled Components, Bootstrap Icons

- *Backend*:
   - C#, .NET, Swagger, Azure
     
## Admin Credentials
To access the admin panel, use the following credentials:

- **Email**: arlex.z96@gmail.com
- **Password**: @A12345

These credentials should be used only for administrative purposes.

## Project Structure

```bash
├── public
│   ├── img
│   └── svg
├── src
│   ├── app
│   │   ├── (account)
│   │   │   └── auth
│   │   ├── admin
│   │   │   ├── legal
│   │   │   ├── posts
│   │   │   ├── reports
│   │   │   ├── users
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   └── github-profile
│   │   ├── legal
│   │   ├── recoverPassword
│   │   ├── redux
│   │   │   ├── slices
│   │   │   └── store.ts
│   │   ├── user
│   │   │   ├── detailUser
│   │   │   ├── discover
│   │   │   ├── legal
│   │   │   ├── match
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── (settings)
│   │   │       ├── info
│   │   │       ├── profile
│   │   │       ├── metrics
│   │   │       ├── skills
│   │   │       └── social
│   │   ├── layout.tsx
│   │   ├── providers.tsx
│   │   ├── rootHandler.tsx
│   │   └── globalStyling.tsx
│   ├── components
│   │   └── ui
│   ├── hooks
│   ├── lib
│   │   ├── api
│   │   ├── services
│   │   └── utils
│   ├── models
│   └─── middleware.ts
└─── .env.local (OPTIONAL)
```

## Resources

1. In this link, you can view the Documentation of our project on Notion:
    - [https://plum-pig-ed5.notion.site/SKILLSWAP-8fa0afeb7d144278894d643549d1e669](https://plum-pig-ed5.notion.site/SKILLSWAP-8fa0afeb7d144278894d643549d1e669)

2. In this link, you can view the Task Management and Sprints of our project on Jira:
    - [https://msgamesje.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNTFhZDYxYjI1NTU0NGZjMmFlMjVkMWRjNTM5ODk3YzkiLCJwIjoiaiJ9](https://msgamesje.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiNTFhZDYxYjI1NTU0NGZjMmFlMjVkMWRjNTM5ODk3YzkiLCJwIjoiaiJ9)

3. In this link, you can view the MockUp and Figma Design of our project on Figma:
    - [https://www.figma.com/design/FEDH5WgaGXBLSr2xBBA8OV/rutaAvanzada.ts-Mockup?node-id=0-1&t=nLtB2dIrePCKwWu2-1](https://www.figma.com/design/FEDH5WgaGXBLSr2xBBA8OV/rutaAvanzada.ts-Mockup?node-id=0-1&t=nLtB2dIrePCKwWu2-1)

4. In this link, you can view our project deployed on Vercel:
    - [https://skill-swap-app-pink.vercel.app/](https://skill-swap-app-pink.vercel.app/)

## Equipo Frontend

- David Francisco Blandón Mena
    - franccoina

- Luisa Fernanda Ramírez Cardona
    - luisaramicar11

- Joan Sebastian Zapata Caro
    - JoanZapata05

## Equipo Backend

- Arlex Mauricio Zapata Mesa
    - Arlexz96

- Jonathan Escobar Molina
    - JEscobar07

- David Steven Medina Urrego
    - medi77na

## Instalation

1. Clone the repository:

```bash
git clone https://github.com/luisaramicar11/skillSwap.git
```

2. Run the project in terminal:

```bash
npm run dev
```

3. Create a file named __".env.local"__ in the root of the project:

- This file should contain a GITHUB token that allows you to view a preview of users' GitHub profiles.
- However, due to the **".gitignore"**, you may not have this file when cloning this project, or it may be deleted during transfer.
- It is recommended to create it manually, but don’t worry; this will not affect your experience.
- You will need to generate your own GITHUB token, which you can obtain by following the instructions on GitHub or just go to the end of this document, where we will explain it for you. 

```bash
.env.local
```

4. Write the following code in the previously created file to keep the token in your project:

```bash
GITHUB_TOKEN=your_generated_token_here
```

5. Open [http://localhost:3000](http://localhost:3000) on your browser and enjoy our project.

<br>

--------------------------------------------------------------------------------------------------------

<br>

### How to Generate a GitHub Personal Access Token

1. **Log in to GitHub**:
   - Go to [GitHub](https://github.com) and log in to your account.

2. **Navigate to Settings**:
   - Click on your profile picture in the top right corner.
   - Select **Settings** from the dropdown menu.

3. **Access Developer Settings**:
   - In the left sidebar, scroll down and click on **Developer settings**.

4. **Personal Access Tokens**:
   - Click on **Personal access tokens** in the left sidebar.
   - Select **Tokens (classic)**.

5. **Generate New Token**:
   - Click on the **Generate new token** button.

6. **Set Token Scopes**:
   - Give your token a descriptive **note**.
   - Set the **expiration** for the token as needed.
   - Select the scopes for the token:
     - **repo**: Full control of private repositories.
     - **user**: Read and write access to profile data.

7. **Generate and Copy the Token**:
   - Click on **Generate token**.
   - **Copy** the generated token. You won’t be able to see it again!

8. **Store Your Token**:
   - Save your token securely, such as in a `.env.local` file, and use it in your project as needed.

### Important:
Make sure to keep your token private. If you believe it has been compromised, revoke it immediately and generate a new one.


--------------------------------------------------------------------------------------------------------

<br>
<div align="center">
     <em>We thank you very much for visiting our loved project.</strong></em><br>
        <em>Greetings from <strong>SkillSwap Team.</strong></em>
</div>
<br>

--------------------------------------------------------------------------------------------------------

<br>

<div align="center">
  <img src="./public/img/skillswap-isotype.png" alt="Skillswap-Isotype" width="300" />
</div>

<div align="center">
    <em>
      <strong>2024 SkillSwap, Inc. Looking for Skill.</strong><br>
      © All rights reserved.
       </em>
</div>
