export const Navv = () => {  
  [
    {
      id: 1,
      name: "App CMS",
      url: "/",
      child: [
        { id: 1, name:"Sauna", url:"/sauna" },
        { id: 2, name:"Cafe", url:"/cafe" },
        { id: 3, name:"Hair", url:"/hair" },
        { id: 4, name:"Beauty", url:"/beauty" },
        { id: 5, name:"Body", url:"/body" }
      ]
    },
    {id: 2, name: "Video", url: "/video", child:[]},
    {id: 3, name: "Review", url: "/review", child:[]},
    {id: 4, name: "Gift", url: "/gift", child:[]},
    {id: 5, name: "Booking", url: "/booking", child:[]},
    {id: 6, name: "Gallery", url: "/gallery", child:[]},
  ]
}