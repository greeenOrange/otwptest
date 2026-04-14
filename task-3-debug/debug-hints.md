# Debug Hints

There are **5 bugs** in `broken-page.php`. They fall into these categories:

1. 🔒 **Security vulnerability** — One place where user-facing dynamic content is NOT properly escaped, allowing an XSS attack. Find where `echo` is used without `htmlspecialchars()` on data that could contain malicious code.

2. 🏗️ **HTML structure error** — Look carefully at the very end of the HTML document. Is the markup properly closed?

3. 🎨 **CSS syntax error** — One of the CSS blocks is missing something that will break styles for an entire section. Look at the media query carefully.

4. 🔢 **PHP logic error** — One of the loops produces the wrong number of items. A star rating of 5 should show 5 stars, not 6. Check the loop condition.

5. 🏷️ **Missing HTML tag** — The page title in the browser tab shows unsanitized data. Look at the `<title>` tag.

## Rules for fixing:
- Fix each bug directly in `broken-page.php`
- Make a **separate git commit** for each bug
- Write a clear commit message explaining what you found and how you fixed it

Example commit messages:
- `"fix: 
+ to prevent XSS"`
- `"fix: close missing curly brace in media query"`
