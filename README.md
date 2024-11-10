# **Gaming Backlog Project**

## **Overview**
The **Gaming Backlog Project** is a web application designed to help gamers manage and track their game collections. Users can easily add games, categorize them based on their progress, platforms, and other attributes. The app aims to simplify the gaming experience by providing a structured way to organise gaming libraries.

## **Features**
- **Add Games:** Users can add new games to their backlog with essential details like title, platform, status (e.g., finished, in-progress).
- **Categorisation:** Categorise games by various criteria, allowing for easy filtering and sorting.
- **User-Friendly Interface:** Intuitive design using Vue 3 and Tailwind CSS for a smooth user experience.
- **State Management:** Utilise Pinia for efficient state management, making data handling straightforward.
- **Routing:** Implement Vue Router to navigate between different views (e.g., game list, game details).
- **Backend Integration:** Node.js and Express provide a robust backend, with MongoDB for storing user data and game information.
- **Responsive Design:** Optimised for various devices to enhance accessibility for all users.

## **Tech Stack**
- **Frontend:**
    - Vue 3: Frontend framework for building user interfaces.
    - Tailwind CSS: Utility-first CSS framework for styling.
    - TypeScript: Typed superset of JavaScript for better tooling and code quality.
    - Pinia: State management for Vue applications.
    - Vue Router: Routing library for navigating between views.

- **Backend:**
    - Node.js: JavaScript runtime for server-side development.
    - Express: Web framework for Node.js to build APIs.
    - MongoDB: NoSQL database for storing game data and user information.

- **Deployment:**
    - Netlify: Platform for deploying frontend applications.

## **Getting Started**

### **Prerequisites**
- Node.js installed on your machine.
- Basic understanding of Vue.js, TypeScript, and RESTful APIs.

### **Installation**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Babahle/gaming-backlog.git
   cd gaming-backlog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run serve
   ```

### **Usage**
- Navigate to `http://localhost:3000` to access the application.
- Use the sidebar to filter games by category.
- Click on a game to view its details or edit its status.

## **Contributing**
Contributions are welcome! Please follow the contribution guidelines outlined in the [Contribution Guidelines](#contribution-guidelines) section.

## **License**
This project is licensed under the Apache License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customise the template to better fit your project's specific details and requirements!

---

# **Contribution Guidelines for Gaming Backlog Project**

## **Table of Contents**
1. [Branch Naming Conventions](#branch-naming-conventions)
2. [Commit Message Guidelines](#commit-message-guidelines)
3. [Pull Request Workflow](#pull-request-workflow)
4. [File and Folder Structure](#file-and-folder-structure)
5. [Code Style and Linting](#code-style-and-linting)

---

## **1. Branch Naming Conventions**
Branches must follow this structure:
```
<type>/<short-description>
```
- Use **lowercase** and **kebab-case** (e.g., `feat/add-game-class`).
- Ensure the name reflects the purpose of the branch.

### **Branch Types:**
| Type      | Description                               | Example                     |
|-----------|-------------------------------------------|-----------------------------|
| `feat`    | Adding a new feature                      | `feat/add-game-class`       |
| `fix`     | Fixing a bug                              | `fix/router-navigation-issue` |
| `refactor`| Code refactor without changing behaviour  | `refactor/pinia-store-logic`|
| `style`   | CSS or UI updates                         | `style/update-theme`        |
| `chore`   | Maintenance tasks                         | `chore/update-dependencies` |
| `docs`    | Documentation updates                     | `docs/add-readme`           |
| `hotfix`  | Urgent fixes for production               | `hotfix/game-list-crash`    |

---

## **2. Commit Message Guidelines**
Follow the **Conventional Commits** format:
```
<type>(scope): <short-description>
```
- **Type**: Same types as branch names (`feat`, `fix`, etc.).
- **Scope**: Optional but useful (e.g., `(game)`, `(ui)`).
- **Short Description**: Clear summary (50 characters max).

### **Examples:**
- `feat(game): add Game class for data structure`
- `fix(router): resolve navigation issue with sidebar`
- `chore: configure eslint and prettier`
- `docs: update README with contribution guide`

### **Additional Commit Guidelines:**
- Use **imperative tone**: “Add” instead of “Added” or “Adding”.
- Capitalise the first letter of the message.
- Keep lines under 72 characters for better readability.

---

## **3. Pull Request Workflow**
1. **Branch from** the `main` branch:
   ```bash
   git checkout -b feat/add-game-class
   ```
2. Ensure your work is complete and **passes tests** (if applicable).
3. Use meaningful **PR titles** and provide a clear description.
4. Tag reviewers and link to relevant **issues** if necessary.
5. After approval, **squash and merge** changes into the main branch.

---

## **4. File and Folder Structure**
Organise components logically to ensure easy maintenance and scalability.

### **Example Folder Structure:**
```
/src
  /components
    /GameCard.vue
    /Sidebar.vue
  /views
    /Home.vue
    /GameDetails.vue
  /store
    /gameStore.ts
  /assets
    /styles
      /tailwind.css
  App.vue
  main.ts
```

- **components**: Reusable UI components.
- **views**: Pages or views of the application.
- **store**: State management (e.g., Pinia).
- **assets**: Static files like images, fonts, and global styles.

---

## **5. Code Style and Linting**
1. Use **Prettier** and **ESLint** to maintain code consistency.
2. **Tailwind CSS** will handle styling, and avoid unnecessary CSS overrides.
3. Run the linter before committing:
   ```bash
   npm run lint
   ```

---

## **6. Example Workflow Summary**
1. **Create a branch:**
   ```bash
   git checkout -b feat/add-game-class
   ```

2. **Commit your work:**
   ```bash
   git add .
   git commit -m "feat(game): add Game class for data structure"
   ```

3. **Push the branch:**
   ```bash
   git push origin feat/add-game-class
   ```

4. **Create a pull request** on GitHub.

---

By following these guidelines, we ensure our project stays organised, easy to maintain, and efficient to collaborate on.

