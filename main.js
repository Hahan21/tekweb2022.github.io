Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {
        title: "Hahan Rizky",
        description: "Memuat berbagai tulisan yang saya buat dengan sentuhan tangan kasih sayang tulus namun di sia-sia kan.",
        social: {
          ig: {
            url: "https://instagram.com/hahanrizky",
            title: "hahanrizky",
          },
          github: {
            url: "https://github.com/.com/Hahan21",
            title: "Hahan21",
          },
          yt: {
            url: "https://www.youtube.com/channel/UCPHSTcP8TQcS4AODqva3aAw",
            title: "Hahan Rizky",
          },
        },
        imageProfile: "https://raw.githubusercontent.com/Hahan21/tekweb2022.github.io/main/images/hahan-removebg.png",
      },
      articles: [
        {
          title: "The Magic of Vue",
          description: "This is your first looping using Vue",
          thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        },
      ],
    };
  },
  mounted: () => {
    axios
      .get("./contents/header.json")
      .then((res) => {
        console.log(res.data());
      })
      .catch((error) => {
        console.log(error);
      });
  },
}).mount("#app");
