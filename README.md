<br />
<p align="center">
  <h3 align="center">Libary</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Project Structure](#project-structure)
  - [Package Modules](#package-modules)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Blanja API is a RESTful API used in [Blanja Aplication](https://blanja-yksd.vercel.app). This API handle user management (customer & seller), get lists of products, product detail, and order operation (mybag, checkout, & myorder).

### Project Structure

```
|── Library
   |── public                           # Public assets
   |── src                              # Folder utama yang berisi source code aplikasi.
       |── app                          # Folder khusus untuk routing jika menggunakan App                                Router(Next.js 13+).
       |── component                    # Folder berisi component dari masing2 page
       |── components                   #  Menyimpan komponen UI siap pakai                             seperti:Avatar,Badge,Button, Card, dll.
       |── lib                          # Biasanya berisi helper functions, konfigurasi API, atau utilitas lainnya.
   |── package.json                 # File inti proyek JavaScript/TypeScript.
   |── .env                             # Environment variables
   |── .gitignore                       # Files that should be ignored
   |── README.md                        # Readme
```

### Package Modules

Below are lists of modules used in this API:

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Next](https://nextjs.org/)
- [Ant Design](https://4x.ant.design/docs/react/introduce)
- [Taillwind](https://v2.tailwindcss.com/docs)
- [react-dom](https://reactjs.org/docs/react-dom.html)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This is an example of things you need to use the application and how to install them.

- [node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/sukron21/BlanjaAPI.git
```

2. Install PNPM packages

```sh
npm install -g pnpm

```

3. Install NPM packages

```sh
pnpm install
```

3. Add .env file at your backend root folder project, and add the following

```sh
NEXT_PUBLIC_API_URL=your_public_url
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request

<!-- RELATED PROJECT -->

## Related Project

- [Backend](https://github.com/sukron21/library-be)

<!-- CONTACT -->

## Contact

Contributors name and contact info

- Rahmat Furqon [@sukron21](https://github.com/sukron21)
