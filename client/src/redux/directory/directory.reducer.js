const INITIAL_STATE = {
  sections: [
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1557684387-08927d28c72a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      /* size: "large", */
      id: 1,
      linkUrl: "shop/mens",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      /* size: "large", */
      id: 2,
      linkUrl: "shop/womens",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      id: 4,
      linkUrl: "shop/jackets",
    },
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      id: 5,
      linkUrl: "shop/hats",
    },
    {
      title: "accessories",
      imageUrl:
        "https://images.unsplash.com/photo-1521120098171-0400b4ec1319?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      id: 6,
      linkUrl: "shop/accessories",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
