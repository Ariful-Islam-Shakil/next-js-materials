
## Steps to Create and Run a Next.js Project : [Next.js Documentation](https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app)

1. **Install Node.js**  
    Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Create a New Next.js App**  
    Open your terminal and run:
    ```bash
    npx create-next-app@latest my-next-app
    ```
    Replace `my-next-app` with your desired project name.
    After running the command, you'll be prompted to select options such as:

    - **TypeScript** (Yes/No) — _Recommended: No_
    - **ESLint** (Yes/No) — _Recommended: Yes_
    - **Tailwind CSS** (Yes/No) — _Optional, recommended if you want utility-first CSS_
    - **`src/` directory** (Yes/No) — _Recommended: No_
    - **App Router** (Yes/No) — _Recommended: Yes_
    - **Turbopack for `next dev`?**  (No / Yes) — _Recomended: Yes_
    -  **import alias (`@/*` by default)?** (No / Yes) — _Recomended: No_

    Use the arrow keys to navigate and press `Enter` to confirm your choices.

3. **Navigate to the Project Directory**  
    ```bash
    cd my-next-app
    ```

4. **Start the Development Server**  
    ```bash
    npm run dev
    ```
    The app will be running at [http://localhost:3000](http://localhost:3000).

5. **Open in Browser**  
    Visit [http://localhost:3000](http://localhost:3000) to view your Next.js application.

6. **Build for Production (Optional)**  
    To create an optimized production build:
    ```bash
    npm run build
    npm start
    ```

## Client-Side vs Server-Side Rendering in Next.js

- **Client-Side Rendering (CSR):**
  - The browser downloads a minimal HTML file and JavaScript bundle.
  - React takes over and renders content on the user's device.
  - Data fetching happens after the page loads, often using hooks like `useEffect`.
  - Good for highly interactive apps, but slower initial load and less SEO-friendly.

- **Server-Side Rendering (SSR):**
  - The server generates the full HTML for each request, including fetched data.
  - The browser receives a fully rendered page, improving initial load time and SEO.
  - In Next.js, use `getServerSideProps` to fetch data at request time.
  - Ideal for content that changes often or needs to be indexed by search engines.

## React Server Component
- React Server Components (RSC) allow React components to be rendered on the server.
- They enable data fetching and heavy computation on the server, reducing client-side JavaScript.
- RSCs do not include client-side interactivity by default; they are static and cannot use hooks like `useState` or `useEffect`.
- Useful for improving performance and reducing bundle size.
- In Next.js, server components are placed in files with the `.server.js` or `.server.tsx` extension, or in the `/app` directory.
- Can be combined with client components for interactive UI.
- Help optimize SEO and initial page load times.

# Project setup and run
