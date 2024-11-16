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

