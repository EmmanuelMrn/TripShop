import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import DashboardScreen from './screens/DashboardScreen';
import AdminScreen from './screens/AdminScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import ItemScreen from './screens/ItemScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import SettingsScreen from './screens/SettingsScreen';
import CartItemScreen from './screens/CartItems';
import Sidebar from './components/sidebar';

const AppNavigator = createDrawerNavigator({
  Inicio: { screen: DashboardScreen },
  'Mi cuenta': { screen: MyAccountScreen },
  'Mis pedidos': { screen: MyOrdersScreen },
  Favoritos: { screen: FavoriteScreen },
  Ajustes: { screen: SettingsScreen },
  Administrador: { screen: AdminScreen },
  Item: { screen: ItemScreen },
  Cart: { screen: CartItemScreen },
},
{
  contentComponent: Sidebar
});

export default createAppContainer(AppNavigator);
