import Link from "next/link";

const HeaderFront = () => {
  return (
    <>
      <header className="border-foreground/10 border-b py-3 shadow">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="">
            <Link
              href={"/"}
              className="text-2xl font-bold"
            >
              Banner
            </Link>
          </h1>

          <nav className="grid grid-flow-col-dense gap-4">
            <Link href={"/"}>Home</Link>

            <Link href={"/"}>About</Link>

            <Link href={"/"}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderFront;
