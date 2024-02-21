import IconCustomerActive from './images/customer-active.png';
import IconCustomer from './images/customer.png';
import IconDashboardActive from './images/dashboard-active.png';
import IconDashboard from './images/dashboard.png';
import IconHomeActive from './images/home-active.png';
import IconHome from './images/home.png';
import IconMenuActive from './images/menu-active.png';
import IconMenu from './images/menu.png';
import IconSaleActive from './images/sale-active.png';
import IconSale from './images/sale.png';

export const getIconTab = (routeName, focused) => {
  switch (routeName) {
    case 'HomeTab':
      return focused ? IconHomeActive : IconHome;

    case 'SaleTab':
      return focused ? IconSaleActive : IconSale;

    case 'CustomerTab':
      return focused ? IconCustomerActive : IconCustomer;

    case 'DashboardTab':
      return focused ? IconDashboardActive : IconDashboard;

    case 'MenuTab':
      return focused ? IconMenuActive : IconMenu;

    default:
      return IconHome;
  }
};
