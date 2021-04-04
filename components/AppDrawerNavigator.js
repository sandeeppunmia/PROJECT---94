import React, { Component } from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import { Icon } from 'react-native-elements';
import SettingScreen from '../screens/SettingsScreen'
import MembersScreen from '../screens/MembersScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
       screen:AppTabNavigator
    },
    Settings:{
       screen:SettingScreen 
    },
    AddMembers:{
        screen:MembersScreen
    }
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
}
)