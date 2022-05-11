type tHeader = {
  title: string;
};

export default function Header({ title }: tHeader) {
  return <h1 className="title">{title}</h1>;
}
