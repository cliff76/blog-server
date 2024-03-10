// index.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface BlogPost {
    content: string;
}

let blogPosts: BlogPost[] = [];

// Get all blog posts
app.get('/api/posts', (req: Request, res: Response<BlogPost[]>) => {
    res.json(blogPosts);
});

// Add a new blog post
app.post('/api/posts', (req: Request, res: Response<BlogPost>) => {
    const newPost: BlogPost = req.body;
    blogPosts.push(newPost);
    res.json(newPost);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
