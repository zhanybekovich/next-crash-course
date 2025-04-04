import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href="/blog/1">Новость 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Новость 2</Link>
        </li>
        <li>
          <Link href="/blog/2">Новость 3</Link>
        </li>
      </ul>
    </>
  );
}
