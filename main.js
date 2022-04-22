Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      header: {},
      articles: [],
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get("contents/header.json")
        .then((res) => {
          this.header = res.data;
          this.getArticles();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get("contents/articles.json")
        .then((res) => {
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeaderData();
  },
}).mount("#app");
