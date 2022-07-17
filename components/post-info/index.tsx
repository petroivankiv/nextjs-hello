import Date from 'components/date';

type Props = {
  post: {
    topic: string;
    date: string;
  };
};

export default function PostInfo({ post: { topic, date } }: Props) {
  return (
    <small className="text-gray-500">
      <span className="mr-2">{topic}</span>
      <span className="mr-2">|</span>
      <Date dateString={date} />
    </small>
  );
}
