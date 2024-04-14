import { NavLink } from "react-router-dom";
import { cn } from "/src/utils/utils";

const HeaderNavItem = (pageLink, isNotFoundPage) => {
  let link = pageLink.link;
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return cn(
            "nav-link font-bold",
            isActive
              ? `active text-elegantViolet-900 underline`
              : ` ${
                  isNotFoundPage
                    ? "text-gray-500 dark:hover:text-secColor hover:underline hover:text-elegantViolet-900"
                    : "hover:text-text-elegantViolet-900"
                }`
          );
        }}
        end
      >
        {link.title}
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
