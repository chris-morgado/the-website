import Link from "next/link";

type Contact = {
    link: string,
    name: string
}

const Links: React.FC<Contact> = ({link, name}) => {
    return (
        <Link href={link} className="contact-component">
          <p>{name}</p>
        </Link>
      );
}

export default Links;