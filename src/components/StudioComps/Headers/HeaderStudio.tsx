import ThemeToggleButton from "@/components/ui/ThemeToggleButton";

const HeaderStudio = () => {
  return (
    <>
      <header className="border-foreground/10 border-b shadow">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <div className="text-2xl font-bold">Dashboard</div>

          <div className="">
            <ThemeToggleButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderStudio;
