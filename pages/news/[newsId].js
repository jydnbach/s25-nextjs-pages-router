import { useRouter } from 'next/router';

//  main-domain.com/news/detail

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log(newsId);

  return <h1>DetailPage</h1>;
}
export default DetailPage;
