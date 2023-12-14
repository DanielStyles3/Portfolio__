export default {
    name:"testimonial",
    title:"Testimonails",
    type:'document',
    fields:[
        {
            name:"name",
            title:'Name',
            type:'string'
        },
        {
            name:"company",
            title:'Company',
            type:'string'
        },
        {
            name:"imageurl",
            title:'ImageUrl',
            type:'image',
            options:{
                hotspot:true,
            }
        },
        {
            name:"feedback",
            title:'FeedBack',
            type:'string'
        },




    ]
}