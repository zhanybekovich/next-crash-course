import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <Link className="text-secondary fw-bold" href="/">
              FarmFresh
            </Link>
            . All Rights Reserved. Designed by{" "}
            <a
              className="text-secondary fw-bold"
              target="_blank"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
