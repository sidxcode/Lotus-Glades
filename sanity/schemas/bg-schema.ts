const bg = 
{
    name: 'bg',
    title: 'Bg',
    type: 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string',
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {source : 'name'},
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : { hotspot: true },
            fields : [
                {
                    name : 'alt',
                    title : 'Alt',
                    type : 'string',
                }
            ]
        },
    ]
};

export default bg;