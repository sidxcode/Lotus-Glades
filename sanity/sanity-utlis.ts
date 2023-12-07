import { createClient, groq } from "next-sanity";
import { Project } from '@/types/Project';
import { Background } from '@/types/Background';
import { Carousel } from "@/types/Carousel";

export async function getProjects(): Promise<Project[]>  {

    const client = createClient({
        
        projectId: 'm0b8b1ou',
        
        dataset: 'production',
        
        apiVersion: "2023-12-06",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image" : image.asset->url,
            alt,
            url,
            content,
        }`

    )

}

export async function getBackground(backgroundId : string) : Promise<Background> {
    const client = createClient({
        projectId: "m0b8b1ou",
        dataset : 'production',
        apiVersion :'2023-12-06',
    });

    return client.fetch(
        groq`*[_type == 'background' && _id == '${backgroundId}']{
            _id,
            video {
                asset {
                    _ref,
                    url
                }
            },
            loop,
            muted,
        }`
    )
}

export async function getCarousel(): Promise<Carousel[]>  {

    const client = createClient({
        
        projectId: 'm0b8b1ou',
        
        dataset: 'production',
        
        apiVersion: "2023-12-06",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            "slug": slug.current,
            "image" : image.asset->url,
            alt,
            url,
        }`

    )

}

