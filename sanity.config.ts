import {defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas'

const config = defineConfig({
    
    projectId: 'm0b8b1ou',
    dataset: 'production',
    title : "Lotus Glades",
    apiVersion: "2023-12-06",
    basePath: "/admin",
    plugins: [deskTool()],
    schema : {types: schemas }
})

export default config;