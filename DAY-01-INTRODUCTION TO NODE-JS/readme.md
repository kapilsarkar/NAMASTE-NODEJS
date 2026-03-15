# Node.js Notes

## Episode 01 — Introduction to Node.js

---

# 1. What is Node.js?

* **Node.js** is a **JavaScript runtime environment** built on **Google Chrome's V8 JavaScript Engine**.

* It allows developers to **run JavaScript outside the web browser**, primarily on the **server side**.

* Node.js is designed to build **scalable network applications**.

### Key Features

* Built on **Chrome's V8 JavaScript Engine**
* **Cross-platform** (runs on Windows, Linux, macOS)
* **Open-source**
* Maintained by the **OpenJS Foundation**
* Allows JavaScript to run on the **server**

---

# 2. Is Node.js related to Event-Driven Architecture?

Yes.

Node.js follows an **event-driven architecture**.

This means Node.js applications respond to **events** such as:

* HTTP requests
* File system operations
* Database responses
* Network communication

Instead of waiting for operations to finish, Node.js continues executing other tasks and processes the result once the event completes.

---

# 3. What is Async I/O?

**Async I/O** stands for **Asynchronous Input/Output**.

In Node.js, I/O operations such as:

* Reading files
* Database queries
* API requests
* Network operations

are performed **asynchronously**.

### Non-Blocking I/O

Node.js uses **Non-Blocking I/O**, meaning it does not stop the execution of other tasks while waiting for an operation to complete.

Example:

If Node.js is waiting for a database response, it can continue handling **other incoming requests** instead of blocking the server.

This makes Node.js very efficient for handling **multiple concurrent requests**.

---

# 4. History of Node.js

* **Node.js** was created by **Ryan Dahl** in **2009**.

* To execute JavaScript, a **JavaScript Engine** is required.

Examples of JavaScript engines:

* **V8 Engine** → Used in Google Chrome
* **SpiderMonkey** → Used in Mozilla Firefox

Initially, Ryan Dahl experimented with **SpiderMonkey**, but within a short time he switched to **Google's V8 Engine** due to its **high performance**.

V8 compiles JavaScript directly into **machine code**, making execution very fast.

Originally, Ryan Dahl named the project **Web.js** because he wanted to build **web servers using JavaScript**. Later the name was changed to **Node.js**.

During its early development, a company called **Joyent** supported the Node.js project.

---

# 5. Node.js vs Apache HTTP Server

Before Node.js became popular, **Apache HTTP Server** was widely used to handle web requests.

### Apache Server

* Uses a **thread-per-request architecture**
* Each request is handled by a **separate thread**
* Can become resource-heavy when handling many requests simultaneously

### Node.js Server

* Uses **event-driven architecture**
* Uses **non-blocking I/O**
* Can handle **thousands of concurrent requests with fewer resources**

This makes Node.js particularly suitable for **highly scalable applications**.

---

# 6. What is NPM?

**NPM** stands for **Node Package Manager**.

It was introduced in **2010** and is the **default package manager for Node.js**.

NPM has two main parts:

### 1. NPM Registry

A large **online repository of open-source JavaScript packages**.

Developers can download packages for various tasks such as:

* Working with dates
* File uploads
* Authentication
* Database handling
* Image processing

### 2. NPM CLI

A **command line tool** used to install and manage packages.

Example:

npm install express

This command installs the **Express.js framework**.

---

# 7. How Node.js Was Forked and Merged

In **2014**, a developer named **Fedor Indutny** created a fork of Node.js called **io.js** due to disagreements within the community regarding development governance.

The io.js project aimed to move development faster.

In **2015**, the **Node.js** and **io.js** communities decided to merge back together to unify development.

---

# 8. Formation of the OpenJS Foundation

In **2019**, two major JavaScript organizations merged:

* **Node.js Foundation**
* **JS Foundation**

They combined to form the **OpenJS Foundation**, which now governs and maintains Node.js and other JavaScript projects.

---

# Node.js Today

Node.js continues to be one of the **most popular technologies for backend development**.

It is widely used for:

* REST APIs
* Real-time applications
* Microservices
* Streaming platforms
* Full-stack JavaScript applications (MERN / MEAN)

---

# Summary

Node.js is a powerful **JavaScript runtime environment** that allows developers to build **fast and scalable server-side applications** using JavaScript.

Its **event-driven architecture** and **non-blocking I/O model** make it ideal for handling **large numbers of concurrent connections efficiently**.
