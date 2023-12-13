import { createClient,groq } from "next-sanity";
import {Test} from '@/types/Test';
import { Bg } from "@/types/Bg";


export async function getBg(): Promise<Bg[]> {
    const client = createClient({
        projectId: 'm0b8b1ou',
        dataset: 'production',
        apiVersion: '2023-12-06',
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == 'test']{
            _id,
            _createdAt,
            name,
            'slug':slug.current,
            'image': image.asset->url,
            url,
            content,
        }`
    )
    
}

export async function getTests(): Promise<Test[]> {
    const client = createClient({
        projectId: 'm0b8b1ou',
        dataset: 'production',
        apiVersion: '2023-12-06',
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == 'test']{
            _id,
            _createdAt,
            name,
            'slug':slug.current,
            'image': image.asset->url,
            url,
            content,
        }`
    )

}