import {defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    
    projectId: 'm0b8b1ou',
    dataset: 'production',
    title : "lg-sanity",
    apiVersion: "2023-12-6",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config;