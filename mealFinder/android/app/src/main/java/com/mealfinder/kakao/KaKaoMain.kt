package com.mealfinder.kakao

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.kakao.sdk.auth.model.OAuthToken
import com.kakao.sdk.user.UserApiClient
import java.text.SimpleDateFormat
import java.util.Date as Date

private const val TAG = "KaKaoMain"

class KaKaoMain(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "KaKaoModule"
    }

    private val context: ReactApplicationContext = reactContext

    private fun convertDateToString(date: Date): String {
        val formatter = SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
        return formatter.format(date)
    }

    private fun loginFailKaKaoAccount(error: Throwable) {
        Log.e(TAG, "카카오로그인이 실패")
        throw error
    }

    private fun loginSuccessKakaoAccount(callback: Callback?) {
        UserApiClient.instance.loginWithKakaoAccount(context) { token, error ->
            if (error != null) {
                if (error.toString().contains("statusCode=302")) {
                    loginSuccessKakaoAccount(callback)
                } else {
                    loginFailKaKaoAccount(error)
                }
            }
            if (token != null) {
                val (accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt, idToken, scopes) = token
                Log.i(TAG, "카카오계정으로 로그인 성공")
                val stringAccessTokenDate = convertDateToString(accessTokenExpiresAt)
                val stringRefreshTokenDate = convertDateToString(refreshTokenExpiresAt)
                val arrayScopes = scopes?.toList() ?: emptyList()

                val mappedTokenInfo = Arguments.createMap().apply {
                    putString("accessToken", accessToken)
                    putString("accessTokenExpiresAt", stringAccessTokenDate)
                    putString("refreshToken", refreshToken)
                    putString("refreshTokenExpiresAt", stringRefreshTokenDate)
                    putString("idToken", idToken)

                    val scopesArray = Arguments.createArray()
                    arrayScopes.forEach { scope ->
                        scopesArray.pushString(scope)
                    }

                }
                Log.i(TAG, "Token Map: $mappedTokenInfo")
                callback?.invoke(mappedTokenInfo)
            }
        }
    }


    @ReactMethod
    fun getKaKaoLogin(callback: Callback) {
        try {
            if (UserApiClient.instance.isKakaoTalkLoginAvailable(context)) {
                context.currentActivity?.let { activity ->
                    UserApiClient.instance.loginWithKakaoTalk(activity) { token, error ->
                        if (error != null) {
                            if (error.toString().contains("statusCode=302")) {
                                loginSuccessKakaoAccount(callback)
                            } else {
                                callback.invoke(null)
                            }
                        } else {
                            loginSuccessKakaoAccount(callback)
                        }
                    }
                }
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }

    }

    @ReactMethod
    fun getUserProfile(callback: Callback){
        UserApiClient.instance.me { user, error ->
            if(error !=null){
                Log.e(TAG, "유저정보 불러오기 실패")
                callback.invoke(null)
                return@me
            }
            if(user !=null){
                val kakaoId = user.id.toString()
                val kakaoAccount= user.kakaoAccount
                 if(kakaoAccount !=null){
                     var email = kakaoAccount.email
                     var nickname = kakaoAccount.profile?.nickname
                     var profileImageUrl = kakaoAccount.profile?.profileImageUrl
                     var thumbnailImageUrl = kakaoAccount.profile?.thumbnailImageUrl


                     val mappedUserInfo = Arguments.createMap().apply {
                         putString("kakaoId", kakaoId)
                         putString("kakaoEmail", email)
                         putString("kakaoNickName", nickname)
                         putString("profileImageUrl", profileImageUrl)
                         putString("thumbnailImageUrl ", thumbnailImageUrl)
                     }
                     callback.invoke(mappedUserInfo)

                }

            }
        }
    }

    @ReactMethod
    private fun getKaKaoLogOut(callback: Callback) {
        UserApiClient.instance.logout { error: Throwable? ->
            if(error !=null){
                callback.invoke(null)
                return@logout
            }
            val result = Arguments.createMap().apply {
                putInt("status", 200)
                putString("message", "정상적으로 로그아웃이 되었습니다")
            }
            callback.invoke(result)
        }
    }

}