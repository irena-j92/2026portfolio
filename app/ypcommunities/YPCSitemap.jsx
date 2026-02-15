import React from 'react';

const YPCSitemap = () => {
  const paths = {
    home: {
      title: "Home",
      children: [
        {
          title: "About",
          children: [
            { title: "About us" },
            { title: "FAQs" },
            { title: "Contact" }
          ]
        },
        {
          title: "Programming & Events",
          children: [
            { title: "Programming" },
            { title: "Local Events" },
            { title: "Submit event" }
          ]
        },
        {
          title: "YPMedia",
          children: [
            { title: "YPMedia Home" },
            { title: "Community" },
            { title: "Pathways" },
            { title: "Impact" },
            { title: "Experiences" },
            { title: "1000 Cuts" }
          ]
        },
        {
          title: "Get involved",
          children: [
            { title: "Join the community" },
            { title: "Join the team" },
            { title: "Corporate Membership" }
          ]
        },
        {
          title: "Find your community",
          children: [
            { title: "Seattle, WA" },
            { title: "Portland, OR" },
            { title: "San Francisco, CA" },
            { title: "Find your city" },
            { title: "Launch your city" }
          ]
        }
      ]
    }
  };

  const Node = ({ title, isRoot = false, isParent = false }) => (
    <div className={`
      relative px-3 md:px-4 py-2 md:py-3 rounded-lg text-center text-xs md:text-sm
      ${isRoot ? 'bg-gray-200 border border-gray-400 text-black font-medium' : ''}
      ${isParent && !isRoot ? 'text-gray-200 bg-[#333333]' : ''}
      ${!isParent && !isRoot ? 'text-gray-400 border border-gray-400' : ''}
      shadow-md hover:shadow-lg transition-shadow
    `}>
      {title}
    </div>
  );

  const VerticalConnector = () => (
    <div className="h-6 md:h-10 border-l border-gray-400 mx-auto"></div>
  );

  const HorizontalConnector = () => (
    <div className="w-6 md:w-10 border-t border-gray-400 my-auto"></div>
  );

  return (
    <div className="w-full p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop View (lg and above) */}
        <div className="hidden lg:block">
          <div className="flex flex-col items-center">
            {/* Root Node */}
            <Node title={paths.home.title} isRoot={true} />
            <VerticalConnector />

            {/* Main Categories Container */}
            <div className="flex flex-col items-center w-full">
              <div className="grid grid-cols-5 gap-8 w-full max-w-6xl">
                {paths.home.children.map((category, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Category Node */}
                    <Node title={category.title} isParent={true} />
                    {category.children && (
                      <>
                        <VerticalConnector />
                        {/* Sub-categories */}
                        <div className="flex flex-col items-center gap-4">
                          {category.children.map((subcat, subIdx) => (
                            <Node key={subIdx} title={subcat.title} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tablet View (md to lg) */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col items-center">
            {/* Root Node */}
            <Node title={paths.home.title} isRoot={true} />
            <VerticalConnector />

            {/* Main Categories Container - 2 columns */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
              {paths.home.children.map((category, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Category Node */}
                  <Node title={category.title} isParent={true} />
                  {category.children && (
                    <>
                      <VerticalConnector />
                      {/* Sub-categories */}
                      <div className="flex flex-col items-center gap-3">
                        {category.children.map((subcat, subIdx) => (
                          <Node key={subIdx} title={subcat.title} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View (below md) */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            {/* Root Node */}
            <Node title={paths.home.title} isRoot={true} />
            <VerticalConnector />

            {/* Main Categories - Stacked */}
            <div className="flex flex-col gap-6 w-full max-w-sm">
              {paths.home.children.map((category, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Category Node */}
                  <div className="flex flex-col items-center">
                    <Node title={category.title} isParent={true} />
                  </div>
                  
                  {category.children && (
                    <>
                      <VerticalConnector />
                      {/* Sub-categories - Horizontal scroll or wrap */}
                      <div className="flex flex-col items-center gap-3 px-4">
                        {category.children.map((subcat, subIdx) => (
                          <Node key={subIdx} title={subcat.title} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend - Responsive */}
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded"></div>
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#333333] border border-gray-700 rounded"></div>
            <span>Categories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-400 rounded"></div>
            <span>Pages</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YPCSitemap;