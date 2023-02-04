<h1 align="center">🟩 Kaugmaon 🟩</h1>
<p align="center"><a href="https://kaugmaon.vercel.app">kaugmaon.vercel.app</a></p>

## 🔍 About

An event landing site for **Link.EXE's RealITy @ February 17, 2023**.

Made by [Carlo Taleon](https://carlo.vercel.app) and [Asther Louie Cabardo](https://asther.vercel.app/)

## 💭 How to Contribute

1. Fork this [repository]() and clone your fork.

2. Create a new branch for your changes:

```sh
$ cd your_cloned_fork
$ git checkout dev
$ git checkout -b my-new-branch
```

3. Install dependencies (we use [pnpm](https://pnpm.io/installation)):

```sh
$ pnpm install
```

3. Create a `.env` file in root with this content:

> For `GOOGLE_*` and `JWT_SECRET`, Create a project and connect on [Google Cloud Console →](https://console.cloud.google.com/apis/credentials).

> `DATABASE_URL` should be your local MySQL database. [Guide →](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-mysql)

```sh
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```

4. Sync the database schema:

```sh
$ npx prisma db push
```

5. Run locally:

```sh
$ pnpm dev
```

## 🚀 Contributors

<a href="https://github.com/blankeos/kaugmaon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=blankeos/kaugmaon" />
</a>

---
