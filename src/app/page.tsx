import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="">
        <header className="pb-2">
          <h1 className="font-areal text-sm font-medium tracking-tighter uppercase">
            Simon Nancekievill
          </h1>
          <h2 className="font-mono text-xs uppercase text-gray-500">
            Frontend Developer | Photographer |
          </h2>
        </header>
        <p className="font-areal text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptates blanditiis necessitatibus aliquid quidem debitis, id
          quisquam pariatur placeat reprehenderit ratione nemo cumque saepe
          aperiam tempore quaerat ex ducimus eos.
        </p>
        <nav className="flex gap-2 my-4">
          <Link
            href=""
            className="font-areal text-xs underline tracking-tight text-gray-500"
          >
            LinkedIn
          </Link>
          <Link
            href=""
            className="font-areal text-xs underline tracking-tight text-gray-500"
          >
            GitHub
          </Link>
          <Link
            href=""
            className="font-areal text-xs underline tracking-tight text-gray-500"
          >
            E-Mail
          </Link>
        </nav>
      </section>
      <section className="">
        <h2 className="font-mono text-xs uppercase text-gray-500">Work</h2>
      </section>
    </>
  );
}
