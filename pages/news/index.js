import Link from 'next/link';
//  main-domain.com/news

function NewsPage() {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">nextjs</Link>
        </li>
        <li>nextjs 2</li>
      </ul>
    </>
  );
}
export default NewsPage;
