import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ActiveLink({ href, text }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={
        router.asPath === href
          ? 'navbar-link-active navbar-link'
          : 'navbar-link'
      }
    >
      {text}
    </Link>
  );
}
