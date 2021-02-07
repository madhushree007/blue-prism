const fakePosts = {
  pages: [
    { id: 1, name: 'first post', type: 'main-page', published: true, stagesCount: 5 },
    { id: 2, name: 'second post', type: 'main-page', published: true, stagesCount: 5 },
  ],
};

export async function fetchPages() {
  return fakePosts;
}