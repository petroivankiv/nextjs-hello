import Link from 'next/link';

import Date from 'components/date';

import utilStyles from '../../styles/utils.module.scss';

export interface Item {
  date: string;
  title: string;
  id: string;
}

type Props = {
  items: Item[];
  title: string;
};

export default function List({ items, title }: Props) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={`${utilStyles.headingLg} font-semibold`}>{title}</h2>
      <ul className={utilStyles.list}>
        {items.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
