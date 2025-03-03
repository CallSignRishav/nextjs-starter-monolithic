import ThemeToggleButton from "@/components/ui/ThemeToggleButton";

const HeaderStudio = () => {
  return (
    <>
      <div className="border-foreground/10 container mx-auto flex items-center justify-between border-b px-6 py-3 shadow">
        <div className="text-2xl font-bold">Dashboard</div>

        <div className="">
          <ThemeToggleButton />
        </div>
      </div>
    </>
  );
};

export default HeaderStudio;
