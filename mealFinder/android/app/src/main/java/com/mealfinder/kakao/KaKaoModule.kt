package com.mealfinder.kakao

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.Collections

class KaKaoModule():ReactPackage {
//    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
//       val modules = ArrayList<NativeModule>()
//        modules.add(KaKaoMain(reactContext))
//        return modules
//    }
//
//    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*,*>> {
//        return Collections.emptyList<ViewManager<*,*>>()
//    }

    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(KaKaoMain(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }

}