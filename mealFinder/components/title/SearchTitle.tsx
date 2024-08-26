import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {darkModeStyling} from '@/styles/darkmode/dark_mode_style';
import {AllowedMode} from '@/theme';
import {Food} from '@/types/item';

type SearchTitleProps = {
  theme: AllowedMode;
  noSearchKeyword: string;
  searchData: Food[];
  searchedTitle: string;
  isSearchApiCalled: boolean;
};

function SearchTitle({
  theme,
  noSearchKeyword,
  searchData,
  searchedTitle,
  isSearchApiCalled,
}: SearchTitleProps) {
  const darkModeStyle = darkModeStyling(theme);

  const conditionDataText =
    searchData === null ? (
      <Text style={[darkModeStyle.title, styles.title]}>
        {searchedTitle} 검색어의 데이터가 없습니다
      </Text>
    ) : (
      <Text style={[darkModeStyle.title, styles.title]}>
        {searchedTitle} 검색어의 결과 입니다
      </Text>
    );

  return (
    <View>
      {!isSearchApiCalled ? (
        <View>
          {noSearchKeyword.length > 0 && (
            <Text style={[darkModeStyle.title, styles.title]}>
              {noSearchKeyword}
            </Text>
          )}
        </View>
      ) : (
        <View>{conditionDataText}</View>
      )}
    </View>
  );
}

export default SearchTitle;

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 10,
  },
});
