"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3001;
app.use(body_parser_1.default.json());
let blogPosts = [];
// Get all blog posts
app.get('/api/posts', (req, res) => {
    res.json(blogPosts);
});
// Add a new blog post
app.post('/api/posts', (req, res) => {
    const newPost = req.body;
    blogPosts.push(newPost);
    res.json(newPost);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
