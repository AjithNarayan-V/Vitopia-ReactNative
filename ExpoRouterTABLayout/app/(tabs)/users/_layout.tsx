import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return <Drawer >
    <Drawer.Screen name="users" options={{ drawerLabel: 'Users' }} />
    <Drawer.Screen name="settings" options={{ drawerLabel: 'Settings' }} />
  </Drawer>;
}