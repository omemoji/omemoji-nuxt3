import LinkList from "components/LinkList";
export default function Footer() {
  return (
    <footer className="h-24 flex px-4 border-t">
      <div className="my-auto">&copy; omemoji</div>
      <LinkList className="my-auto ml-auto" />
    </footer>
  );
}
