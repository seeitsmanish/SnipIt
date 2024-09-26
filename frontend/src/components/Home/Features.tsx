import { FileCode, Hash, UsersRound } from "lucide-react";

const Features = () => {
  return (
    <div className="mt-10 flex flex-col gap-5 p-2 text-white md:mt-14 md:h-[300px] md:flex-row lg:h-[250px]">
      <div className="flex h-full w-full flex-col justify-center rounded-xl border border-slate-700 bg-slate-900 bg-opacity-50 p-10 backdrop-blur-lg duration-300 hover:bg-purple-950 hover:bg-opacity-10 md:w-1/3 md:p-5">
        <UsersRound />
        <h3 className="mt-3 text-xl font-medium">Real-time collaboration</h3>
        <p className="mt-3 text-slate-600">
          Write and share code with your team in real time.
        </p>
      </div>
      <div className="flex h-full w-full flex-col justify-center rounded-xl border border-slate-700 bg-slate-900 bg-opacity-50 p-10 backdrop-blur-lg duration-300 hover:bg-purple-950 hover:bg-opacity-10 md:w-1/3 md:p-5">
        <FileCode />
        <h3 className="mt-3 text-xl font-medium">Syntax highlighting</h3>
        <p className="mt-3 text-slate-600">
          See your code come alive with syntax highlighting.
        </p>
      </div>
      <div className="flex h-full w-full flex-col justify-center rounded-xl border border-slate-700 bg-slate-900 bg-opacity-50 p-10 backdrop-blur-lg duration-300 hover:bg-purple-950 hover:bg-opacity-10 md:w-1/3 md:p-5">
        <Hash />
        <h3 className="mt-3 text-xl font-medium">Intuitive room slugs</h3>
        <p className="mt-3 text-slate-600">
          Automatically generates easy-to-remember room slugs.
        </p>
      </div>
    </div>
  );
};

export default Features;
