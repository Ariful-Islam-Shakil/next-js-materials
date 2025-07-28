# Working with Backend APIs in Next.js (Modular Approach)

## 1. Organize API Logic

Create a dedicated folder (e.g., `/lib/api` or `/services`) for API functions.

```bash
mkdir lib/api
```

## 2. Create API Utility Files

Example: `lib/api/user.js`

```js
// lib/api/user.js
export async function fetchUser(id) {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error('Failed to fetch user');
    return res.json();
}
```

## 3. Use API Functions in Components

Import and use your API functions in React components or pages.

```js
import { fetchUser } from '../lib/api/user';

export default function UserPage({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUser(userId).then(setUser);
    }, [userId]);

    // Render user info...
}
```

## 4. Server-Side Data Fetching

Use API utilities in `getServerSideProps` or `getStaticProps`.

```js
// pages/users/[id].js
import { fetchUser } from '../../lib/api/user';

export async function getServerSideProps({ params }) {
    const user = await fetchUser(params.id);
    return { props: { user } };
}
```

## 5. Centralize Configuration

Store base URLs and headers in a config file.

```js
// lib/api/config.js
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
```

## 6. Error Handling & Reusability

- Handle errors in utility functions.
- Reuse API utilities across components and pages.

## 7. Example Folder Structure

```
/lib/api/
    user.js
    product.js
    config.js
/pages/
    users/[id].js
    products/[id].js
/components/
    UserProfile.js
```

## 8. Benefits

- Separation of concerns
- Easier maintenance and testing
- Reusable API logic

# My project api

 
## Example: Fetching GitHub Repo Info via FastAPI (GET Method)

### 1. Create API Utility

```js
// lib/api/github.js
import { FASTAPI_URL } from './config';

export async function fetchRepoInfo(repoUrl) {
    const url = `${FASTAPI_URL}?repo_url=${encodeURIComponent(repoUrl)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch repo info');
    return res.json();
}
```

### 2. Use in Component

```js
import { fetchRepoInfo } from '../lib/api/github';

export default function RepoInfo({ repoUrl }) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetchRepoInfo(repoUrl).then(setInfo);
    }, [repoUrl]);

    // Render owner, repo name, branches...
}
```

### 3. Server-Side Fetching

```js
// pages/repo.js
import { fetchRepoInfo } from '../lib/api/github';

export async function getServerSideProps({ query }) {
    const info = await fetchRepoInfo(query.repoUrl);
    return { props: { info } };
}
```

### 4. Centralize API URL

```js
// lib/api/config.js
export const FASTAPI_URL = 'http://localhost:8800/get_owner';
```

### 5. Folder Structure Example

```
/lib/api/
    github.js
    config.js
/pages/
    repo.js
/components/
    RepoInfo.js
```
