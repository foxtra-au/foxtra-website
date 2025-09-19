import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 font-sans ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link ? (
              <a
                href={navItem.link}
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/70 transition-colors duration-300 group drop-shadow-md mega-menu-text mega-menu-item"
              >
                <span>{navItem.label}</span>
              </a>
            ) : (
              <button
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/70 transition-colors duration-300 group drop-shadow-md mega-menu-text mega-menu-item"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-white/10"
                    style={{
                      borderRadius: 99,
                    }}
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-2 z-50">
                  <motion.div
                    className="w-max border border-white/10 bg-black/90 backdrop-blur-xl px-8 py-4 shadow-2xl font-sans"
                    style={{
                      borderRadius: 16,
                    }}
                    layoutId="menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex w-fit shrink-0 space-x-12 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className={`w-full ${sub.title.toLowerCase() === 'industries' ? 'min-w-[400px]' : 'min-w-[200px]'}`} key={sub.title}>
                          <h3 className="mb-4 text-sm capitalize text-white/50 mega-menu-text">
                            {sub.title}
                          </h3>
                          {/* Check if this is the Industries section and has many items */}
                          {sub.title.toLowerCase() === 'industries' && sub.items.length > 6 ? (
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <div key={item.label}>
                                    <a
                                      href={item.href || "#"}
                                      className="flex items-start space-x-3 group mega-menu-submenu-item"
                                      onMouseEnter={(e) => {
                                        const iconDiv = e.currentTarget.querySelector('div') as HTMLElement;
                                        if (iconDiv) iconDiv.style.backgroundColor = '#FFCC02';
                                      }}
                                      onMouseLeave={(e) => {
                                        const iconDiv = e.currentTarget.querySelector('div') as HTMLElement;
                                        if (iconDiv) iconDiv.style.backgroundColor = 'transparent';
                                      }}
                                    >
                                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white">
                                        <Icon className="h-4 w-4 flex-none" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm text-white transition-colors duration-300 mega-menu-text">
                                          {item.label}
                                        </p>
                                        <p className="shrink-0 text-xs text-white/50 transition-colors duration-300 mega-menu-text">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <ul className="space-y-8">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.label}>
                                    <a
                                      href={item.href || "#"}
                                      className="flex items-start space-x-3 group mega-menu-submenu-item"
                                      onMouseEnter={(e) => {
                                        const iconDiv = e.currentTarget.querySelector('div') as HTMLElement;
                                        if (iconDiv) iconDiv.style.backgroundColor = '#FFCC02';
                                      }}
                                      onMouseLeave={(e) => {
                                        const iconDiv = e.currentTarget.querySelector('div') as HTMLElement;
                                        if (iconDiv) iconDiv.style.backgroundColor = 'transparent';
                                      }}
                                    >
                                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/60 transition-all duration-300 group-hover:text-black group-hover:border-white">
                                        <Icon className="h-4 w-4 flex-none" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm text-white transition-colors duration-300 mega-menu-text">
                                          {item.label}
                                        </p>
                                        <p className="shrink-0 text-xs text-white/50 transition-colors duration-300 mega-menu-text">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
