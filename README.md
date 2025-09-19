# Post Manager - React + TypeScript + Vite

Dear Candidate,

Thank you for your interest in the React Developer position at Titanium Training. As part of our recruitment process, we would like you to complete a short practical assessment to demonstrate your skills in React and TypeScript.

---

## The Assessment

Build a small **Post Manager** application with full CRUD functionality using the JSONPlaceholder API.

### Requirements

**Fetch & Display Posts**  
- Endpoint: `GET https://jsonplaceholder.typicode.com/posts?_limit=10`  
- Display each post’s title and body.

**Create Post**  
- Endpoint: `POST https://jsonplaceholder.typicode.com/posts`  
- Provide a form to add a new post (title + body).  
- Immediately update the UI to reflect the new post.

**Update Post**  
- Endpoint: `PUT https://jsonplaceholder.typicode.com/posts/{id}`  
- Allow editing an existing post (title + body).  
- Reflect changes in the UI.

**Delete Post**  
- Endpoint: `DELETE https://jsonplaceholder.typicode.com/posts/{id}`  
- Add a button to delete a post.  
- Remove it from the UI after deletion.

### TypeScript Requirements
- Use strong typing for props, state, and API responses.  
- Avoid `any`.

### Bonus (Optional)
- Add pagination or search functionality.  
- Show success/error messages.  
- Properly comment on your logic.  
- Write a unit test for one component (React Testing Library).

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd <your-repo-folder>

2. **Clone the repository**
npm install

3. **Run the development server**
npm run dev
Open your browser at http://localhost:5173 - (default Vite port).

4. **Run tests**
npm run test