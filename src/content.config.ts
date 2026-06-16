import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'prototype', 'research', 'archived']),
    tags: z.array(z.string()),
    date: z.date(),
    tools: z.array(z.string()),
    nextStep: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    featured: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    substack_url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
