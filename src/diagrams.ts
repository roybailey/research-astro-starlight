import * as fs from 'fs';
import * as path from 'path';

interface CodeBlock {
    id: string;
    type: string;
    content: string;
}

export function extractCodeBlocks(filePath: string): CodeBlock[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const codeBlocks: CodeBlock[] = [];

    const regex = /```(\w+)\n([\s\S]*?)```/g;
    let match;
    let id = 0;

    while ((match = regex.exec(fileContent)) !== null) {
        const [, type, content] = match;

        codeBlocks.push({
            id: (id++).toString(),
            type,
            content: content.trim(),
        });
    }

    return codeBlocks;
}

export async function getAllMdxFileNames(baseDir: string): Promise<CodeBlock[]> {
    const dirPath = path.resolve(baseDir);
    const mdxFiles: string[] = [];

    function walkDir(currentPath: string) {
        const entries = fs.readdirSync(currentPath, { withFileTypes: true });
        console.log("getAllMdxFileNames::Scanning "+currentPath);
        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);
            if (entry.isDirectory()) {
                walkDir(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
                const relative = path.relative(dirPath, fullPath);
                mdxFiles.push(relative);
            }
        }
    }

    walkDir(dirPath);
    console.log(JSON.stringify(mdxFiles, null, 2));

    // Return an array of objects with filename info
    return mdxFiles.map((filename, index) => ({
        id: index.toString(),
        type: filename,
        content: filename,
    }));
}
