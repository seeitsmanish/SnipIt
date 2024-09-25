import { FileCode, Hash, UsersRound } from "lucide-react";

const Features = () => {
  return (
    <div className="mt-14 flex h-[250px] gap-5 p-2 text-white">
      <div className="flex h-full w-1/3 flex-col justify-center rounded-xl border border-slate-700 bg-slate-900 bg-opacity-50 p-10 duration-300 hover:bg-purple-950 hover:bg-opacity-10">
        <UsersRound />
        <h3 className="mt-3 text-xl font-medium">Real-time collaboration</h3>
        <p className="mt-3 text-slate-600">
          Write and share code with your team in real time.
        </p>
      </div>
      <div className="flex h-full w-1/3 flex-col justify-center rounded-xl border border-slate-700 bg-slate-900 bg-opacity-50 p-10 duration-300 hover:bg-purple-950 hover:bg-opacity-10">
        <FileCode />
        <h3 className="mt-3 text-xl font-medium">Syntax highlighting</h3>
        <p className="mt-3 text-slate-600">
          See your code come alive with syntax highlighting.
        </p>
      </div>
      <div className="flex h-full w-1/3 flex-col justify-center rounded-xl border border-slate-700 bg-slate-900 bg-opacity-50 p-10 duration-300 hover:bg-purple-950 hover:bg-opacity-10">
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
