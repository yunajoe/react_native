 package com.mealfinder;
 import com.facebook.react.bridge.ReactApplicationContext;
 import com.facebook.react.bridge.ReactContextBaseJavaModule;
 import com.facebook.react.bridge.ReactMethod;

 import android.util.Log;

 public class  CalendarModule extends ReactContextBaseJavaModule {
     CalendarModule(ReactApplicationContext context) {
         super(context);
     }
     // add to CalendarModule.java
     @Override
     public String getName() {
         return "CalendarModule";
     }

     @ReactMethod
     public void createCalendarEvent(String name, String location) {
         Log.d("CalendarModule", "Create event called with name: " + name
                 + " and location: " + location);
     }

 }
