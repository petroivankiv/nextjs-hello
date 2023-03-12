import Date from 'components/date';
import Link from 'next/link';

export interface Item {
  date: string;
  title: string;
  id: string;
  topic: string;
}

type Props = {
  items: Item[];
};

export default function Cards({ items }: Props) {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
      {items.map((item) => (
        <Link key={item.id} href={`/posts/${item.id}`}>
          <a
            href="#"
            className="w-full lg:max-w-full lg:flex hover:bg-gray-100 hover:no-underline"
          >
            <div
              className="h-40 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: "url('images/ukraine-karpaty.jpg')" }}
              title="Forest"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-6">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  5 National Forests across the U.S.
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Rafael Martin</p>
                  <p className="text-gray-600">
                    <Date dateString={item.date} />
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
