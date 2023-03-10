import * as React from "react";
import { Link } from "@remix-run/react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { classNames } from "~/utils/tailwind";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Credits", path: "/credits" },
];

export function MobileMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* TODO: Fix accesibility */}
        {/* TODO: Fix shadow when opened */}
        <Menu.Button className="inline-flex w-8 h-8 items-center justify-center border border-black bg-white focus:outline-none shadow-brutalism active:shadow-none">
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {links.map((link) => (
              <Menu.Item key={link.path}>
                {({ active }) => (
                  <Link
                    to={link.path}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
