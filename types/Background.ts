export type Background = {
    _id: string;
    _createdAt: Date;
    _type: "background";
    name: string;
    video: File;
    loop: boolean;
    muted: boolean;
}