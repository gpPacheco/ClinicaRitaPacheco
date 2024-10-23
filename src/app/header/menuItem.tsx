// itens do menu
type MenuItemProps = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const MenuItem = ({ name, href, icon }: MenuItemProps) => (
  <a
    href={href}
    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-600 hover:text-white"
  >
    {icon}
    <span className="ml-2">{name}</span>
  </a>
);

export default MenuItem;
