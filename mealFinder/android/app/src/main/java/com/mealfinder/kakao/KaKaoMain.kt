package com.mealfinder.kakao

import android.util.Log

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.flipper.ReactNativeFlipper
import com.facebook.soloader.SoLoader
import com.kakao.sdk.auth.model.OAuthToken
import com.kakao.sdk.common.KakaoSdk
import com.kakao.sdk.common.model.ClientError
import com.kakao.sdk.common.model.ClientErrorCause
import com.kakao.sdk.user.UserApiClient
import com.mealfinder.BuildConfig
import com.mealfinder.MainApplication

private const val TAG = "KaKaoMain"
class KaKaoMain(reactContext: ReactApplicationContext):ReactContextBaseJavaModule(reactContext) {
    private val context: ReactApplicationContext = reactContext
    override fun getName(): String {
        return "KaKaoModule"
    }

    private val callback: (OAuthToken?, Throwable?) -> Unit = { token, error ->
        if (error != null) {
            Log.e(TAG, "카카오계정으로 로그인 실패", error)
        } else if (token != null) {
            Log.i(TAG, "카카오계정으로 로그인 성공 ${token.accessToken}")

        }
    }

//    @ReactMethod
//    fun getKaKaoLogin(){
//        if (UserApiClient.instance.isKakaoTalkLoginAvailable(context)) {
//            context.currentActivity?.let {
//                UserApiClient.instance.loginWithKakaoTalk(context) { token, error ->
//                    if (error != null) {
//                        Log.e(TAG, "카카오톡으로 로그인 실패", error)
//
//                        if (error is ClientError && error.reason == ClientErrorCause.Cancelled) {
//                            return@loginWithKakaoTalk
//
//                        }
//                        // 카카오톡에 연결된 카카오계정이 없는 경우, 카카오계정으로 로그인 시도
//                        UserApiClient.instance.loginWithKakaoAccount(context, callback = callback)
//                    } else if (token != null) {
//                        Log.i(TAG, "카카오톡으로 로그인 성공 ${token.accessToken}")
////                    requestKakaoUserInfo()
//
//                    }
//                }
//            }
//        } else {
//            UserApiClient.instance.loginWithKakaoAccount(context, callback = callback)
//        }
//    }
@ReactMethod
fun getKaKaoLogin() {
    // Check if KakaoTalk login is available
    if (UserApiClient.instance.isKakaoTalkLoginAvailable(context)) {
        // Ensure that we have a valid Activity context
        context.currentActivity?.let { activity ->
            UserApiClient.instance.loginWithKakaoTalk(activity) { token, error ->
                if (error != null) {
                    Log.e(TAG, "카카오톡으로 로그인 실패", error)

                    if (error is ClientError && error.reason == ClientErrorCause.Cancelled) {
                        // Login was cancelled by the user
                        return@loginWithKakaoTalk
                    }

                    // If KakaoTalk login fails, attempt KakaoAccount login
                    UserApiClient.instance.loginWithKakaoAccount(activity, callback = callback)
                } else if (token != null) {
                    Log.i(TAG, "카카오톡으로 로그인 성공 ${token.accessToken}")
                    // Proceed with successful login
                    // requestKakaoUserInfo()
                }
            }
        } ?: run {
            Log.e(TAG, "Current activity is null. Ensure that the currentActivity is properly set.")
        }
    } else {
        // If KakaoTalk login is not available, attempt KakaoAccount login
        UserApiClient.instance.loginWithKakaoAccount(context, callback = callback)
    }
}
    @ReactMethod
    fun add(a:Double, b: Double, callback:Callback){
        var c: Double = a + b
        callback.invoke(c)
    }



}