import Link from 'next/link';

import PostInfo from 'components/post-info';

export interface Item {
  date: string;
  title: string;
  id: string;
  topic: string;
}

type Props = {
  items: Item[];
  title: string;
};

export default function List({ items, title }: Props) {
  return (
    <section className="leading-normal pt-1 text-xl">
      <h2 className="text-3xl leading-normal font-semibold mt-2">{title}</h2>
      <ul className="list-none m-0 p-0">
        {items.map((item) => (
          <li className="my-4" key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <a>{item.title}</a>
            </Link>
            <br />
            <PostInfo post={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
