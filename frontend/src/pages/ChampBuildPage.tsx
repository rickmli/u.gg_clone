import { GoDotFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";

function ChampBuildPage() {
  return (
    <div
      className={`flex h-screen justify-center overflow-hidden`}
      style={{ backgroundColor: "#07071F", color: "#CDDCFE" }}
    >
      <header></header>
      {/* wrapper */}
      <div className="chmpInfo w-auto max-w-[1600px] p-8 outline-lime-100">
        {/* champ content */}
        <div className="flex h-24 items-center gap-5">
          {/* champ icon */}
          <div className="h-full w-24 shrink-0 bg-white">pykee</div>
          {/* champ details */}
          <div className="flex h-full flex-col justify-between">
            {/* title */}
            <div className="flex items-center">
              <h1>
                <span className="mr-2 text-white">Pyke</span>
                Build for {"Support"}, {"Emerald+"}
              </h1>
              <div
                className="ml-2 px-2 py-1"
                style={{ backgroundColor: "#191937" }}
              >
                Patch {"15.23"}
              </div>
            </div>

            <div className="flex items-center gap-10">
              {/* champ skills */}
              <div className="flex-column flex gap-2">
                <div className="h-12 w-12 bg-white">skill</div>
                <div className="h-12 w-12 bg-white">skill</div>
                <div className="h-12 w-12 bg-white">skill</div>
                <div className="h-12 w-12 bg-white">skill</div>
                <div className="h-12 w-12 bg-white">skill</div>
              </div>

              {/* page description */}
              <p>
                {"Pyke"} with U.GG's best data for every build. The highest win
                rate {"Pyke"} build, from rune set to skill order to item path,
                for Support. LoL Patch {"15.23"}
              </p>
            </div>
          </div>
        </div>

        {/* options */}
        <ul className="mt-8 flex gap-6 text-white">
          <li className="active text-[#3373FA] after:mt-2 after:block after:h-0.5 after:w-full after:bg-[#3373FA] after:content-['']">
            Build
          </li>
          <li>
            ARURF
            <span className="tag-new ml-2 inline-flex items-center justify-center rounded-md bg-[#3373FA] px-2 py-0.5">
              NEW
            </span>
          </li>
          <li>
            ARURF
            <span className="tag-new ml-2 inline-flex items-center justify-center rounded-md bg-[#3373FA] px-2 py-0.5">
              NEW
            </span>
          </li>
          <li>ARAM</li>
          <li>Counters</li>
          <li>Leaderboards</li>
          <li>Pro Builds</li>
          <li>More Stats</li>
        </ul>
        <div className="mt-8 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <IoFilter className="h-5 w-5 text-[#3373FA]" />
            Filters
          </div>
          <div className="flex w-30 items-center justify-between rounded-sm bg-[#11112B] p-2">
            Rec.
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 bg-white">2</div>
              <div className="h-4 w-4 bg-white">3</div>
            </div>
          </div>
          <div className="h-9 w-1 border-l-2 border-[#1e1e2f]"></div>
          <div className="flex w-30 items-center justify-center gap-3 rounded-sm bg-[#11112B] p-2">
            <div className="h-4 w-4 bg-white">2</div>
            Support
          </div>
          <div className="flex items-center justify-center gap-3 rounded-sm bg-[#11112B] p-2">
            <div className="h-4 w-4 bg-white">2</div>
            {"Emerald +"}
          </div>
          <div className="flex items-center justify-between rounded-sm bg-[#11112B] px-4 py-2">
            <input placeholder="vs. Champion..." />
            <IoIosSearch size={20} />
          </div>
          <div className="flex items-center gap-3 rounded-sm bg-[#11112B] px-4 py-2">
            <RiToolsFill className="h-5 w-5 text-[#3373FA]" />
            More...
          </div>
        </div>
        {/* Champ tier */}
        <div className="mt-6 grid grid-cols-6 gap-0.5 text-center">
          <p className="flex flex-col items-center justify-center bg-[#11112B] py-6">
            <span className="block text-xl font-bold text-[#7EA4F4]">
              {"A"}
            </span>
            <span className="text-xs">Tier</span>
          </p>
          <p className="flex flex-col items-center justify-center bg-[#11112B] py-6">
            <span className="block text-xl font-bold text-white">
              {"49.8%"}
            </span>
            <span className="text-xs">Win Rate</span>
          </p>
          <p className="flex flex-col items-center justify-center bg-[#11112B] py-6">
            <span className="block text-xl font-bold text-white">
              {"27 / 47"}
            </span>
            <span className="text-xs">Rank</span>
          </p>
          <p className="flex flex-col items-center justify-center bg-[#11112B] py-6">
            <span className="block text-xl font-bold text-white">{"6.7%"}</span>
            <span className="text-xs">Pick Rate</span>
          </p>
          <p className="flex flex-col items-center justify-center bg-[#11112B] py-6">
            <span className="block text-xl font-bold text-white">
              {"27.6%"}
            </span>
            <span className="text-xs">Ban Rate</span>
          </p>
          <p className="flex flex-col items-center justify-center bg-[#11112B] py-6">
            <span className="block text-xl font-bold text-white">
              {"88,062"}
            </span>
            <span className="text-xs">Matches</span>
          </p>
        </div>

        {/* recommendation */}
        <div className="mt-4 text-white">
          <div className="inline-flex items-center gap-3 rounded-t-sm border-t-2 border-t-amber-500 bg-[#202042] p-2 text-white">
            <span className="text-xl">Recommended</span>
            <span className="h-5 w-5 bg-white">1</span>
            <span className="h-5 w-5 bg-white">1</span>
          </div>

          <div className="flex gap-0.5">
            {/* rune */}
            <div className="flex-1 bg-[#202042] px-4 py-6 pt-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 h-5 w-0.5 bg-blue-600"></div>
                  <p>
                    {"Pyke"} Runes{" "}
                    <span className="ml-2 text-gray-600">
                      Pyke Support Build
                    </span>
                  </p>
                </div>
                <p>
                  {"54.18%"} WR{" "}
                  <span className="text-[#C5D4F6]">({"3,477 Matches"})</span>
                </p>
              </div>
              <div className="flex h-100 justify-between gap-10">
                <div className="flex flex-1 flex-col justify-between">
                  <p className="mb-4 flex w-full items-center rounded-md bg-[#11112B] p-2">
                    <span className="mr-2 inline-block h-7 w-7 bg-white">
                      1
                    </span>
                    <span>Domination</span>
                  </p>

                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="h-px w-full scale-y-50 bg-gray-400"></div>

                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                </div>
                <div className="mr-auto flex flex-1 flex-col justify-between gap-4">
                  <p className="mb-4 flex w-full items-center rounded-md bg-[#11112B] p-2">
                    <span className="mr-2 inline-block h-7 w-7 bg-white">
                      1
                    </span>
                    <span>Resolve</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="gray" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="h-px w-full scale-y-50 bg-gray-400"></div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <GoDotFill color="white" size={16} />
                    <span className="inline-block h-7 w-7 bg-white">1</span>
                    <span className="inline-block h-7 w-7 bg-white">2</span>
                    <span className="inline-block h-7 w-7 bg-white">3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-0.5">
              {/* summ spells */}
              <div className="bg-[#191937] px-4 py-6 pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 h-5 w-0.5 bg-blue-600"></div>
                    <p>Summoner Spell</p>
                  </div>
                  {"49.89%"} WR
                </div>
                <div>
                  <span className="mr-4 inline-block h-8 w-8 bg-white">1</span>
                  <span className="inline-block h-8 w-8 bg-white">1</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="w-full flex-1 rounded-md bg-gray-500 text-black">
                  video
                </div>
                <div className="bg-[#191937] p-4">
                  <span className="block">Panta Kill as Pyke</span>
                  <span className="text-sm text-[#CDDCFE]">
                    vivace#flow - 5v5 Draft Pick, 103 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>thoughest match ups</div>
          <div>skills recommandation</div>
          <div>items</div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default ChampBuildPage;
